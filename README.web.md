# คลังเอกสาร อมธ. (หน้าเว็บ)

เว็บธรรมดา (HTML / CSS / JavaScript) ไม่ต้อง build ไม่ผูกกับระบบไหน เปิดผ่านเว็บเซิร์ฟเวอร์อะไรก็ได้

## ไฟล์ในโฟลเดอร์

| ไฟล์ | ทำอะไร |
|---|---|
| `index.html` | โครงหน้าเว็บ |
| `styles.css` | หน้าตา สี ธีม 4 แบบ โหมดมืด/สว่าง |
| `app.js` | การทำงานทุกหน้า (ไม่ต้องแก้ตอนต่อ Firebase) |
| `api.js` | **ไฟล์เดียวที่ต้องแก้** — บอกว่าข้อมูลกับไฟล์มาจากไหน |
| `data/sample-data.js` | ข้อมูลตัวอย่าง (ชุมนุม 115 รายการ + ใบแต่งตั้ง 2569) ลบทิ้งได้เมื่อต่อ Firebase แล้ว |
| `files/` | ไฟล์ตัวอย่าง ลบทิ้งได้เมื่อต่อ Firebase แล้ว |
| `assets/mascot.webp` | รูปตัวช่วยมุมจอ |

## ลองเปิดในเครื่อง

```
cd web
python3 -m http.server 8000
```
แล้วเปิด http://localhost:8000 (ดับเบิลคลิก index.html ตรง ๆ จะเปิดไฟล์ PDF ไม่ได้ เพราะเบราว์เซอร์กันไว้)

## ต่อกับ Firebase

1. สร้างโปรเจกต์ Firebase แล้วเปิด Firestore
2. ใน `index.html` เพิ่ม 2 บรรทัดนี้ **ก่อน** `<script src="api.js">` และลบบรรทัด `data/sample-data.js`
   ```html
   <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
   ```
3. ใน `api.js` ใส่ค่า `firebaseConfig` แล้วเปลี่ยน `const MODE = 'sample'` เป็น `'firebase'`
4. อัปเว็บขึ้น Firebase Hosting: `firebase init hosting` (เลือกโฟลเดอร์นี้) แล้ว `firebase deploy`

## ข้อมูลที่หน้าเว็บต้องการ (Firestore 3 collections, document id = `id`)

**`folders`** — โฟลเดอร์ในคลังกลาง
`id, name, parent (id ของโฟลเดอร์แม่ หรือ null), color (blue|green|amber|red|violet|slate)`

**`docs`** — ไฟล์และลิงก์
- ไฟล์: `id, title, folder, type (เช่น "ใบแต่งตั้ง"), year, status (active|draft|archived), clubIds[], clubs[] (ชื่อเต็ม), announced, meet, committee[] ("ชื่อ — ตำแหน่ง"), fileUrl, thumbUrl, fileName, mime, sizeBytes, pageCount, trashed, createdAt, updatedAt`
- ลิงก์ (แบบ link tree): `id, kind: "link", title, url, folder, clubIds[], trashed, createdAt`

**`clubs`** — ชุมนุมและกลุ่มอิสระ (ตรงกับชีต "ชุมนุม และ กลุ่มอิสระ มธ. 2569")
`id, kind (club|indep), campus (rangsit|tpc|lampang|pattaya), name, short, cat, status (มีสถานภาพ|รอจดจัดตั้ง|ยุบเลิก), advisor, annTU, annDate, signed, sent, report, meeting, appoint, will, grade, budget, review, web, renew, founded, email, links[{label,url}], extra[{label,url}], contact{rep,pos,phone,ch}, appointDoc (id ของใบแต่งตั้ง)`

ดูตัวอย่างค่าจริงได้ใน `data/sample-data.js`

## เรื่องไฟล์บน Google Drive

- เปิดดู PDF ในเว็บ, รวม PDF, แปลงเป็นรูป และค้นชื่อในไฟล์ ต้องให้เบราว์เซอร์ดึงเนื้อไฟล์ได้ (CORS)
  ลิงก์จาก Firebase Storage ใช้ได้ ลิงก์ Drive ธรรมดามักใช้ไม่ได้
- ถ้าใช้ Drive: ใส่ `thumbUrl` เป็นรูปปก และให้ `fileUrl` ชี้ไปที่ตัวกลางที่ดึงไฟล์ให้ (เช่น Cloud Function) หรือแก้ `fileUrl()` ใน `api.js`
- ข้อมูลส่วนตัว (เบอร์โทร, ลิงก์สำเนาบัตร, สมุดบัญชี) ควรให้เห็นเฉพาะคนที่ล็อกอินแล้ว — ทำตอนเพิ่มระบบล็อกอิน
