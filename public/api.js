/*
 * api.js — the only file that knows where data and files live.
 *
 * The rest of the site (app.js) calls window.API and never talks to a database directly.
 * MODE = 'firebase': data comes from Firestore and files from Google Drive (see FIREBASE below).
 * MODE = 'sample' needs data/sample-data.js (not deployed: it contains personal data).
 *
 * Data shape the site expects (see README.md for every field):
 *   folders: { id, name, parent, color }
 *   docs:    { id, title, folder, type, year, status, clubIds[], clubs[], announced, meet, committee[],
 *              fileUrl, thumbUrl, fileName, mime, sizeBytes, pageCount, trashed, createdAt, updatedAt }
 *            a link item is a doc with { kind: 'link', url }
 *   clubs:   { id, kind: 'club'|'indep', campus, name, short, cat, status, advisor, links[{label,url}], contact{rep,pos,phone,ch}, ... }
 */
(function () {
  const MODE = 'firebase'; // 'sample' | 'firebase'

  /* ---------- SAMPLE: works anywhere, no account needed ---------- */
  const SAMPLE = {
    demo: true,
    async load() { return JSON.parse(JSON.stringify(window.SAMPLE_DATA || { folders: [], docs: [], clubs: [] })); },
    async canEdit() { return true; },          // lets you try the editing screens
    canUpload() { return true; },
    async put(collection, obj) { /* demo: not saved */ },
    async remove(collection, id) { /* demo: not saved */ },
    async upload(file, thumbBlob) {              // demo: keeps the file in this tab only
      return { fileUrl: URL.createObjectURL(file), thumbUrl: thumbBlob ? URL.createObjectURL(thumbBlob) : '', sizeBytes: file.size };
    },
    async removeFile(doc) { /* demo */ },
    _m: [], me: () => 'demo',
    async listMascots() { return this._m; },
    async addMascot(url) { const m = { id: 'm' + Date.now(), url, by: 'demo', createdAt: new Date().toISOString() }; this._m.push(m); return m; },
    async removeMascot(id) { this._m = this._m.filter(m => m.id !== id); },
    _t: [{ id: 'demo', role: 'editor', admin: true }, { id: 'viewer@example.com', role: 'viewer' }],
    isAdmin() { return true; },
    async listTeam() { return JSON.parse(JSON.stringify(this._t)); },
    async putMember(email, role, admin) { const m = this._t.find(x => x.id === email); if (m) Object.assign(m, { role, admin }); else this._t.push({ id: email, role, admin, addedBy: 'demo', addedAt: new Date().toISOString() }); },
    async removeMember(email) { this._t = this._t.filter(x => x.id !== email); },
    async backup() { return { project: 'sample', exportedAt: new Date().toISOString(), by: 'demo', ...(await this.load()), thumbs: [], mascots: this._m }; },
    fileUrl: d => d.fileUrl || '',
    thumbUrl: d => d.thumbUrl || ''
  };

  /* ---------- FIREBASE: project document-center-513108 ----------
   * Sign-in: Google account (basic profile only). Only emails listed in the Firestore collection `team`
   * (document id = email, field role: 'viewer' | 'editor') can read data; see firestore.rules.
   * A team member with admin: true (always role 'editor') manages the list on the Team page.
   * Files: doc.driveId points at a PDF in the DOCUMENT CENTER Drive folder. The browser gets it from
   * FILE_SERVER (apps-script/Code.gs), which checks the viewer's sign-in token before sending the file.
   * Thumbnails live in the `thumbs` collection (document id = doc id, field data = data: URL).
   */
  const firebaseConfig = {
    apiKey: 'AIzaSyDcKORfq1K-HWNSGIglxevwPu7g5-dreI8',
    // Sign in through the same domain the site is opened on: Safari on iPhone blocks the sign-in
    // from reading its state across domains ("missing initial state"). Each domain's
    // https://<domain>/__/auth/handler must be an authorized redirect URI of the OAuth client.
    authDomain: /^document-center-513108\.(web\.app|firebaseapp\.com)$/.test(location.hostname) ? location.hostname : 'document-center-513108.firebaseapp.com',
    projectId: 'document-center-513108',
    storageBucket: 'document-center-513108.firebasestorage.app',
    appId: '1:201661692433:web:ee7dc4ace09512a1698fb0'
  };
  const FILE_SERVER = 'https://script.google.com/macros/s/AKfycbxMJCoZiteie-DpO3cv9NiCu-tTYO97coioBpC8wG9Z8ZdfVre4ADj70T2Fo9a_xp1P/exec'; // apps-script/Code.gs
  const escH = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Full-screen card over the site. With `action`, shows a button and resolves with action()'s result.
  function gate({ title, text, button, action, signOut }) {
    let el = document.getElementById('authGate');
    if (!el) {
      el = document.createElement('div'); el.id = 'authGate';
      el.style.cssText = 'position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:16px;background:color-mix(in srgb,var(--bg,#fff) 88%,transparent);backdrop-filter:blur(6px)';
      document.body.append(el);
    }
    el.innerHTML = `<div style="max-width:380px;width:100%;background:var(--card,#fff);border:1px solid var(--line-2,#ddd);border-radius:20px;padding:28px;text-align:center;display:grid;gap:14px">
      <h2 style="margin:0;font-size:20px">${escH(title)}</h2><p style="margin:0;color:var(--muted,#666);line-height:1.6">${text}</p>
      <p id="gateErr" style="margin:0;color:var(--bad,#c00);font-size:13px" hidden></p>
      ${button ? `<button class="btn go" id="gateGo">${escH(button)}</button>` : ''}
      ${signOut ? `<button class="btn sm" id="gateOut">ออกจากระบบ · Sign out</button>` : ''}</div>`;
    if (signOut) el.querySelector('#gateOut').onclick = async () => { await firebase.auth().signOut(); location.reload(); };
    if (!action) return new Promise(() => {});
    return new Promise(res => {
      const go = el.querySelector('#gateGo');
      go.onclick = async () => {
        go.disabled = true;
        try { const v = await action(); el.remove(); res(v); }
        catch (e) {
          console.error(e);
          const err = el.querySelector('#gateErr'); err.hidden = false;
          err.textContent = e.code === 'auth/popup-closed-by-user' ? 'ปิดหน้าต่างล็อกอินก่อนเสร็จ ลองอีกครั้ง' : 'ล็อกอินไม่สำเร็จ: ' + (e.code || e.message);
          go.disabled = false;
        }
      };
    });
  }

  const toDataUrl = blob => new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = () => rej(fr.error); fr.readAsDataURL(blob); });
  const toB64 = async blob => (await toDataUrl(blob)).split(',')[1];
  // Built-in browsers of chat and social apps, where Google blocks sign-in (403 disallowed_useragent).
  const UA = navigator.userAgent;
  // On iPhone, Safari and the Safari view apps open links in say "Safari/"; an app's own browser does not
  // (Telegram's, Threads...). A site saved to the home screen does not either, so it is left out.
  const IN_APP = /\bLine\/|FBAN|FBAV|FB_IAB|Instagram|Messenger|MicroMessenger|KAKAOTALK|TikTok|musical_ly|Bytedance|Twitter|Barcelona|Snapchat|LinkedInApp|Pinterest|; wv\)/i.test(UA)
    || (/iPhone|iPad|iPod/.test(UA) && !/Safari\//.test(UA) && !navigator.standalone);
  // LINE opens the page in the phone's browser when the link has openExternalBrowser=1.
  function leaveLine() {
    if (!/\bLine\//i.test(UA) || /[?&]openExternalBrowser=1/.test(location.search)) return false;
    location.replace(location.pathname + (location.search ? location.search + '&' : '?') + 'openExternalBrowser=1' + location.hash);
    return true;
  }
  // Card that sends people from an in-app browser to Chrome (Android) or Safari (iPhone, iOS 17+), or lets them copy the link.
  function inAppGate() {
    const url = location.href, rest = url.replace(/^https:\/\//, '');
    const open = /Android/i.test(UA)
      ? `intent://${rest.replace(/#.*$/, '')}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(url)};end`
      : `x-safari-https://${rest}`;
    gate({
      title: 'เปิดในเบราว์เซอร์ก่อน',
      text: `ลิงก์นี้เปิดอยู่ในแอปอื่น ซึ่ง Google ไม่ให้ล็อกอิน กดปุ่มด้านล่างเพื่อเปิดใน ${/Android/i.test(UA) ? 'Chrome' : 'Safari'} หรือคัดลอกลิงก์ไปเปิดเอง<br><small>This link opened inside another app, where Google blocks sign-in. Open it in your browser, or copy the link.</small>
        <a class="btn go" href="${escH(open)}" style="margin-top:14px;display:flex;justify-content:center">เปิดในเบราว์เซอร์ · Open in browser</a>
        <button class="btn" id="gateCopy" style="margin-top:8px;width:100%">คัดลอกลิงก์ · Copy link</button>`
    });
    document.getElementById('gateCopy').onclick = async e => {
      try { await navigator.clipboard.writeText(url); } catch { prompt('', url); return; }
      e.target.textContent = 'คัดลอกแล้ว · Copied';
    };
    return new Promise(() => {});
  }
  const clean = o => JSON.parse(JSON.stringify(o, (k, v) => (k.startsWith('_') || v instanceof Blob ? undefined : v)));
  const FIREBASE = {
    demo: false,
    _db: null,
    _role: null,
    _admin: false,
    db() {
      if (!this._db) { window.firebase.initializeApp(firebaseConfig); this._db = window.firebase.firestore(); }
      return this._db;
    },
    async _signIn() {
      this.db();
      const user = await new Promise(res => { const off = firebase.auth().onAuthStateChanged(u => { off(); res(u); }); });
      if (user) return user;
      if (IN_APP) return leaveLine() ? new Promise(() => {}) : inAppGate();
      return gate({
        title: 'คลังเอกสาร อมธ.',
        text: 'สำหรับฝ่ายดาต้าเท่านั้น ล็อกอินด้วยบัญชี Google ที่ได้รับสิทธิ์<br><small>Data team only. Sign in with your approved Google account.</small>',
        button: 'ล็อกอินด้วย Google · Sign in with Google',
        action: async () => {
          const provider = new firebase.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: 'select_account' });
          return (await firebase.auth().signInWithPopup(provider)).user;
        }
      });
    },
    async load() {
      const user = await this._signIn();
      const db = this.db();
      const me = await db.collection('team').doc(user.email).get().catch(() => null);
      if (!me || !me.exists) {
        return gate({ title: 'ยังไม่มีสิทธิ์เข้าถึง', text: `บัญชี <b>${escH(user.email)}</b> ยังไม่อยู่ในรายชื่อฝ่ายดาต้า ติดต่อผู้ดูแลเพื่อขอสิทธิ์<br><small>This account is not on the data team list.</small>`, signOut: true });
      }
      this._role = me.data().role || 'viewer';
      this._admin = me.data().admin === true;
      db.collection('team').doc(user.email).update({ lastSeen: firebase.firestore.FieldValue.serverTimestamp() }).catch(() => {});
      const all = async name => (await db.collection(name).get()).docs.map(x => ({ id: x.id, ...x.data() }));
      const [folders, docs, clubs, thumbs] = await Promise.all([all('folders'), all('docs'), all('clubs'), all('thumbs')]);
      const th = new Map(thumbs.map(t => [t.id, t.data]));
      docs.forEach(d => { if (th.has(d.id)) d._thumb = th.get(d.id); });
      return { folders, docs, clubs };
    },
    // Resolves with a Response like fetch(), so app.js can read the bytes the same way.
    async fetchFile(d) {
      if (!d.driveId) return fetch(d.fileUrl || '');
      if (!FILE_SERVER) throw new Error('FILE_SERVER not set in api.js');
      const token = await firebase.auth().currentUser.getIdToken();
      const r = await fetch(FILE_SERVER, { method: 'POST', body: JSON.stringify({ id: d.id, token }) }); // text/plain: no CORS preflight
      const j = await r.json();
      if (j.error) return new Response(null, { status: 403 });
      const bin = atob(j.data), u = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
      return new Response(u, { headers: { 'Content-Type': j.mime } });
    },
    async canEdit() { return this._role === 'editor'; },
    canUpload() { return this._role === 'editor' && !!FILE_SERVER; },
    // A new upload carries its cover as a data: URL in thumbUrl; it is stored in `thumbs`, not in the doc.
    async put(collection, obj) {
      const { id, ...rest } = clean(obj);
      if (collection === 'docs' && (rest.thumbUrl || '').startsWith('data:')) {
        await this.db().collection('thumbs').doc(id).set({ data: rest.thumbUrl });
        rest.thumbUrl = '';
      }
      await this.db().collection(collection).doc(id).set(rest);
    },
    async remove(collection, id) { await this.db().collection(collection).doc(id).delete(); },
    me: () => firebase.auth().currentUser?.email || '',
    isAdmin() { return this._admin; },
    // Team list for admins: { id (email), role, admin, addedBy, addedAt, lastSeen (ISO) }.
    async listTeam() {
      return (await this.db().collection('team').get()).docs.map(x => {
        const d = x.data();
        return { id: x.id, ...d, lastSeen: d.lastSeen?.toDate ? d.lastSeen.toDate().toISOString() : '' };
      });
    },
    async putMember(email, role, admin) {
      const ref = this.db().collection('team').doc(email);
      if ((await ref.get()).exists) await ref.update({ role, admin });
      else await ref.set({ role, admin, addedBy: this.me(), addedAt: new Date().toISOString() });
    },
    async removeMember(email) { await this.db().collection('team').doc(email).delete(); },
    // Assistant photos shared with the whole team: `mascots` collection, { url (data: URL), by, createdAt }.
    async listMascots() { return (await this.db().collection('mascots').orderBy('createdAt').get()).docs.map(x => ({ id: x.id, ...x.data() })); },
    async addMascot(url) {
      const m = { url, by: this.me(), createdAt: new Date().toISOString() }, ref = this.db().collection('mascots').doc();
      await ref.set(m); return { id: ref.id, ...m };
    },
    async removeMascot(id) { await this.db().collection('mascots').doc(id).delete(); },
    // Everything in Firestore except `team`, for the editor's Backup button. PDFs stay in Drive.
    async backup() {
      const db = this.db(), all = async name => (await db.collection(name).get()).docs.map(x => ({ id: x.id, ...x.data() }));
      const [folders, docs, clubs, thumbs, mascots] = await Promise.all(['folders', 'docs', 'clubs', 'thumbs', 'mascots'].map(all));
      return { project: firebaseConfig.projectId, exportedAt: new Date().toISOString(), by: this.me(), folders, docs, clubs, thumbs, mascots };
    },
    // Sends the file to FILE_SERVER (apps-script/Upload.gs), which saves it into the DOCUMENT CENTER Drive folder.
    async upload(file, thumbBlob) {
      const res = await this._server({ action: 'upload', name: file.name, mime: file.type || '', data: await toB64(file) });
      return {
        fileUrl: `https://drive.google.com/file/d/${res.driveId}/view`,
        driveId: res.driveId,
        thumbUrl: thumbBlob ? await toDataUrl(thumbBlob) : '',
        sizeBytes: file.size
      };
    },
    // Moves the Drive file to Drive's trash (recoverable for 30 days) and drops its cover.
    async removeFile(doc) {
      if (doc.driveId) await this._server({ action: 'trash', driveId: doc.driveId });
      await this.db().collection('thumbs').doc(doc.id).delete().catch(() => {});
    },
    async _server(body) {
      if (!FILE_SERVER) throw new Error('FILE_SERVER not set in api.js');
      const token = await firebase.auth().currentUser.getIdToken();
      const r = await fetch(FILE_SERVER, { method: 'POST', body: JSON.stringify({ ...body, token }) }); // text/plain: no CORS preflight
      const j = await r.json();
      if (j.error) throw Object.assign(new Error(j.error), { code: j.error === 'too large' ? 'too_large' : j.error === 'bad type' ? 'unsupported_type' : 'server' });
      return j;
    },
    fileUrl: d => d.driveId ? `https://drive.google.com/file/d/${d.driveId}/view` : (d.fileUrl || ''),
    thumbUrl: d => d._thumb || d.thumbUrl || ''
  };

  window.API = MODE === 'firebase' ? FIREBASE : SAMPLE;
})();
