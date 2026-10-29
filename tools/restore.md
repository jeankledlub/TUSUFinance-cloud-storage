# Restoring from a backup

The backup file (`tusu-backup-YYYY-MM-DD.json`) comes from Tools → Backup on the site. It holds every Firestore collection except `team`. The PDFs themselves are in the DOCUMENT CENTER Google Drive folder and aren't part of it.

The file contains personal data, so keep it off GitHub and out of shared chats.

## Put the data back

1. Sign in to the site with an **editor** account.
2. Open DevTools (F12) and go to the Console tab.
3. Paste the following and press Enter, then choose the backup file:

```js
const inp = Object.assign(document.createElement('input'), { type: 'file', accept: '.json' });
inp.onchange = async () => {
  const b = JSON.parse(await inp.files[0].text()), db = API.db();
  for (const col of ['folders', 'docs', 'clubs', 'thumbs', 'mascots'])
    for (const { id, ...data } of b[col] || [])
      await db.collection(col).doc(id).set(data).catch(e => console.warn(col, id, e.code));
  alert('Restored. Reload the page.');
};
inp.click();
```

This overwrites the documents that share an id with the backup. Anything added after the backup was made is kept.

`mascots` only restores entries you added yourself, because the rules allow only `by == your email` to create one. Other people's photos are skipped with a permission error in the console. Have them re-add their photos.

The `team` list isn't in the backup, so re-add members by hand in Firebase console → Firestore → `team`, as before.
