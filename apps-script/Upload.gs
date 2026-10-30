/**
 * Uploads from the website into the DOCUMENT CENTER Drive folder (team members and @dome.tu.ac.th accounts),
 * and moving files to trash (editors only).
 * Uses PROJECT, ROOT_FOLDER, insideRoot() and reply() from Code.gs.
 *
 * Code.gs doPost sends any request with an `action` here, right after parsing:
 *   if (req.action) return uploadRoute(req);
 *
 * The website (public/api.js) sends text/plain JSON:
 *   { action: 'upload', token, name, mime, data (base64) }  ->  { driveId }
 *   { action: 'trash',  token, driveId }                     ->  { ok: true }
 */
const UPLOAD_API_KEY = 'AIzaSyDcKORfq1K-HWNSGIglxevwPu7g5-dreI8'; // Firebase web key (public, same as api.js)
const UPLOAD_MAX_BYTES = 20 * 1024 * 1024; // same limit as the website
const UPLOAD_SUBFOLDER = {
  'application/pdf': 'อัปโหลดจากเว็บ',
  'image/jpeg': 'รูปภาพ',
  'image/png': 'รูปภาพ',
  'image/webp': 'รูปภาพ'
};

function uploadRoute(req) {
  try {
    const who = uploader(String(req.token || ''));
    if (!who) return reply({ error: 'denied' });
    if (req.action === 'upload') return reply(uploadFile(req, who.email));
    if (req.action === 'trash') return reply(who.editor ? trashFile(req) : { error: 'denied' });
    return reply({ error: 'bad request' });
  } catch (err) {
    console.error(err);
    return reply({ error: 'failed' });
  }
}

// { email, editor } if the Firebase token is valid and the person is in `team` or has a @dome.tu.ac.th account, else null.
function uploader(token) {
  if (!token) return null;
  const look = UrlFetchApp.fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + UPLOAD_API_KEY, {
    method: 'post', contentType: 'application/json', payload: JSON.stringify({ idToken: token }), muteHttpExceptions: true
  });
  if (look.getResponseCode() !== 200) return null;
  const user = (JSON.parse(look.getContentText()).users || [])[0];
  if (!user || !user.email || !user.emailVerified) return null;
  // Read the person's own team doc with their own token, so firestore.rules decide, as on the website.
  const r = UrlFetchApp.fetch(
    'https://firestore.googleapis.com/v1/projects/' + PROJECT + '/databases/(default)/documents/team/' + encodeURIComponent(user.email),
    { headers: { Authorization: 'Bearer ' + token }, muteHttpExceptions: true }
  );
  if (r.getResponseCode() === 404) return /@dome\.tu\.ac\.th$/.test(user.email) ? { email: user.email, editor: false } : null;
  if (r.getResponseCode() !== 200) return null;
  const role = ((JSON.parse(r.getContentText()).fields || {}).role || {}).stringValue;
  return { email: user.email, editor: role === 'editor' };
}

function uploadFile(req, email) {
  const sub = UPLOAD_SUBFOLDER[req.mime];
  if (!sub) return { error: 'bad type' };
  if (!req.data || !req.name) return { error: 'bad request' };
  const bytes = Utilities.base64Decode(req.data);
  if (bytes.length > UPLOAD_MAX_BYTES) return { error: 'too large' };
  const name = String(req.name).replace(/[\\/:*?"<>|]/g, '_').slice(0, 200);
  const file = subfolder(sub).createFile(Utilities.newBlob(bytes, req.mime, name));
  file.setDescription('อัปโหลดจากเว็บคลังเอกสารโดย ' + email + ' เมื่อ ' + new Date().toISOString());
  return { driveId: file.getId() };
}

function trashFile(req) {
  if (!req.driveId) return { error: 'bad request' };
  const file = DriveApp.getFileById(String(req.driveId));
  if (!insideRoot(file)) return { error: 'denied' }; // only files from the DOCUMENT CENTER folder
  file.setTrashed(true);
  return { ok: true };
}

function subfolder(name) {
  const root = DriveApp.getFolderById(ROOT_FOLDER);
  const found = root.getFoldersByName(name);
  return found.hasNext() ? found.next() : root.createFolder(name);
}
