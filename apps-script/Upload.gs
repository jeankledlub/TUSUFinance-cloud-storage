/**
 * Upload.gs: lets data-team editors add files to the DOCUMENT CENTER Drive folder from the website,
 * and move them to Drive's trash. Add this file next to Code.gs in the same Apps Script project.
 *
 * Hook it up with one line at the top of doPost in Code.gs, right after the request body is parsed:
 *
 *   if (body.action) return uploadRoute_(body);
 *
 * Requests come from public/api.js as text/plain JSON:
 *   { action: 'upload', token, name, mime, data }  ->  { driveId }
 *   { action: 'trash',  token, driveId }            ->  { ok: true }
 *   anything wrong                                  ->  { error: '...' }
 *
 * Setup: set UPLOAD_ROOT_ID below to the ID of the DOCUMENT CENTER folder (the part after /folders/ in its link).
 */
const UPLOAD_ROOT_ID = '';
const UPLOAD_FIREBASE = { apiKey: 'AIzaSyDcKORfq1K-HWNSGIglxevwPu7g5-dreI8', projectId: 'document-center-513108' };
const UPLOAD_TYPES = {
  'application/pdf': 'อัปโหลดจากเว็บ',
  'image/jpeg': 'รูปภาพ',
  'image/png': 'รูปภาพ',
  'image/webp': 'รูปภาพ'
};
const UPLOAD_MAX_BYTES = 20 * 1024 * 1024; // same limit as the website

function uploadRoute_(body) {
  try {
    if (!UPLOAD_ROOT_ID) return uploadJson_({ error: 'not configured' });
    const email = uploadEditor_(body.token);
    if (!email) return uploadJson_({ error: 'denied' });
    if (body.action === 'upload') return uploadJson_(uploadSave_(body, email));
    if (body.action === 'trash') return uploadJson_(uploadTrash_(body));
    return uploadJson_({ error: 'bad request' });
  } catch (e) {
    console.error(e);
    return uploadJson_({ error: 'failed' });
  }
}

// Returns the signed-in email if the Firebase ID token is valid and that email is an editor in `team`, else ''.
function uploadEditor_(token) {
  if (!token) return '';
  const look = UrlFetchApp.fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + UPLOAD_FIREBASE.apiKey, {
    method: 'post', contentType: 'application/json', payload: JSON.stringify({ idToken: token }), muteHttpExceptions: true
  });
  if (look.getResponseCode() !== 200) return '';
  const user = (JSON.parse(look.getContentText()).users || [])[0];
  if (!user || !user.email || !user.emailVerified) return '';
  // Read the user's own team doc with their own token, so firestore.rules decide access as on the website.
  const url = 'https://firestore.googleapis.com/v1/projects/' + UPLOAD_FIREBASE.projectId +
    '/databases/(default)/documents/team/' + encodeURIComponent(user.email);
  const team = UrlFetchApp.fetch(url, { headers: { Authorization: 'Bearer ' + token }, muteHttpExceptions: true });
  if (team.getResponseCode() !== 200) return '';
  const role = ((JSON.parse(team.getContentText()).fields || {}).role || {}).stringValue;
  return role === 'editor' ? user.email : '';
}

function uploadSave_(body, email) {
  const sub = UPLOAD_TYPES[body.mime];
  if (!sub) return { error: 'bad type' };
  if (!body.data || !body.name) return { error: 'bad request' };
  const bytes = Utilities.base64Decode(body.data);
  if (bytes.length > UPLOAD_MAX_BYTES) return { error: 'too large' };
  const name = String(body.name).replace(/[\\/:*?"<>|]/g, '_').slice(0, 200);
  const file = uploadFolder_(sub).createFile(Utilities.newBlob(bytes, body.mime, name));
  file.setDescription('อัปโหลดจากเว็บคลังเอกสารโดย ' + email + ' เมื่อ ' + new Date().toISOString());
  return { driveId: file.getId() };
}

// Only files inside the DOCUMENT CENTER folder can be trashed, so a stray ID can't touch anything else in Drive.
function uploadTrash_(body) {
  if (!body.driveId) return { error: 'bad request' };
  const file = DriveApp.getFileById(body.driveId);
  if (!uploadInsideRoot_(file)) return { error: 'denied' };
  file.setTrashed(true);
  return { ok: true };
}

function uploadInsideRoot_(file) {
  const seen = {};
  let level = [];
  const ps = file.getParents();
  while (ps.hasNext()) level.push(ps.next());
  for (let depth = 0; depth < 10 && level.length; depth++) {
    const next = [];
    for (const f of level) {
      const id = f.getId();
      if (id === UPLOAD_ROOT_ID) return true;
      if (seen[id]) continue;
      seen[id] = true;
      const up = f.getParents();
      while (up.hasNext()) next.push(up.next());
    }
    level = next;
  }
  return false;
}

function uploadFolder_(name) {
  const root = DriveApp.getFolderById(UPLOAD_ROOT_ID);
  const found = root.getFoldersByName(name);
  return found.hasNext() ? found.next() : root.createFolder(name);
}

function uploadJson_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
