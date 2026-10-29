/**
 * File server for คลังเอกสาร อมธ. (https://document-center-513108.web.app)
 *
 * The website sends { id, token }: a document id and the viewer's Firebase sign-in token.
 * Firestore checks the token with the same rules as the website (only the `team` list can read docs),
 * then this script sends that document's PDF from the DOCUMENT CENTER Drive folder.
 * It runs as the folder owner, so viewers need no Drive access and no extra Google permission.
 *
 * Deploy: Deploy > New deployment > Web app, Execute as: Me, Who has access: Anyone.
 */
const PROJECT = 'document-center-513108';
const ROOT_FOLDER = '1cx3vBpzQsu5nIzj569C78BP5Lhz_qImd'; // DOCUMENT CENTER

function doPost(e) {
  let req;
  try { req = JSON.parse(e.postData.contents); } catch (err) { return reply({ error: 'bad request' }); }
  const id = String(req.id || ''), token = String(req.token || '');
  if (!/^[\w.-]{1,200}$/.test(id) || !token) return reply({ error: 'bad request' });

  const r = UrlFetchApp.fetch(
    'https://firestore.googleapis.com/v1/projects/' + PROJECT + '/databases/(default)/documents/docs/' + id,
    { headers: { Authorization: 'Bearer ' + token }, muteHttpExceptions: true }
  );
  if (r.getResponseCode() !== 200) return reply({ error: 'denied' });
  const fields = JSON.parse(r.getContentText()).fields || {};
  const driveId = fields.driveId && fields.driveId.stringValue;
  if (!driveId) return reply({ error: 'no file' });

  const file = DriveApp.getFileById(driveId);
  if (!insideRoot(file)) return reply({ error: 'denied' }); // only files from the DOCUMENT CENTER folder
  return reply({ mime: file.getMimeType(), data: Utilities.base64Encode(file.getBlob().getBytes()) });
}

function insideRoot(file) {
  let level = [file], depth = 0;
  while (level.length && depth++ < 10) {
    const next = [];
    for (const item of level) {
      const parents = item.getParents();
      while (parents.hasNext()) {
        const p = parents.next();
        if (p.getId() === ROOT_FOLDER) return true;
        next.push(p);
      }
    }
    level = next;
  }
  return false;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Run this once from the editor to grant the script access to Drive.
function authorize() { DriveApp.getFolderById(ROOT_FOLDER).getName(); }
