(() => {
'use strict';
let DATA = { v: 4, folders: [], docs: [], clubs: [] };

/* ============ text ============ */
const TX = {
 th: {
  brand: 'คลังเอกสาร อมธ.', brandSub: 'ฝ่ายดาต้า · องค์การนักศึกษา', search: 'ค้นหา', searchPh: 'ค้นหาเอกสาร ชุมนุม หรือชื่อคน…', upload: 'อัปโหลด', mascotName: 'น้องดาต้า', assistant: 'ผู้ช่วยฝ่ายดาต้า',
  gOverview: 'ภาพรวม', gShared: 'คลังกลาง', gMine: 'ส่วนตัว', gTools: 'เครื่องมือ', gStaff: 'ฝ่ายดาต้า',
  home: 'หน้าหลัก', drive: 'คลังกลาง', mine: 'ไฟล์ส่วนตัว', starred: 'ติดดาว', tools: 'ตะกร้าไฟล์', look: 'ตั้งค่าหน้าตา', trash: 'ถังขยะ', results: 'ผลการค้นหา', allDocs: 'ทั้งหมด',
  roleStaff: 'ฝ่ายดาต้า · แก้ไขได้', roleView: 'ผู้เยี่ยมชม · ดูอย่างเดียว',
  sDocs: 'เอกสารในคลังกลาง', sDocsSub: 'รวม {n} หน้า', sFolders: 'โฟลเดอร์', sFoldersSub: 'ในคลังกลาง', sMine: 'ไฟล์ของฉัน', sMineSub: 'เก็บในเครื่องนี้', sTray: 'รอรวมไฟล์', sTraySub: 'อยู่ในรายการ',
  recent: 'เพิ่มล่าสุด', topFolders: 'โฟลเดอร์หลัก', items: '{n} รายการ', openDrive: 'เปิดคลังกลาง', openMine: 'ไฟล์ของฉัน', openTools: 'รวม / แปลงไฟล์',
  folders: 'โฟลเดอร์', files: 'ไฟล์', newFolder: 'โฟลเดอร์ใหม่', newBtn: 'ใหม่', uploadHere: 'อัปโหลดไฟล์', sortName: 'ชื่อ ก–ฮ', sortNew: 'ล่าสุด', cards: 'การ์ด', list: 'รายการ',
  emptyFolder: 'โฟลเดอร์นี้ยังว่าง', emptyFolderEdit: 'ลากไฟล์จากเครื่องมาวางตรงนี้ หรือกด ใหม่ เพื่อสร้างโฟลเดอร์และอัปโหลด', emptyFolderView: 'ยังไม่มีไฟล์ในโฟลเดอร์นี้',
  dropHint: 'ลากไฟล์มาวาง หรือลากการ์ดไปวางบนโฟลเดอร์เพื่อย้าย',
  mineNote: 'ไฟล์ส่วนตัวเห็นแค่คุณคนเดียว เก็บในเบราว์เซอร์ของเครื่องนี้ ไม่ขึ้นคลังกลาง ถ้าล้างประวัติเบราว์เซอร์หรือเปลี่ยนเครื่องไฟล์จะหาย อยากให้ทีมเห็นให้อัปโหลดเข้าคลังกลางแทน', mineTemp: 'เบราว์เซอร์นี้ไม่อนุญาตให้เก็บไฟล์ ไฟล์จะหายเมื่อปิดหน้าเว็บ',
  active: 'ใช้งาน', draft: 'ดราฟต์', archived: 'เก็บถาวร', pages: 'หน้า', clubs: 'ชุมนุม', foundIn: 'พบในหน้า',
  open: 'เปิด', rename: 'เปลี่ยนชื่อ / สี', renameFile: 'เปลี่ยนชื่อ', moveTo: 'ย้ายไปที่…', del: 'ลบ', delFolder: 'ลบโฟลเดอร์', delFolderQ: 'ลบโฟลเดอร์ “{n}”? ไฟล์และโฟลเดอร์ย่อยข้างในจะย้ายขึ้นไปอยู่ชั้นบน', delFileQ: 'ลบ “{n}” ออกจากไฟล์ของฉัน? กู้คืนไม่ได้', toTrash: 'ย้ายลงถังขยะ', editInfo: 'แก้ไขข้อมูล', dlOrig: 'ดาวน์โหลด', openTab: 'เปิดในแท็บใหม่', addTray: 'ใส่ตะกร้า (รวม/พิมพ์/แปลง)', inTray: 'อยู่ในตะกร้าแล้ว', star: 'ติดดาว', unstar: 'เลิกติดดาว',
  moveTitle: 'ย้ายไปที่', moveHere: 'ย้ายมาที่นี่', root: 'ชั้นบนสุด',
  folderName: 'ชื่อโฟลเดอร์', color: 'สี', save: 'บันทึก', cancel: 'ยกเลิก', close: 'ปิด', yes: 'ยืนยันลบ', create: 'สร้าง',
  info: 'ข้อมูลเอกสาร', clubIdx: 'สารบัญชุมนุม', dl: 'ดาวน์โหลด', dlPagePdf: 'เฉพาะหน้านี้ (PDF)', dlPagePng: 'หน้านี้เป็น PNG', dlPageJpg: 'หน้านี้เป็น JPG', dlAllPng: 'ทุกหน้าเป็น PNG (ZIP)', dlAllJpg: 'ทุกหน้าเป็น JPG (ZIP)',
  fFolder: 'โฟลเดอร์', fYear: 'ปีการศึกษา', fStatus: 'สถานะ', fAnn: 'วันที่ประกาศ', fPages: 'จำนวนหน้า', fSize: 'ขนาด', fFile: 'ชื่อไฟล์', fAdded: 'เพิ่มเมื่อ', fNote: 'หมายเหตุ', fTitle: 'ชื่อเอกสาร', fClubs: 'ชุมนุมที่เกี่ยวข้อง',
  prev: 'ก่อนหน้า', next: 'ถัดไป', of: 'จาก',
  upShared: 'อัปโหลดเข้าคลังกลาง', upMine: 'เพิ่มไฟล์ส่วนตัว', dropHere: 'ลากไฟล์มาวางตรงนี้', or: 'หรือ', pick: 'เลือกไฟล์', upNote: 'PDF รูป Word Excel PowerPoint ไม่เกิน 20 MB ต่อไฟล์', upGo: 'อัปโหลด', reading: 'กำลังอ่านไฟล์…', ready: 'พร้อมอัปโหลด', uploading: 'กำลังอัปโหลด…', done: 'เสร็จแล้ว', failed: 'ไม่สำเร็จ', into: 'จะเก็บใน',
  toolsHero: 'ตะกร้าไฟล์', toolsP: 'กดปุ่ม + ที่มุมการ์ดเอกสารเพื่อใส่ไฟล์ลงตะกร้า แล้วมาเลือกที่นี่ว่าจะรวมเป็น PDF เดียว พิมพ์ แปลงเป็นรูป หรือโหลดเป็น ZIP', tray: 'ไฟล์ในตะกร้า', trayEmpty: 'ตะกร้ายังว่าง', trayEmptyP: 'กดปุ่ม + ที่มุมการ์ดเอกสาร ไฟล์จะมาอยู่ตรงนี้ หรือเพิ่มไฟล์จากคอมด้านล่าง', fromPc: 'เพิ่มไฟล์จากคอม', clearAll: 'ล้างทั้งหมด',
  tMerge: 'รวมเป็น PDF ไฟล์เดียว', tMergeP: 'เรียงตามลำดับในรายการ รูปภาพจะวางเป็นหน้า A4', doMerge: 'รวมและดาวน์โหลด', tImg: 'แปลง PDF เป็นรูป', tImgP: 'ทุกหน้าของทุกไฟล์ในรายการ ได้เป็น ZIP', toPng: 'เป็น PNG', toJpg: 'เป็น JPG', tZip: 'ดาวน์โหลดรวดเดียว', tZipP: 'ไฟล์ต้นฉบับทั้งหมดใน ZIP เดียว', doZip: 'โหลดเป็น ZIP', local: 'จากเครื่อง', tBak: 'สำรองข้อมูล', tBakP: 'โฟลเดอร์ เอกสาร ชมรม ปก และรูปผู้ช่วยทั้งหมด เป็นไฟล์ JSON ไฟล์ PDF อยู่ใน Google Drive อยู่แล้ว', tBakWarn: 'ไฟล์มีข้อมูลส่วนบุคคล เก็บไว้ในที่ปลอดภัย ห้ามอัปโหลดขึ้น GitHub', doBak: 'ดาวน์โหลดไฟล์สำรอง',
  starHero: 'ติดดาว', starP: 'เอกสารในคลังกลางที่คุณกดดาวไว้ จำไว้ในเครื่องนี้', starEmpty: 'ยังไม่มีเอกสารติดดาว', starEmptyP: 'กดรูปดาวที่การ์ดเอกสาร แล้วจะมารวมอยู่ที่นี่',
  trashHero: 'ถังขยะ', trashP: 'เอกสารที่ลบจากคลังกลาง กู้คืนได้ หรือลบถาวรเพื่อคืนพื้นที่', trashEmpty: 'ถังขยะว่าง', restore: 'กู้คืน', purge: 'ลบถาวร', purgeQ: 'ลบ “{n}” ถาวร? กู้คืนไม่ได้อีก',
  teamNav: 'จัดการทีม', teamHero: 'จัดการทีม', teamP: 'ใครเข้าเว็บนี้ได้บ้าง เพิ่มคนด้วยอีเมล Google แล้วเลือกสิทธิ์ แก้สิทธิ์ของตัวเองไม่ได้ เว็บจะได้มีผู้ดูแลอย่างน้อยหนึ่งคนเสมอ',
  teamEmail: 'อีเมล Google', teamAdd: 'เพิ่มคน', teamRole: 'สิทธิ์', rViewer: 'ดูอย่างเดียว', rEditor: 'แก้ไขได้', rAdmin: 'ผู้ดูแล', teamRoles: 'ดูอย่างเดียว: เปิดอ่านเอกสาร · แก้ไขได้: อัปโหลด แก้ และลบเอกสาร · ผู้ดูแล: แก้ไขได้ และจัดการทีมนี้',
  teamYou: 'คุณ', teamSeen: 'เข้าล่าสุด', teamNever: 'ยังไม่เคยเข้า', teamDelQ: 'เอา {n} ออกจากทีม? จะเข้าเว็บไม่ได้อีก', teamLoading: 'กำลังโหลดรายชื่อ…',
  tTeamSaved: 'บันทึกสิทธิ์แล้ว', tTeamErr: 'บันทึกไม่สำเร็จ ลองอีกครั้ง', tTeamBad: 'อีเมลไม่ถูกต้อง', tTeamDup: 'อีเมลนี้อยู่ในทีมแล้ว', roleAdmin: 'ผู้ดูแล · จัดการทีมได้',
  lookHero: 'ตั้งค่าหน้าตา', lookP: 'เลือกได้ตามชอบ ระบบจำไว้ในเครื่องนี้ ไม่กระทบคนอื่น', theme: 'ธีมสี', mode: 'โหมด', lang: 'ภาษา', mascotSet: 'ตัวช่วย', mascotOn: 'แสดง', mascotOff: 'ซ่อน', mascotPhoto: 'เพิ่มรูป', mascotReset: 'ตัวเดิม', mascotPhotoP: 'กดรูปเพื่อเลือกตัวช่วยของคุณ (จำไว้ในเครื่องนี้) รูปที่เพิ่มจะแชร์ให้ทุกคนในทีมเลือกใช้ได้', tPhotoSaved: 'เพิ่มรูปแล้ว ทุกคนในทีมเลือกใช้ได้', tPhotoFull: 'แกลเลอรีเต็มแล้ว (30 รูป) ลบรูปเก่าก่อน', mName0: 'น้องดาต้า', mName1: 'น้องหมา', mName2: 'น้องบอท', mBy: 'รูปจาก {n}', mDelQ: 'ลบรูปนี้ออกจากแกลเลอรีของทีม ทุกคนจะใช้รูปนี้ไม่ได้อีก', palTusu: 'TUSU (ค่าเริ่มต้น)',
  chTitle: 'แชทกับน้องดาต้า', chSub: 'ตอบจากข้อมูลในคลังนี้เท่านั้น', chPh: 'ถามเรื่องชุมนุม ใบแต่งตั้ง หรือชื่อคน…', chSend: 'ส่ง', chAsk: 'ถามน้อง',
  chHelp: 'สวัสดี! ถามน้องได้เลย น้องตอบจากข้อมูลในคลังนี้เท่านั้น เช่น ใครเป็นประธานชุมนุมไหน ชุมนุมไหนมีใบแต่งตั้งแล้ว สายกีฬามีกี่ชุมนุม หรือพิมพ์ชื่อคนก็ได้',
  chWhich: 'เจอหลายชุมนุมที่ชื่อคล้ายกัน หมายถึงอันไหน', chContact: 'ข้อมูลติดต่อ (เบอร์ ไลน์ อีเมล) น้องไม่ตอบในแชทนะ ดูได้ที่หน้าชุมนุมเลย',
  chNoAppointFor: 'ยังไม่มีใบแต่งตั้งของ {n} ในคลัง', chNoRole: 'ในใบแต่งตั้งของ {n} ไม่มีตำแหน่งนี้ ลองเปิดดูไฟล์', chFromAppoint: 'จากใบแต่งตั้ง {y}',
  chScanNote: 'ชื่ออ่านจากไฟล์สแกน อาจสะกดผิดได้ เทียบกับ PDF ก่อนใช้งานจริง', chAdvisor: 'ที่ปรึกษาของ {n} คือ', chNoAdvisor: 'ยังไม่มีข้อมูลที่ปรึกษาของชุมนุมนี้',
  chAppointYes: '{n} มีใบแต่งตั้ง {y} แล้ว', chAnnounced: 'ประกาศ', chMeet: 'ประชุมเลือกตั้ง', chNoAppoint: 'ยังไม่มีใบแต่งตั้ง', chHasAppoint: 'มีใบแต่งตั้งแล้ว',
  chPeople: 'เจอชื่อนี้ในใบแต่งตั้ง', chAllClubs: 'ชุมนุมและกลุ่มอิสระทั้งหมด', chItems: 'รายการ', chSeeList: 'ดูรายชื่อทั้งหมด', chNone: 'ไม่มีชุมนุมที่ตรงกับเงื่อนไขนี้',
  chMore: 'และอีก {n} รายการ ดูต่อที่หน้าชุมนุม', chDocs: 'เจอเอกสาร {n} ไฟล์', chNo: 'น้องหาไม่เจอในคลังนี้ ลองพิมพ์ชื่อชุมนุม ชื่อคน หรือชื่อเอกสารดูนะ',
  chAlso: 'มีชื่อนี้ที่ศูนย์อื่นด้วย', chEx: ['ใครเป็นประธานชุมนุมฟุตบอล', 'สายกีฬามีกี่ชุมนุม', 'ชุมนุมไหนยังไม่มีใบแต่งตั้ง', 'กลุ่มอิสระลำปางมีอะไรบ้าง'], tPhotoBad: 'ใช้รูปนี้ไม่ได้ ลองไฟล์ JPG หรือ PNG ที่เล็กลง', customColor: 'เลือกสีเอง',
  palBlue: 'น้ำเงิน', palTu: 'ธรรมศาสตร์ แดง-เหลือง', palMint: 'มิ้นต์ ฟ้าอ่อน ขาว', palPink: 'ชมพู ฟ้า', light: 'สว่าง', dark: 'มืด', system: 'ตามเครื่อง',
  searchHero: 'ผลการค้นหา “{q}”', searchSub: '{a} ในคลังกลาง · {b} ในไฟล์ของฉัน', typeToSearch: 'พิมพ์คำค้นที่ช่องด้านบน', notFound: 'ไม่พบสิ่งที่ค้นหา', notFoundP: 'ลองค้นด้วยคำที่สั้นลง เช่น ชื่อชุมนุมหรือชื่อจริงอย่างเดียว',
  tDl: 'ส่งไฟล์ให้ดาวน์โหลดแล้ว', tDecl: 'ยกเลิกการดาวน์โหลด', tNoDl: 'ดาวน์โหลดผ่านปุ่มนี้ไม่ได้ในมุมมองนี้ ลองกด เปิดในแท็บใหม่', tSaved: 'บันทึกแล้ว', tSaving: 'กำลังบันทึก… หน้าเว็บจะรีโหลดเอง', tErr: 'ทำไม่สำเร็จ ลองใหม่อีกครั้ง', tWork: 'กำลังเตรียมไฟล์…', tTrashed: 'ย้ายลงถังขยะแล้ว', tRestored: 'กู้คืนแล้ว', tPurged: 'ลบถาวรแล้ว', tAdded: 'ใส่ตะกร้าแล้ว ไปที่เมนู “ตะกร้าไฟล์” เพื่อรวมหรือพิมพ์', tQuota: 'พื้นที่เก็บไฟล์เต็ม', tBig: 'ไฟล์ใหญ่เกินกำหนด', tType: 'ไม่รองรับไฟล์ประเภทนี้', tMoved: 'ย้ายแล้ว', tConflict: 'มีคนแก้ไขพร้อมกัน หน้าเว็บโหลดเวอร์ชันล่าสุดให้แล้ว ลองทำอีกครั้ง', tReadOnly: 'บัญชีนี้แก้ไขคลังกลางไม่ได้', tTooLarge: 'ข้อมูลใหญ่เกินกำหนด',
  you: 'คุณ', goBack: 'ย้อนกลับ', goFwd: 'ไปข้างหน้า', lookShort: 'ธีม', gClubs: 'ชุมนุม', clubsNav: 'ชุมนุมและกลุ่มอิสระ', clubsHero: 'ชุมนุมและกลุ่มอิสระ', clubsP: 'ข้อมูลจากชีต “ชุมนุม และ กลุ่มอิสระ มธ. 2569” กดที่ชื่อเพื่อดูรายละเอียด ใบแต่งตั้ง และลิงก์เอกสาร',
  fCampus: 'ศูนย์', fKind: 'ประเภท', fCat: 'สาย', fStat: 'สถานภาพ', all: 'ทั้งหมด', rangsit: 'รังสิต', tpc: 'ท่าพระจันทร์', lampang: 'ลำปาง', pattaya: 'พัทยา', kClub: 'ชุมนุม', kIndep: 'กลุ่มอิสระ', findClub: 'พิมพ์ชื่อชุมนุม…', nClubs: '{n} รายการ', noClub: 'ไม่พบชุมนุมตามเงื่อนไขนี้', backClubs: 'รายชื่อชุมนุมทั้งหมด',
  apTitle: 'ใบแต่งตั้ง ปีการศึกษา 2569', apNone: 'ยังไม่มีใบแต่งตั้งปี 2569 ในคลัง', committee: 'คณะกรรมการ', meetOn: 'ประชุมใหญ่', annOn: 'ประกาศ', openDoc: 'เปิดดูเอกสาร', docsCheck: 'สถานะเอกสาร', infoClub: 'ข้อมูลทั่วไป', advisor: 'ที่ปรึกษา', contact: 'ผู้ประสานงาน', linksT: 'ลิงก์เอกสาร', noLinks: 'ยังไม่มีลิงก์', clubFiles: 'ไฟล์อื่นของชุมนุมนี้',
  addLink: 'เพิ่มลิงก์', newLink: 'ลิงก์ใหม่', linkUrl: 'ลิงก์ (URL)', linkTitle: 'ชื่อที่แสดง', linkBad: 'ลิงก์ต้องขึ้นต้นด้วย https://', openLink: 'เปิดลิงก์', founded: 'วันจดจัดตั้ง', email: 'อีเมลกลุ่ม', delLink: 'ลบลิงก์', link: 'ลิงก์',
  ck_annTU: 'ประกาศแต่งตั้ง มธ.', ck_signed: 'ลงนามแล้ว', ck_sent: 'ส่งเอกสาร', ck_report: 'รายงานผลการดำเนินกิจกรรม', ck_meeting: 'รายงานการประชุมใหญ่', ck_appoint: 'ประกาศแต่งตั้งคณะกรรมการ', ck_will: 'หนังสือแสดงเจตจำนง', ck_grade: 'ใบแสดงผลการเรียน', ck_budget: 'เอกสารปีงบประมาณ 2569', ck_review: 'ผลการพิจารณา', ck_web: 'ลงเว็บไซต์', ck_renew: 'แบบต่ออายุ (กอ.02)',
  sClubs: 'ชุมนุม', sClubsSub: '{n} มีสถานภาพ', sIndep: 'กลุ่มอิสระ', sIndepSub: '{n} มีสถานภาพ', sAppoint: 'ใบแต่งตั้ง 2569', sAppointSub: 'แยกไฟล์ละชุมนุม', sLinks: 'ลิงก์', sLinksSub: 'Sheets · Docs · Drive',
  homeH: 'หาเอกสารชุมนุมได้ในที่เดียว', homeP: 'พิมพ์ชื่อชุมนุม ชื่อคน หรือชื่อเอกสาร ระบบหาให้ถึงในไฟล์ PDF', scClubs: 'ชุมนุม / กลุ่มอิสระ', scClubsP: 'ข้อมูล ใบแต่งตั้ง ลิงก์', scAppoint: 'ใบแต่งตั้ง 2569', scAppointP: 'เรียงตามสาย', scLinks: 'ลิงก์ที่ใช้บ่อย', scLinksP: 'ชีตและเอกสารกลาง', scMine: 'ไฟล์ส่วนตัว', scMineP: 'เห็นคนเดียว เก็บในเครื่องนี้', scTools: 'ตะกร้าไฟล์', scToolsP: 'รวม พิมพ์ แปลงไฟล์',
  clubsFound: 'ชุมนุมที่ตรงกัน', mascotT: 'ตัวช่วยมุมจอ', goClub: 'ไปหน้าชุมนุม', officeNoPrev: 'ไฟล์ประเภทนี้ดูตัวอย่างในเว็บไม่ได้ กดดาวน์โหลดเพื่อเปิดในเครื่อง', officeOnly: 'รวมไฟล์และแปลงเป็นรูปได้เฉพาะ PDF กับรูปภาพ ไฟล์อื่นจะข้ามไป', phone: 'โทร', shortcuts: 'ทางลัด', recentShort: 'เพิ่มล่าสุด',
  copyLink: 'คัดลอกลิงก์', tCopied: 'คัดลอกแล้ว', signedFull: 'ลงนามครบ', signedPartial: 'ลงนามไม่ครบ', otherDocs: 'สถานะเอกสารอื่น', fromSheet: 'จากชีตชุมนุม เป็นข้อมูลเก่า อาจยังไม่อัปเดต สถานะใบแต่งตั้งดูจากไฟล์ด้านบนเท่านั้น', fAp: 'ใบแต่งตั้ง', apHas: 'มีแล้ว', apNo: 'ยังไม่มี', apWait: 'รอลงนาม', fSigned: 'ลายเซ็น', tDemoSaved: 'โหมดตัวอย่าง: เปลี่ยนบนจอแล้ว แต่ยังไม่บันทึกจริง', tLoadErr: 'โหลดข้อมูลไม่สำเร็จ ลองรีเฟรชหน้าเว็บ', roleDemo: 'โหมดตัวอย่าง · ลองแก้ได้ ไม่บันทึกจริง',
  untitled: 'เอกสารไม่มีชื่อ', appoint: 'ใบแต่งตั้ง',
  tagsNav: 'หมวดหมู่', tagsHero: 'หมวดหมู่ที่เชื่อมกัน', tagsP: 'เอกสารและชุมนุมทุกชิ้นมีหลายหมวดในตัว กดหมวดเพื่อดูทุกอย่างที่อยู่ในหมวดนั้น แล้วกดหมวดที่เกี่ยวข้องต่อเพื่อเจาะให้แคบลง',
  gTopic: 'หัวข้อ', gType: 'ประเภทเอกสาร', fType: 'ประเภทเอกสาร', fTags: 'หัวข้อ', tagsAuto: 'จัดหมวดให้อัตโนมัติจากชื่อแล้ว:', tagsMore: 'หัวข้ออื่นๆ คั่นด้วยจุลภาค', editTags: 'แก้หมวดและคำค้น',
  tagSel: 'กำลังดู', tagRel: 'หมวดที่เกี่ยวข้อง', tagRelP: 'กดเพื่อเจาะให้แคบลง', tagAll: 'ดูทุกหมวด', tagNone: 'ไม่มีรายการในหมวดนี้', nItems: '{a} เอกสาร · {b} ชุมนุม',
  relDocs: 'เอกสารที่เกี่ยวข้อง', relClubs: 'ชุมนุมที่เกี่ยวข้อง', tagsOf: 'หมวดหมู่',
  print: 'พิมพ์', printAll: 'พิมพ์ทั้งหมด', tPrint: 'พิมพ์ไฟล์', tPrintP: 'ทุกไฟล์ในรายการ ส่งไปเครื่องพิมพ์ในครั้งเดียว', tPrintDrive: 'ไฟล์ประเภทนี้พิมพ์จากเว็บไม่ได้ เปิดใน Google Drive ให้แล้ว กด Ctrl+P ที่นั่น', tPrintSkip: 'ข้าม {n} ไฟล์ที่พิมพ์จากเว็บไม่ได้ (เช่น PowerPoint) ดาวน์โหลดไปพิมพ์ในเครื่องแทน', tPrintReady: 'กำลังเปิดหน้าต่างพิมพ์…',
  font: 'ฟอนต์', fontTusu: 'TUSU (Kanit) · หัวข้อหนา ทันสมัย', fontPrompt: 'Prompt · กลมมน เป็นมิตร', fontPlex: 'IBM Plex · เรียบ มืออาชีพ', fontSarabun: 'Sarabun · ทางการ แบบหนังสือราชการ', fontAnuphan: 'Anuphan · แบบเดิม',
  kwT: 'คำค้น', kwPh: 'เช่น ชื่อเดิม ชื่อภาษาอังกฤษ ชื่อเล่น', kwP: 'คั่นด้วยจุลภาค ค้นหาด้วยคำเหล่านี้แล้วจะเจอชุมนุมนี้และเอกสารของชุมนุมนี้',
  upSteps: ['เลือกไฟล์', 'ตรวจชื่อ', 'กดอัปโหลด'], change: 'เปลี่ยน', autoFilled: 'ระบบกรอกให้แล้ว:', autoNone: 'ตรวจชื่อไฟล์ให้เรียบร้อย แล้วกดอัปโหลดได้เลย', moreDetail: 'แก้รายละเอียดเพิ่มเติม', pickClub: 'พิมพ์ชื่อชุมนุมแล้วเลือกจากรายการ', upMineP: 'ไฟล์ส่วนตัวเห็นแค่คุณคนเดียว เก็บในเครื่องนี้',
  help: 'วิธีใช้', helpHero: 'วิธีใช้คลังเอกสาร', helpP: 'สรุปสั้นๆ ว่าแต่ละเมนูใช้ทำอะไร กดหัวข้อเพื่อไปที่หน้านั้นได้เลย', helpGo: 'ไปที่หน้านี้', helpFirst: 'ใช้ครั้งแรก? ดูวิธีใช้แบบสั้นๆ 1 นาที', helpOpen: 'ดูวิธีใช้',
  helpItems: [
    ['search', 'ค้นหา', 'หาไฟล์ ชุมนุม หรือชื่อคน', ['พิมพ์ในช่องค้นหาด้านบน', 'ใส่ชื่อชุมนุม ชื่อคน หรือปีก็ได้', 'กดผลลัพธ์เพื่อเปิดดู'], 'home'],
    ['doc', 'เปิดดู ดาวน์โหลด พิมพ์', 'ดูเอกสารในเว็บได้เลย ไม่ต้องโหลดก่อน', ['กดที่การ์ดเอกสาร', 'ด้านขวามีปุ่ม “ดาวน์โหลด” และ “พิมพ์”', 'ตอนเปิดไฟล์อยู่ กด Ctrl+P ก็พิมพ์ได้'], 'drive'],
    ['up', 'อัปโหลดเข้าคลังกลาง', 'สำหรับฝ่ายดาต้า ไฟล์จะเข้า Google Drive และทุกคนในทีมเห็น', ['เข้าโฟลเดอร์ที่จะเก็บ แล้วกดปุ่ม “อัปโหลด” มุมขวาบน', 'ลากไฟล์มาวาง หรือกด “เลือกไฟล์”', 'ตรวจชื่อ (ใบแต่งตั้งระบบกรอกปีและชุมนุมให้เอง)', 'กด “อัปโหลด” เสร็จแล้ว'], 'drive'],
    ['layers', 'ตะกร้าไฟล์: รวม พิมพ์ แปลง', 'ใช้ตอนอยากรวมหลายไฟล์เป็น PDF เดียว พิมพ์ทีเดียวหลายไฟล์ หรือแปลง PDF เป็นรูป', ['กดปุ่ม + ที่มุมการ์ดเอกสาร เพื่อใส่ตะกร้า', 'เปิดเมนู “ตะกร้าไฟล์”', 'เรียงลำดับด้วยปุ่มลูกศร', 'เลือก รวมเป็น PDF / พิมพ์ทั้งหมด / แปลงเป็นรูป / ZIP'], 'tools'],
    ['user', 'ไฟล์ส่วนตัว ต่างจากคลังกลางยังไง', 'คลังกลาง = ทุกคนในทีมเห็น เก็บใน Google Drive · ไฟล์ส่วนตัว = เห็นคนเดียว เก็บในเครื่องนี้', ['ใช้เก็บไฟล์ร่างหรือไฟล์ชั่วคราว', 'ล้างเบราว์เซอร์หรือเปลี่ยนเครื่องแล้วไฟล์ส่วนตัวจะหาย', 'อยากให้ทีมเห็น ให้อัปโหลดเข้าคลังกลาง'], 'mine'],
    ['tag', 'หมวดหมู่', 'ดูเอกสารและชุมนุมที่อยู่หมวดเดียวกัน', ['เปิดเมนู “หมวดหมู่”', 'กดหมวดที่สนใจ เช่น ดนตรี', 'กดหมวดที่เกี่ยวข้องต่อเพื่อเจาะให้แคบลง'], 'tags'],
    ['users', 'ข้อมูลชุมนุม', 'ใบแต่งตั้ง กรรมการ ลิงก์เอกสาร และสถานะของแต่ละชุมนุม', ['เปิดเมนู “ชุมนุมและกลุ่มอิสระ”', 'กรองตามวิทยาเขต สาย หรือสถานภาพ', 'กดชื่อชุมนุมเพื่อดูรายละเอียด'], 'clubs'],
    ['star', 'ติดดาว', 'เก็บเอกสารที่ใช้บ่อยไว้หาง่าย', ['กดรูปดาวที่การ์ดเอกสาร', 'เอกสารจะไปรวมที่เมนู “ติดดาว”'], 'starred'],
    ['chat', 'ถามน้อง', 'ถามข้อมูลในคลังเป็นประโยคธรรมดา', ['กดปุ่ม “ถามน้อง” มุมขวาบน', 'ลองถาม เช่น “ชุมนุมไหนยังไม่มีใบแต่งตั้ง”'], '']
  ],
  say: ['มีอะไรให้ช่วยไหม', 'ตอนนี้คลังกลางมี {n} เอกสาร ใน {f} โฟลเดอร์', 'พิมพ์ชื่อชุมนุมหรือชื่อคนในช่องค้นหาได้เลย เจอถึงในหน้าไหนของไฟล์', 'ลากการ์ดไฟล์ไปวางบนโฟลเดอร์เพื่อย้ายได้นะ', 'กดปุ่ม + ที่การ์ด แล้วไปหน้ารวม/แปลงไฟล์ เพื่อรวมเป็น PDF ไฟล์เดียว', 'ไฟล์ของฉันเก็บไว้ในเครื่องนี้ ไม่มีใครเห็นนอกจากคุณ'],
  sayFound: 'เจอ {n} รายการ', sayNone: 'อืม… หาไม่เจอ ลองคำที่สั้นลงดูนะ', sayDone: 'เรียบร้อย!', sayWork: 'กำลังจัดการให้อยู่นะ…', saySaved: 'บันทึกเรียบร้อย ขอบคุณที่ช่วยจัดคลังนะ', sayMoved: 'ย้ายให้แล้ว', sayHi: 'สวัสดี! เรียกน้องได้ทุกเมื่อ'
 },
 en: {
  brand: 'SU Archive', brandSub: 'Data team · Student Union', search: 'Search', searchPh: 'Search documents, clubs or people…', upload: 'Upload', mascotName: 'Data-chan', assistant: 'Data team assistant',
  gOverview: 'Overview', gShared: 'Shared drive', gMine: 'Private', gTools: 'Tools', gStaff: 'Data team',
  home: 'Home', drive: 'Shared drive', mine: 'Private files', starred: 'Starred', tools: 'File basket', look: 'Appearance', trash: 'Trash', results: 'Search results', allDocs: 'All',
  roleStaff: 'Data team · can edit', roleView: 'Visitor · view only',
  sDocs: 'Shared documents', sDocsSub: '{n} pages in total', sFolders: 'Folders', sFoldersSub: 'In the shared drive', sMine: 'My files', sMineSub: 'Saved on this device', sTray: 'To merge', sTraySub: 'In the list',
  recent: 'Recently added', topFolders: 'Main folders', items: '{n} items', openDrive: 'Open shared drive', openMine: 'My files', openTools: 'Merge / convert',
  folders: 'Folders', files: 'Files', newFolder: 'New folder', newBtn: 'New', uploadHere: 'Upload files', sortName: 'Name A–Z', sortNew: 'Newest', cards: 'Cards', list: 'List',
  emptyFolder: 'This folder is empty', emptyFolderEdit: 'Drop files here, or press New to add a folder or upload.', emptyFolderView: 'No files in this folder yet.',
  dropHint: 'Drop files to upload, or drag a card onto a folder to move it',
  mineNote: 'Private files are only visible to you and live in this browser, not the shared drive. Clearing browser data or switching devices removes them. To share with the team, upload to the shared drive instead.', mineTemp: 'This browser does not allow saving files. They disappear when you close the page.',
  active: 'Active', draft: 'Draft', archived: 'Archived', pages: 'pages', clubs: 'clubs', foundIn: 'Found on page',
  open: 'Open', rename: 'Rename / color', renameFile: 'Rename', moveTo: 'Move to…', del: 'Delete', delFolder: 'Delete folder', delFolderQ: 'Delete folder “{n}”? Its files and subfolders move up one level.', delFileQ: 'Delete “{n}” from my files? This cannot be undone.', toTrash: 'Move to trash', editInfo: 'Edit details', dlOrig: 'Download', openTab: 'Open in new tab', addTray: 'Add to basket (merge/print/convert)', inTray: 'In the basket', star: 'Star', unstar: 'Unstar',
  moveTitle: 'Move to', moveHere: 'Move here', root: 'Top level',
  folderName: 'Folder name', color: 'Color', save: 'Save', cancel: 'Cancel', close: 'Close', yes: 'Delete', create: 'Create',
  info: 'Details', clubIdx: 'Club index', dl: 'Download', dlPagePdf: 'This page only (PDF)', dlPagePng: 'This page as PNG', dlPageJpg: 'This page as JPG', dlAllPng: 'All pages as PNG (ZIP)', dlAllJpg: 'All pages as JPG (ZIP)',
  fFolder: 'Folder', fYear: 'Academic year', fStatus: 'Status', fAnn: 'Announced', fPages: 'Pages', fSize: 'Size', fFile: 'File name', fAdded: 'Added', fNote: 'Note', fTitle: 'Title', fClubs: 'Related clubs',
  prev: 'Previous', next: 'Next', of: 'of',
  upShared: 'Upload to the shared drive', upMine: 'Add private files', dropHere: 'Drop files here', or: 'or', pick: 'Choose files', upNote: 'PDF, images, Word, Excel, PowerPoint up to 20 MB each', upGo: 'Upload', reading: 'Reading…', ready: 'Ready', uploading: 'Uploading…', done: 'Done', failed: 'Failed', into: 'Saving to',
  toolsHero: 'File basket', toolsP: 'Press + on a document card to put it in the basket, then choose here: merge into one PDF, print, convert to images or download as ZIP.', tray: 'In the basket', trayEmpty: 'The basket is empty', trayEmptyP: 'Press + on the corner of a document card and it lands here, or add files from your computer below.', fromPc: 'Add from computer', clearAll: 'Clear all',
  tMerge: 'Merge into one PDF', tMergeP: 'Uses the order of the list. Images become A4 pages.', doMerge: 'Merge and download', tImg: 'Convert PDF to images', tImgP: 'Every page of every file, as one ZIP.', toPng: 'As PNG', toJpg: 'As JPG', tZip: 'Download all at once', tZipP: 'All original files in one ZIP.', doZip: 'Download ZIP', local: 'From computer', tBak: 'Backup', tBakP: 'All folders, documents, clubs, covers and assistant photos as one JSON file. The PDFs are already in Google Drive.', tBakWarn: 'This file has personal data. Keep it somewhere safe and never upload it to GitHub.', doBak: 'Download backup',
  starHero: 'Starred', starP: 'Shared documents you starred, remembered on this device.', starEmpty: 'Nothing starred yet', starEmptyP: 'Press the star on a document card and it shows up here.',
  trashHero: 'Trash', trashP: 'Documents removed from the shared drive. Restore them, or delete forever to free space.', trashEmpty: 'Trash is empty', restore: 'Restore', purge: 'Delete forever', purgeQ: 'Delete “{n}” forever? This cannot be undone.',
  teamNav: 'Manage team', teamHero: 'Manage team', teamP: 'Who can use this site. Add people by their Google email and pick what they can do. You cannot change your own access, so the site always keeps at least one admin.',
  teamEmail: 'Google email', teamAdd: 'Add', teamRole: 'Access', rViewer: 'View only', rEditor: 'Can edit', rAdmin: 'Admin', teamRoles: 'View only: read documents · Can edit: upload, edit and delete documents · Admin: can edit, and manages this team',
  teamYou: 'You', teamSeen: 'Last visit', teamNever: 'Never signed in', teamDelQ: 'Remove {n} from the team? They will no longer be able to open the site.', teamLoading: 'Loading the list…',
  tTeamSaved: 'Access saved', tTeamErr: 'Could not save. Try again.', tTeamBad: 'Not a valid email', tTeamDup: 'This email is already on the team', roleAdmin: 'Admin · manages the team',
  lookHero: 'Appearance', lookP: 'Saved on this device only. It does not change anyone else’s view.', theme: 'Color theme', mode: 'Mode', lang: 'Language', mascotSet: 'Assistant', mascotOn: 'Show', mascotOff: 'Hide', mascotPhoto: 'Add photo', mascotReset: 'Original', mascotPhotoP: 'Tap a picture to choose your assistant (saved on this device). Photos you add are shared so the whole team can use them.', tPhotoSaved: 'Photo added for the whole team', tPhotoFull: 'The gallery is full (30 photos). Delete one first.', mName0: 'Data-chan', mName1: 'Doggo', mName2: 'Bot', mBy: 'Photo from {n}', mDelQ: 'Remove this photo from the team gallery? Nobody will be able to use it any more.', palTusu: 'TUSU (default)',
  chTitle: 'Chat with Data-chan', chSub: 'Answers only from this archive', chPh: 'Ask about clubs, appointments or a person…', chSend: 'Send', chAsk: 'Ask',
  chHelp: 'Hi! Ask me anything about this archive, and I answer only from its data. For example: who is president of a club, which clubs have an appointment letter, how many sports clubs there are, or type a person’s name.',
  chWhich: 'Several clubs have a similar name. Which one?', chContact: 'I don’t give contact details (phone, LINE, email) in chat. You can find them on the club page.',
  chNoAppointFor: 'There is no appointment letter for {n} in the archive yet.', chNoRole: 'The appointment letter for {n} has no such position. Try opening the file.', chFromAppoint: 'from the {y} appointment letter',
  chScanNote: 'Names were read from scans and may contain typos. Check the PDF before official use.', chAdvisor: 'The advisor of {n} is', chNoAdvisor: 'No advisor is recorded for this club yet.',
  chAppointYes: '{n} has its {y} appointment letter.', chAnnounced: 'Announced', chMeet: 'Election meeting', chNoAppoint: 'No appointment letter yet', chHasAppoint: 'Has an appointment letter',
  chPeople: 'Found this name in appointment letters:', chAllClubs: 'All clubs and independent groups', chItems: 'items', chSeeList: 'See the full list', chNone: 'No club matches that.',
  chMore: 'and {n} more on the clubs page', chDocs: 'Found {n} documents', chNo: 'I couldn’t find that in this archive. Try a club name, a person’s name or a document title.',
  chAlso: 'Also at other campuses:', chEx: ['Who is president of ฟุตบอล', 'How many sports clubs', 'Which clubs have no appointment letter', 'Independent groups in Lampang'], tPhotoBad: 'This image could not be used. Try a smaller JPG or PNG.', customColor: 'Custom color',
  palBlue: 'Blue', palTu: 'Thammasat red & gold', palMint: 'Mint, light blue, white', palPink: 'Pink & sky', light: 'Light', dark: 'Dark', system: 'System',
  searchHero: 'Results for “{q}”', searchSub: '{a} in the shared drive · {b} in my files', typeToSearch: 'Type in the search box above', notFound: 'Nothing found', notFoundP: 'Try a shorter word, such as just the club name or a first name.',
  tDl: 'File sent to download', tDecl: 'Download cancelled', tNoDl: 'This button cannot download here. Try Open in new tab.', tSaved: 'Saved', tSaving: 'Saving… the page will reload', tErr: 'Something went wrong. Try again.', tWork: 'Preparing file…', tTrashed: 'Moved to trash', tRestored: 'Restored', tPurged: 'Deleted', tAdded: 'Added to the basket. Open “File basket” to merge or print.', tQuota: 'Storage is full', tBig: 'File is too large', tType: 'Unsupported file type', tMoved: 'Moved', tConflict: 'Someone else saved at the same time. The latest version is loaded; please try again.', tReadOnly: 'This account cannot edit the shared drive', tTooLarge: 'The data is too large to save',
  you: 'You', goBack: 'Back', goFwd: 'Forward', lookShort: 'Theme', gClubs: 'Clubs', clubsNav: 'Clubs & groups', clubsHero: 'Clubs & independent groups', clubsP: 'From the sheet “TU clubs and independent groups 2569”. Tap a name for details, the appointment letter and document links.',
  fCampus: 'Campus', fKind: 'Type', fCat: 'Category', fStat: 'Status', all: 'All', rangsit: 'Rangsit', tpc: 'Tha Prachan', lampang: 'Lampang', pattaya: 'Pattaya', kClub: 'Club', kIndep: 'Independent group', findClub: 'Type a club name…', nClubs: '{n} items', noClub: 'No club matches these filters', backClubs: 'All clubs',
  apTitle: 'Appointment letter, year 2569', apNone: 'No 2569 appointment letter in the archive yet', committee: 'Committee', meetOn: 'General meeting', annOn: 'Announced', openDoc: 'Open document', docsCheck: 'Document status', infoClub: 'General info', advisor: 'Advisor', contact: 'Contact person', linksT: 'Document links', noLinks: 'No links yet', clubFiles: 'Other files for this club',
  addLink: 'Add link', newLink: 'New link', linkUrl: 'Link (URL)', linkTitle: 'Display name', linkBad: 'The link must start with https://', openLink: 'Open link', founded: 'Registered', email: 'Group email', delLink: 'Remove link', link: 'Link',
  ck_annTU: 'University announcement', ck_signed: 'Signed', ck_sent: 'Documents sent', ck_report: 'Activity report', ck_meeting: 'General meeting report', ck_appoint: 'Committee appointment', ck_will: 'Letter of intent', ck_grade: 'Transcript', ck_budget: 'Budget year 2569 documents', ck_review: 'Review result', ck_web: 'On website', ck_renew: 'Renewal form (GO.02)',
  sClubs: 'Clubs', sClubsSub: '{n} active', sIndep: 'Independent groups', sIndepSub: '{n} active', sAppoint: 'Appointments 2569', sAppointSub: 'One file per club', sLinks: 'Links', sLinksSub: 'Sheets · Docs · Drive',
  homeH: 'Every club document in one place', homeP: 'Type a club, a person or a document name. Search reaches inside PDFs.', scClubs: 'Clubs / groups', scClubsP: 'Info, letters, links', scAppoint: 'Appointments 2569', scAppointP: 'By category', scLinks: 'Common links', scLinksP: 'Shared sheets and docs', scMine: 'Private files', scMineP: 'Only you, on this device', scTools: 'File basket', scToolsP: 'Merge, print, convert',
  clubsFound: 'Matching clubs', mascotT: 'Corner assistant', goClub: 'Go to club page', officeNoPrev: 'This file type cannot be previewed here. Download it to open on your device.', officeOnly: 'Merge and image conversion work with PDF and images only. Other files are skipped.', phone: 'Phone', shortcuts: 'Shortcuts', recentShort: 'Recently added',
  copyLink: 'Copy link', tCopied: 'Copied', signedFull: 'Fully signed', signedPartial: 'Not fully signed', otherDocs: 'Other documents', fromSheet: 'From the club sheet. This is older data and may be out of date. Appointment status comes only from the file above.', fAp: 'Appointment', apHas: 'Have', apNo: 'Missing', apWait: 'Awaiting signature', fSigned: 'Signatures', tDemoSaved: 'Demo mode: changed on screen, not saved', tLoadErr: 'Could not load data. Try refreshing.', roleDemo: 'Demo mode · edits are not saved',
  untitled: 'Untitled document', appoint: 'Appointment',
  tagsNav: 'Categories', tagsHero: 'Linked categories', tagsP: 'Every document and club sits in several categories at once. Pick one to see everything in it, then pick a related one to narrow it down.',
  gTopic: 'Topic', gType: 'Document type', fType: 'Document type', fTags: 'Topics', tagsAuto: 'Filed automatically from the name:', tagsMore: 'Other topics, separated by commas', editTags: 'Edit categories & search words',
  tagSel: 'Showing', tagRel: 'Related categories', tagRelP: 'Pick one to narrow down', tagAll: 'All categories', tagNone: 'Nothing in this category', nItems: '{a} documents · {b} clubs',
  relDocs: 'Related documents', relClubs: 'Related clubs', tagsOf: 'Categories',
  print: 'Print', printAll: 'Print all', tPrint: 'Print files', tPrintP: 'Sends every file in the list to the printer in one go.', tPrintDrive: 'This file type can’t print from the site. It’s open in Google Drive now; press Ctrl+P there.', tPrintSkip: 'Skipped {n} files that can’t print from the site (like PowerPoint). Download them and print from your computer.', tPrintReady: 'Opening the print window…',
  font: 'Font', fontTusu: 'TUSU (Kanit) · bold, modern headings', fontPrompt: 'Prompt · rounded, friendly', fontPlex: 'IBM Plex · clean, professional', fontSarabun: 'Sarabun · formal, like official letters', fontAnuphan: 'Anuphan · the original',
  kwT: 'Search words', kwPh: 'e.g. old name, English name, nickname', kwP: 'Separate with commas. Searching any of these finds this club and its documents.',
  upSteps: ['Choose files', 'Check the name', 'Press Upload'], change: 'Change', autoFilled: 'Filled in for you:', autoNone: 'Check the name, then press Upload.', moreDetail: 'Edit more details', pickClub: 'Type a club name and pick it from the list', upMineP: 'Private files are only visible to you, on this device.',
  help: 'How to use', helpHero: 'How to use the archive', helpP: 'What each menu is for, in short. Tap a heading to go there.', helpGo: 'Go there', helpFirst: 'First time here? See the 1-minute guide.', helpOpen: 'Open guide',
  helpItems: [
    ['search', 'Search', 'Find files, clubs or people', ['Type in the search box at the top', 'A club name, a person or a year all work', 'Tap a result to open it'], 'home'],
    ['doc', 'View, download, print', 'Read documents right on the site, no download needed', ['Tap a document card', 'On the right are Download and Print', 'Ctrl+P also prints while a file is open'], 'drive'],
    ['up', 'Upload to the shared drive', 'For the data team. Files go to Google Drive and the whole team sees them.', ['Open the folder, then press Upload at the top right', 'Drop files in, or press Choose files', 'Check the name (appointment letters fill in year and club for you)', 'Press Upload. Done.'], 'drive'],
    ['layers', 'File basket: merge, print, convert', 'Merge several files into one PDF, print many at once, or turn a PDF into images', ['Press + on the corner of a document card', 'Open “File basket”', 'Put them in order with the arrows', 'Pick merge / print all / images / ZIP'], 'tools'],
    ['user', 'Private files vs the shared drive', 'Shared drive = the whole team sees it, stored in Google Drive · Private files = only you, stored on this device', ['Good for drafts and temporary files', 'Clearing the browser or changing devices removes them', 'To share with the team, upload to the shared drive'], 'mine'],
    ['tag', 'Categories', 'See documents and clubs that belong together', ['Open “Categories”', 'Pick one, like Music', 'Pick a related one to narrow it down'], 'tags'],
    ['users', 'Club info', 'Appointment letter, committee, links and status for each club', ['Open “Clubs & groups”', 'Filter by campus, category or status', 'Tap a club for details'], 'clubs'],
    ['star', 'Star', 'Keep documents you use often close at hand', ['Press the star on a document card', 'It shows up under “Starred”'], 'starred'],
    ['chat', 'Ask', 'Ask about the archive in plain words', ['Press Ask at the top right', 'Try “which clubs have no appointment letter”'], '']
  ],
  say: ['Hi! What can I help you find today?', 'The shared drive has {n} documents in {f} folders.', 'Type a club or a person’s name in search. I’ll show the exact page.', 'Drag a file card onto a folder to move it.', 'Press + on a card, then open Merge / convert to make one PDF.', 'My files stay on this device. Only you can see them.'],
  sayFound: 'Found {n} results', sayNone: 'Hmm… nothing found. Try a shorter word.', sayDone: 'All done!', sayWork: 'Working on it…', saySaved: 'Saved. Thanks for keeping things tidy!', sayMoved: 'Moved it for you', sayHi: 'Hi! Tap me any time.'
 }
};
const LS = { get(k, d) { try { const v = localStorage.getItem('tuarc3.' + k); return v == null ? d : v; } catch { return d; } }, set(k, v) { try { localStorage.setItem('tuarc3.' + k, v); } catch {} } };
let lang = LS.get('lang', 'th');
// The TUSU CI theme became the default once; anyone can still pick another theme afterwards.
if (LS.get('ci', '') !== '1') { LS.set('pal', 'tusu'); LS.set('ci', '1'); }
const t = (k, vars) => { let s = TX[lang]?.[k] ?? TX.th[k] ?? k; if (vars && typeof s === 'string') for (const [a, b] of Object.entries(vars)) s = s.replaceAll('{' + a + '}', b); return s; };

/* ============ helpers ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ic = n => `<svg class="i"><use href="#i-${n}"/></svg>`;
const norm = s => String(s ?? '').toLowerCase().replace(/ํา/g, 'ำ').replace(/ำ/g, 'า').replace(/ํ/g, '').replace(/[\s​.,\-_()/]+/g, '');
const fmtB = b => b == null ? '–' : b < 1024 ? b + ' B' : b < 1048576 ? Math.round(b / 1024) + ' KB' : b < 1073741824 ? (b / 1048576).toFixed(1) + ' MB' : (b / 1073741824).toFixed(2) + ' GB';
const fmtD = iso => { const d = new Date(iso); return isNaN(d) ? '–' : d.toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); };
const short = c => String(c).replace(/แห่งมหาวิทยาลัยธรรมศาสตร์$/, '').replace(/มหาวิทยาลัยธรรมศาสตร์$/, '').trim();
const safe = s => String(s || 'document').replace(/[\\/:*?"<>|]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120);
const uniq = a => [...new Set(a.filter(Boolean))];
const rid = () => Math.random().toString(36).slice(2, 10);
const COLORS = {
  blue: '#3B82F6', sky: '#0EA5E9', cyan: '#06B6D4', teal: '#14B8A6', green: '#22A06B', lime: '#84CC16',
  amber: '#E8A317', orange: '#F97316', red: '#E5484D', rose: '#F43F5E', pink: '#EC4899', fuchsia: '#D946EF',
  violet: '#8B5CF6', indigo: '#6366F1', brown: '#A16207', slate: '#64748B'
};
// A folder color is a preset name or a custom '#rrggbb' from the color picker.
const colorOf = c => COLORS[c] || (/^#[0-9a-f]{6}$/i.test(c || '') ? c : COLORS.blue);
const STATUS = ['active', 'draft', 'archived'];
const CAMPUS = ['rangsit', 'tpc', 'lampang', 'pattaya'];
const CATS = [['ศิลปะวัฒนธรรม', 'arts', 'Arts & culture'], ['วิชาการ', 'acad', 'Academic'], ['บำเพ็ญประโยชน์', 'vol', 'Volunteer'], ['ศาสนาและจริยธรรม', 'rel', 'Religion & ethics'], ['กีฬา', 'sport', 'Sports']];
const catCls = c => (CATS.find(x => x[0] === c) || [0, 'none'])[1];
const catLbl = c => { const x = CATS.find(y => y[0] === c); return x ? (lang === 'en' ? x[2] : x[0]) : (lang === 'en' ? 'Uncategorized' : 'ไม่ระบุสาย'); };
// Linked categories. Every document and club carries tags as 'group:value'. Most come from data it already has
// (category, campus, club or group, year, document type), topics come from the club's name (TOPICS) plus the
// editor's own `tags` field, and a document also inherits the tags of the clubs it is about.
const TOPICS = [
  ['ดนตรี', 'Music', /ดนตรี|ขับร้อง|ดุริยางค์|โฟล์คซอง|music/i],
  ['การแสดงและเวที', 'Performing arts', /ละคอน|ละคร|นาฏศิลป์|เต้น|dance|เชียร์|คัลเลอร์การ์ด|พิธีกร|สันทนาการ/i],
  ['วัฒนธรรมท้องถิ่น', 'Local culture', /อีสาน|ทักษิณ|ขอนแก่น|ภาคใต้|กาสะลอง|อนุรักษ์และส่งเสริมศิลป|ไทยคดี|ดนตรีไทย|ประเพณี/],
  ['สื่อและภาพ', 'Media & film', /ถ่ายภาพ|ภาพยนตร์|วิทยุ|โทรทัศน์|สื่อ|สารคดี/],
  ['ภาษาและการพูด', 'Language & speaking', /ปาฐกถา|โต้วาที|วรรณศิลป์|ภาษา|tedx|พิธีกร/i],
  ['เทคโนโลยีและข้อมูล', 'Tech & data', /บล็อกเชน|google developer|ดาต้า|อิเล็กทรอนิกส์|blockchain|data/i],
  ['ผู้นำและธุรกิจ', 'Leadership & business', /ไอเซค|ผู้นำ|leaders|โรตาแรคท์|เคส|organized|โกล์เกทเทอร์|พัฒนาศักยภาพ|คอนซัลติ้ง/i],
  ['สังคมและการเมือง', 'Society & politics', /การเมือง|รัฐสภา|สหประชาชาติ|ประชาชน|แอคท|change/i],
  ['นานาชาติ', 'International', /international|นานาชาติ|สหประชาชาติ|ไอเซค|dome to west|ภาษาอังกฤษ/i],
  ['สิ่งแวดล้อมและธรรมชาติ', 'Environment & nature', /ธรรมชาติ|สิ่งแวดล้อม|climate/i],
  ['อาสาและค่าย', 'Volunteering & camps', /อาสา|ค่าย|ชนบท|ทำด้วยใจ|เพื่อนโดม/],
  ['กีฬาประเภททีม', 'Team sports', /บอล|ตะกร้อ|รักบี้|allstar/i],
  ['กีฬาแร็กเกต', 'Racket sports', /เทนนิส|แบดมินตัน/],
  ['ศิลปะการต่อสู้', 'Martial arts', /มวย|ยูโด|ยูยิตสู|เทควันโด|ปันจักสีลัต|ฟันดาบ|คาราเต้|ต่อสู้/],
  ['กีฬาความแม่นยำ', 'Precision sports', /ยิงธนู|ยิงปืน|กอล์ฟ|เปตอง/],
  ['กีฬาทางน้ำ', 'Water sports', /ทางน้ำ|เรือพาย/],
  ['เกมและบอร์ดเกม', 'Games & esports', /หมากกระดาน|อิเล็กทรอนิกส์|เทเบิลเกม|ท็อปเกม|บอร์ดเกม/],
  ['สุขภาพและร่างกาย', 'Fitness & wellbeing', /เวทเทนนิ่ง|กรีฑา|ลีลาศ|เอ็กซ์ตรีม|อารมณ์|กรรมฐาน/]
];
const DOC_TYPES = [['ใบแต่งตั้ง', 'Appointment'], ['โครงการ', 'Project proposal'], ['งบประมาณ', 'Budget'], ['รายงานผล', 'Report'], ['รายงานการประชุม', 'Meeting minutes'], ['ประกาศ', 'Announcement'], ['หนังสือ', 'Letter'], ['แบบฟอร์ม', 'Form'], ['เอกสาร', 'Document'], ['ลิงก์', 'Link']];
const TAG_G = [['topic', 'gTopic'], ['cat', 'fCat'], ['type', 'gType'], ['campus', 'fCampus'], ['kind', 'fKind'], ['year', 'fYear']];
function tagLbl(k) {
  const i = k.indexOf(':'), g = k.slice(0, i), v = k.slice(i + 1);
  if (g === 'topic') { const x = TOPICS.find(y => y[0] === v); return x && lang === 'en' ? x[1] : v; }
  if (g === 'type') { const x = DOC_TYPES.find(y => y[0] === v); return x && lang === 'en' ? x[1] : v; }
  if (g === 'cat') return catLbl(v);
  if (g === 'campus') return t(v);
  if (g === 'kind') return t(v === 'indep' ? 'kIndep' : 'kClub');
  return v;
}
// c.keywords: other names people search for (the old sheet name, English names, nicknames), editable on the club page.
const clubWords = c => [c.name, c.short, ...(c.keywords || [])].filter(Boolean);
const autoTopics = c => TOPICS.filter(x => x[2].test(clubWords(c).join(' '))).map(x => x[0]);
const clubTags = c => uniq([c.cat && 'cat:' + c.cat, c.campus && 'campus:' + c.campus, c.kind && 'kind:' + c.kind, ...[...autoTopics(c), ...(c.tags || [])].map(x => 'topic:' + x)]);
const docTags = d => uniq([(d.type || (isLink(d) ? 'ลิงก์' : '')) && 'type:' + (d.type || 'ลิงก์'), d.year && 'year:' + d.year, ...(d.tags || []).map(x => 'topic:' + x), ...(d.clubIds || []).flatMap(id => { const c = DATA.clubs.find(x => x.id === id); return c ? clubTags(c) : []; })]);
const tagHref = keys => '#t-' + encodeURIComponent(keys.join('|'));
const tagChip = (k, extra = '') => `<a class="fchip tchip" href="${tagHref([k])}">${esc(tagLbl(k))}${extra}</a>`;
const STATS = [['มีสถานภาพ', 'Active', 'ok'], ['รอจดจัดตั้ง', 'Pending', 'warn'], ['ยุบเลิก', 'Dissolved', 'bad']];
const statLbl = s => { const x = STATS.find(y => y[0] === s); return x ? (lang === 'en' ? x[1] : x[0]) : s; };
const statCls = s => (STATS.find(y => y[0] === s) || [0, 0, ''])[2];
const isLink = d => d && d.kind === 'link';
function linkKind(u) {
  u = String(u || '');
  if (u.startsWith('mailto:')) return ['mail', '@'];
  if (u.startsWith('tel:')) return ['tel', 'TEL'];
  if (/instagram\.com/.test(u)) return ['ig', 'IG'];
  if (/docs\.google\.com\/spreadsheets/.test(u)) return ['sheet', 'XLS'];
  if (/docs\.google\.com\/document/.test(u)) return ['doc', 'DOC'];
  if (/docs\.google\.com\/presentation/.test(u)) return ['slide', 'PPT'];
  if (/forms\.gle|docs\.google\.com\/forms/.test(u)) return ['form', 'FORM'];
  if (/drive\.google\.com\/drive\/(u\/\d\/)?folders/.test(u)) return ['drive', 'DIR'];
  if (/drive\.google\.com/.test(u)) return ['drive', 'FILE'];
  return ['web', 'WEB'];
}
const hostOf = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return ''; } };
const OFFICE = { doc: 'application/msword', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', xls: 'application/vnd.ms-excel', xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', csv: 'text/csv', ppt: 'application/vnd.ms-powerpoint', pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', txt: 'text/plain' };
const extOf = d => ((d.fileName || '').split('.').pop() || '').toLowerCase();
const isImg = d => /^image\//.test(d.mime || '');
const isOffice = d => !isLink(d) && !isPdf(d) && !isImg(d);
const ofcCls = d => { const x = extOf(d); return /docx?|txt/.test(x) ? 'docx' : /xlsx?|csv/.test(x) ? 'xlsx' : /pptx?/.test(x) ? 'pptx' : 'other'; };
const mascotOn = () => LS.get('mascot', 'off') === 'on';
// Assistant gallery: built-in pixel characters (12-frame strips, see tools/make-sprites.js)
// plus photos the team added (shared through API.listMascots). Which one shows is chosen per device (`mascotPick`).
const MASCOTS = [{ id: 'default', strip: 'assets/mascot.webp', name: 'mName0' }, { id: 'dog', strip: 'assets/mascot-dog.png', name: 'mName1' }, { id: 'robot', strip: 'assets/mascot-robot.png', name: 'mName2' }];
const MASCOT_MAX = 30;
let TEAM_M = [];
const mascotPick = () => LS.get('mascotPick', 'default');
const mascotNow = () => MASCOTS.find(m => m.id === mascotPick()) || TEAM_M.find(m => m.id === mascotPick()) || MASCOTS[0];
const mascotPhoto = () => mascotNow().url || '';
// Crops a picked image to the assistant's 220×326 shape, shares it with the team and selects it.
async function addMascotPhoto(file) {
  if (TEAM_M.length >= MASCOT_MAX) throw { code: 'full' };
  const b = await createImageBitmap(file), W = 220, H = 326, c = document.createElement('canvas');
  c.width = W; c.height = H;
  const s = Math.max(W / b.width, H / b.height), w = b.width * s, h = b.height * s;
  c.getContext('2d').drawImage(b, (W - w) / 2, (H - h) / 2, w, h);
  const m = await API.addMascot(c.toDataURL('image/webp', .85));
  TEAM_M.push(m); LS.set('mascotPick', m.id); LS.set('mascot', 'on');
}
async function removeMascotPhoto(id) {
  await API.removeMascot(id);
  TEAM_M = TEAM_M.filter(m => m.id !== id);
  if (mascotPick() === id) LS.set('mascotPick', 'default');
}
const canDelMascot = m => S.staff || m.by === API.me();
async function loadMascots() {
  try { TEAM_M = await API.listMascots(); } catch (e) { console.error(e); }
  applyLook(); if (cur() === 'look') route();
}
let tt; function toast(m) { let e = $('.toast'); if (!e) { e = document.createElement('div'); e.className = 'toast'; e.setAttribute('role', 'status'); document.body.append(e); } e.textContent = m; e.hidden = false; clearTimeout(tt); tt = setTimeout(() => e.hidden = true, 3000); }
function veil(on, m) { let e = $('.veil'); if (!on) { e && e.remove(); return; } if (!e) { e = document.createElement('div'); e.className = 'veil'; document.body.append(e); } e.innerHTML = `<div><span class="spin"></span>${esc(m || t('tWork'))}</div>`; }

/* ============ state ============ */
const S = {
  staff: false, admin: false, art: null, assets: null, dl: null,
  stars: (() => { try { return JSON.parse(LS.get('stars', '[]')); } catch { return []; } })(),
  tray: (() => { try { return JSON.parse(LS.get('tray', '[]')); } catch { return []; } })(), local: new Map(),
  layout: LS.get('layout', 'grid'), sort: LS.get('sort', 'name'), q: ''
};
const saveStars = () => LS.set('stars', JSON.stringify(S.stars));
const saveTray = () => LS.set('tray', JSON.stringify(S.tray.filter(x => x.src !== 'local')));

/* ============ personal storage (IndexedDB) ============ */
const MY = { folders: [], files: [], temp: false, db: null, urls: new Map() };
function idbReq(r) { return new Promise((res, rej) => { r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
async function myOpen() {
  try {
    const r = indexedDB.open('tuarc-mine', 1);
    r.onupgradeneeded = () => { const d = r.result; if (!d.objectStoreNames.contains('files')) d.createObjectStore('files', { keyPath: 'id' }); if (!d.objectStoreNames.contains('folders')) d.createObjectStore('folders', { keyPath: 'id' }); };
    MY.db = await idbReq(r);
    MY.folders = await idbReq(MY.db.transaction('folders').objectStore('folders').getAll());
    MY.files = await idbReq(MY.db.transaction('files').objectStore('files').getAll());
  } catch (e) { MY.temp = true; MY.db = null; }
}
async function myPut(store, obj) { if (!MY.db) return; try { await idbReq(MY.db.transaction(store, 'readwrite').objectStore(store).put(obj)); } catch (e) { console.error(e); toast(t('tErr')); } }
async function myDel(store, id) { if (!MY.db) return; try { await idbReq(MY.db.transaction(store, 'readwrite').objectStore(store).delete(id)); } catch (e) { console.error(e); } }
function myThumb(d) { if (!d.thumb) return ''; if (!MY.urls.has(d.id)) MY.urls.set(d.id, URL.createObjectURL(d.thumb)); return MY.urls.get(d.id); }

/* ============ file links come from api.js ============ */
const FILES = { url: d => API.fileUrl(d), thumb: d => API.thumbUrl(d) };

/* ============ adapters ============ */
const A = {
  shared: {
    folders: () => DATA.folders,
    files: () => DATA.docs.filter(d => !d.trashed && (S.staff || (d.status || 'active') !== 'draft')),
    edit: () => S.staff,
    thumb: d => FILES.thumb(d),
    root: '#drive', pre: '#d-'
  },
  mine: {
    folders: () => MY.folders,
    files: () => MY.files,
    edit: () => true,
    thumb: d => myThumb(d),
    root: '#mine', pre: '#m-'
  }
};
const folderOf = (k, id) => A[k].folders().find(f => f.id === id);
const kidsF = (k, id) => A[k].folders().filter(f => (f.parent || null) === (id || null));
const kidsD = (k, id) => A[k].files().filter(d => (d.folder || null) === (id || null));
function countIn(k, id) { return kidsD(k, id).length + kidsF(k, id).reduce((a, f) => a + countIn(k, f.id), 0); }
function pathOf(k, id) { const p = []; let f = folderOf(k, id); const seen = new Set(); while (f && !seen.has(f.id)) { seen.add(f.id); p.unshift(f); f = folderOf(k, f.parent); } return p; }
function descendants(k, id) { const out = new Set([id]); let grew = true; while (grew) { grew = false; for (const f of A[k].folders()) if (out.has(f.parent) && !out.has(f.id)) { out.add(f.id); grew = true; } } return out; }

/* ============ save shared data (through api.js) ============ */
// changes: list of [store, obj, isDelete]; store is 'folders' | 'files' | 'docs' | 'clubs'
async function commit(changes = []) {
  DATA.updatedAt = new Date().toISOString(); for (const d of DATA.docs) delete d._h;
  route();
  if (!A.shared.edit()) { toast(t('tReadOnly')); return; }
  mood('work', 6);
  try {
    for (const [store, obj, del] of changes) {
      const col = store === 'files' ? 'docs' : store;
      if (del) await API.remove(col, obj.id); else await API.put(col, obj);
    }
    toast(API.demo ? t('tDemoSaved') : t('tSaved')); say(t('saySaved'), 'bow', 8);
  } catch (e) { console.error(e); toast(t('tErr')); mood('confused', 8); }
}

/* ============ mascot ============ */
// frames: 0 stand, 1 smile, 2 stand2, 3 wind, 4 wind2, 5 wave, 6 hold, 7 bow, 8 turn, 9 laptop, 10 thumbs, 11 look
const IDLE = [0, 0, 2, 2, 0, 0, 2, 2, 0, 11, 11, 0, 0, 2, 2, 0, 3, 4, 4, 3, 0, 0, 6, 6, 6, 0];
const MOODS = { wave: [5, 0, 5, 0, 5], happy: [10, 10, 1, 1, 10, 10], work: [9, 9], confused: [8, 11, 8, 11], bow: [7, 7, 7, 1], hold: [6, 6] };
const M = { tick: 0, mood: null, left: 0, msgs: 0, sayT: null };
function mood(name, ticks) { M.mood = name; M.left = ticks || MOODS[name].length * 2; }
function frameNow() {
  if (M.mood && M.left > 0) { const seq = MOODS[M.mood]; M.left--; const f = seq[Math.floor(M.tick / 2) % seq.length]; if (M.left === 0) M.mood = null; return f; }
  return IDLE[M.tick % IDLE.length];
}
// A custom photo is one still image, so instead of switching frames it hops while a mood plays.
function paintMascots() {
  const f = frameNow(), photo = !!mascotPhoto();
  for (const el of $$('.mascot')) { if (photo) { el.style.backgroundPosition = ''; el.classList.toggle('hop', !!M.mood); } else el.style.backgroundPosition = `${(f / 11) * 100}% 0`; }
}
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
setInterval(() => { if (document.hidden) return; M.tick++; if (!reduce || M.mood) paintMascots(); }, 260);
function say(text, md, ticks) {
  M.last = text;
  const home = $('#homeBubble');
  const target = home || $('#aBubble');
  if (md) mood(md, ticks);
  if (!target) return;
  target.textContent = text; target.hidden = false;
  if (!home && mascotOn()) { $('#assist').hidden = false; clearTimeout(M.sayT); M.sayT = setTimeout(() => { $('#aBubble').hidden = true; }, 4500); }
}
function tipLine() { const L = t('say'); const n = A.shared.files().length, f = A.shared.folders().length; return L[M.msgs++ % L.length].replace('{n}', n).replace('{f}', f); }
document.addEventListener('click', e => { if (e.target.closest('.mascot') && !e.target.closest('.chat')) openChat(); });

/* ============ chat assistant ============
 * Answers only from what the site already loaded (DATA): clubs, appointment letters, committees, documents.
 * No AI and nothing leaves the browser. Contact details (phone, LINE, email) are never given in chat. */
const CH = { log: [] };
const ROLES = [[/รองประธาน|vice/, /รองประธาน|vice/i], [/ประธาน|president|หัวหน้า/, /^(?!.*รอง).*(ประธาน|president)/i], [/เลขา|secretary/, /เลขา|secretary/i], [/เหรัญญิก|การเงิน|treasurer|finance/, /เหรัญญิก|การเงิน|treasurer|finance/i], [/กรรมการ|รายชื่อ|ใครบ้าง|committee|members|ทีม/, /./]];
const CAMPUS_W = [['rangsit', /รังสิต|rangsit/], ['tpc', /ท่าพระจันทร์|ท่าพระ|tha ?prachan|tpc/], ['lampang', /ลำปาง|lampang/], ['pattaya', /พัทยา|pattaya/]];
const CAT_W = [['ศิลปะวัฒนธรรม', /ศิลป|วัฒนธรรม|arts?/], ['วิชาการ', /วิชาการ|academic/], ['บำเพ็ญประโยชน์', /บำเพ็ญ|อาสา|volunteer/], ['ศาสนาและจริยธรรม', /ศาสนา|จริยธรรม|religio/], ['กีฬา', /กีฬา|sports?/]];
const STAT_W = [['ยุบเลิก', /ยุบ|dissolved/], ['รอจดจัดตั้ง', /รอจด|pending/], ['มีสถานภาพ', /มีสถานภาพ|active/]];
const appointOf = c => DATA.docs.find(d => d.id === c.appointDoc && !d.trashed) || DATA.docs.filter(d => !d.trashed && !isLink(d) && (d.clubIds || []).includes(c.id) && /แต่งตั้ง/.test(d.type || d.title || '')).sort((a, b) => (b.year || 0) - (a.year || 0))[0];
// The club named in the question: the longest club name (short or full) found inside it.
function chatClubs(q) {
  const qn = norm(q); let best = 0, hits = [];
  for (const c of DATA.clubs) {
    const len = Math.max(...[c.short, c.name, short(c.name)].filter(Boolean).map(x => norm(x)).filter(x => x.length >= 2 && qn.includes(x)).map(x => x.length),
      ...(c.keywords || []).map(x => norm(x)).filter(x => x.length >= 4 && qn.includes(x)).map(x => x.length), 0);
    if (len > best) { best = len; hits = [c]; } else if (len && len === best) hits.push(c);
  }
  const camp = CAMPUS_W.find(([, re]) => re.test(q));
  if (hits.length < 2) return hits;
  if (camp && hits.some(c => c.campus === camp[0])) return hits.filter(c => c.campus === camp[0]);
  // Same name on several campuses and none mentioned: answer for Rangsit, offer the others as links.
  const main = hits.filter(c => c.campus === 'rangsit');
  if (!camp && main.length === 1) { main[0]._also = hits.filter(c => c !== main[0]); return main; }
  return hits;
}
function chatFilters(q) {
  const f = {}, n = [];
  const camp = CAMPUS_W.find(([, re]) => re.test(q)); if (camp) { f.campus = camp[0]; n.push(campLbl(camp[0])); }
  const cat = CAT_W.find(([, re]) => re.test(q)); if (cat) { f.cat = cat[0]; n.push(catLbl(cat[0])); }
  if (/กลุ่มอิสระ|อิสระ|independent/i.test(q)) { f.kind = 'indep'; n.push(t('kIndep')); }
  const st = STAT_W.find(([, re]) => re.test(q)); if (st) { f.status = st[0]; n.push(statLbl(st[0])); }
  if (/(ยังไม่|ไม่)มีใบแต่งตั้ง|ไม่ส่ง|without appoint|no appoint/i.test(q)) { f.appoint = false; n.push(t('chNoAppoint')); }
  else if (/มีใบแต่งตั้ง|ส่งแล้ว|with appoint/i.test(q)) { f.appoint = true; n.push(t('chHasAppoint')); }
  const list = DATA.clubs.filter(c => (!f.campus || c.campus === f.campus) && (!f.cat || c.cat === f.cat) && (!f.kind || c.kind === f.kind) && (!f.status || c.status === f.status) && (f.appoint === undefined || !!appointOf(c) === f.appoint));
  return { any: n.length > 0, label: n.join(' · '), list };
}
const clubLink = c => `<a class="cchip" href="#c-${esc(c.id)}">${esc(c.short || short(c.name))}${c.campus && c.campus !== 'rangsit' ? ` · ${esc(campLbl(c.campus))}` : ''}</a>`;
const docBtn = d => `<button class="cchip cdoc" data-row="${esc(d.id)}">${ic('doc')}${esc(d.title)}</button>`;
function chatAnswer(raw) {
  const q = raw.trim(), ql = q.toLowerCase();
  if (!q || /^(สวัสดี|หวัดดี|hi|hello|hey|ช่วย|help|ทำอะไรได้|ถามอะไรได้)/i.test(ql)) return { html: esc(t('chHelp')), mood: 'wave' };
  const clubs = chatClubs(ql);
  if (clubs.length > 1 && clubs.length <= 8) return { html: `${esc(t('chWhich'))}<div class="crow">${clubs.map(clubLink).join('')}</div>`, mood: 'confused' };
  if (clubs.length === 1) {
    const r = chatClub(clubs[0], ql), also = clubs[0]._also; delete clubs[0]._also;
    if (also?.length) r.html += `<p class="cnote">${esc(t('chAlso'))}</p><div class="crow">${also.map(clubLink).join('')}</div>`;
    return r;
  }
  // counts and lists of clubs (before names, so a word like "อิสระ" is read as a filter, not a person)
  const f = chatFilters(ql);
  if (/กี่|จำนวน|เท่าไร|how many|count/i.test(ql)) return { html: `${esc(f.any ? f.label : t('chAllClubs'))}: <b>${f.list.length}</b> ${esc(t('chItems'))}<div class="crow"><a class="cchip" href="#clubs">${esc(t('chSeeList'))}</a></div>`, mood: 'happy' };
  if (f.any || /มีอะไรบ้าง|ไหนบ้าง|รายชื่อ|ทั้งหมด|list|which/i.test(ql)) {
    if (!f.list.length) return { html: esc(t('chNone')), mood: 'confused' };
    return { html: `${esc(f.any ? f.label : t('chAllClubs'))} · ${f.list.length} ${esc(t('chItems'))}<div class="crow">${f.list.slice(0, 24).map(clubLink).join('')}</div>${f.list.length > 24 ? `<p class="cnote">${esc(t('chMore', { n: f.list.length - 24 }))}</p>` : ''}`, mood: 'happy' };
  }
  // a person: someone named in a committee list
  const qn = norm(q), people = [];
  for (const d of DATA.docs) if (!d.trashed) for (const x of d.committee || []) { const nm = norm((x.split('—')[0] || '').split(' ')[0]); if (nm.length >= 3 && qn.includes(nm)) people.push({ x, d }); }
  if (people.length) return { html: `${esc(t('chPeople'))}<ul class="clist">${people.slice(0, 8).map(p => `<li>${esc(p.x)} · ${esc((p.d.clubIds || []).map(id => clubById(id)?.short || '').filter(Boolean).join(', ') || p.d.title)}</li>`).join('')}</ul><div class="crow">${uniq(people.map(p => p.d.id)).slice(0, 4).map(id => docBtn(DATA.docs.find(d => d.id === id))).join('')}</div>`, mood: 'happy' };
  // documents
  const words = q.replace(/[?？!]/g, ' ').replace(/(ขอ|หา|อยาก|ได้|ไหม|มั้ย|หน่อย|ครับ|ค่ะ|คะ|นะ|เอกสาร|ไฟล์|ดู|เปิด|find|show|me|the|please|document|file)/gi, ' ');
  const docs = words.trim() ? matchDocs('shared', A.shared.files(), words).map(r => r.d) : [];
  if (docs.length) return { html: `${esc(t('chDocs', { n: docs.length }))}<div class="crow">${docs.slice(0, 6).map(docBtn).join('')}</div>`, mood: 'happy' };
  return { html: esc(t('chNo')), mood: 'confused' };
}
// Answers about one club: committee roles, advisor, appointment letter, or an overview.
function chatClub(c, ql) {
    const ap = appointOf(c), name = esc(c.short || short(c.name));
    if (/เบอร์|โทร|ติดต่อ|ไลน์|line|อีเมล|e-?mail|phone|contact|ig|ไอจี/i.test(ql)) return { html: `${esc(t('chContact'))}<div class="crow">${clubLink(c)}</div>`, mood: 'bow' };
    const role = ROLES.find(([w]) => w.test(ql));
    if (role) {
      const who = (ap?.committee || []).filter(x => role[1].test(x.split('—')[1] || x));
      if (!ap) return { html: `${esc(t('chNoAppointFor', { n: c.short || short(c.name) }))}<div class="crow">${clubLink(c)}</div>`, mood: 'confused' };
      if (!who.length) return { html: `${esc(t('chNoRole', { n: c.short || short(c.name) }))}<div class="crow">${docBtn(ap)}</div>`, mood: 'confused' };
      return { html: `<b>${name}</b> (${esc(t('chFromAppoint', { y: ap.year || '' }))})<ul class="clist">${who.map(x => `<li>${esc(x)}</li>`).join('')}</ul><p class="cnote">${esc(t('chScanNote'))}</p><div class="crow">${docBtn(ap)}${clubLink(c)}</div>`, mood: 'happy' };
    }
    if (/ที่ปรึกษา|advisor/i.test(ql)) return { html: c.advisor ? `${esc(t('chAdvisor', { n: c.short || short(c.name) }))} <b>${esc(c.advisor)}</b><div class="crow">${clubLink(c)}</div>` : `${esc(t('chNoAdvisor'))}<div class="crow">${clubLink(c)}</div>`, mood: c.advisor ? 'happy' : 'confused' };
    if (/แต่งตั้ง|appoint/i.test(ql)) return ap
      ? { html: `${esc(t('chAppointYes', { n: c.short || short(c.name), y: ap.year || '' }))}<ul class="clist">${ap.announced ? `<li>${esc(t('chAnnounced'))} ${esc(ap.announced)}</li>` : ''}${ap.meet ? `<li>${esc(t('chMeet'))} ${esc(ap.meet)}</li>` : ''}${ap.signed ? `<li>${esc(ap.signed === 'full' ? t('signedFull') : t('signedPartial'))}</li>` : ''}</ul><div class="crow">${docBtn(ap)}</div>`, mood: 'happy' }
      : { html: `${esc(t('chNoAppointFor', { n: c.short || short(c.name) }))}<div class="crow">${clubLink(c)}</div>`, mood: 'confused' };
    // overview of the club
    return { html: `<b>${esc(c.name)}</b><ul class="clist"><li>${esc(c.kind === 'indep' ? t('kIndep') : t('kClub'))} · ${esc(catLbl(c.cat))} · ${esc(campLbl(c.campus))}</li><li>${esc(t('fStat'))}: ${esc(statLbl(c.status) || '-')}</li>${c.advisor ? `<li>${esc(t('advisor'))}: ${esc(c.advisor)}</li>` : ''}<li>${esc(ap ? t('chAppointYes', { n: '', y: ap.year || '' }).trim() : t('chNoAppoint'))}</li></ul><div class="crow">${clubLink(c)}${ap ? docBtn(ap) : ''}</div>`, mood: 'happy' };
}
function chatPaint() {
  const box = $('#clog'); if (!box) return;
  box.innerHTML = CH.log.map(m => `<div class="cm ${m.me ? 'me' : 'bot'}">${m.html}</div>`).join('');
  box.scrollTop = box.scrollHeight;
}
function chatAsk(q) {
  if (!q.trim()) return;
  CH.log.push({ me: true, html: esc(q) });
  const a = chatAnswer(q); CH.log.push({ html: a.html }); mood(a.mood);
  chatPaint();
}
function openChat() {
  let el = $('#chat');
  if (el) { el.remove(); return; }
  el = document.createElement('section'); el.className = 'chat'; el.id = 'chat'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', t('chTitle'));
  el.innerHTML = `<header><div class="mascot" role="img" aria-label="assistant"></div><div><b>${esc(t('mascotName'))}</b><small>${esc(t('chSub'))}</small></div><button class="pill round" data-chatx aria-label="${esc(t('close'))}">${ic('x')}</button></header>
    <div class="clog" id="clog" aria-live="polite"></div>
    <div class="cex">${t('chEx').map(x => `<button class="cchip" data-chatq="${esc(x)}">${esc(x)}</button>`).join('')}</div>
    <form class="cform" id="cform"><input id="cin" autocomplete="off" placeholder="${esc(t('chPh'))}" aria-label="${esc(t('chPh'))}"><button class="btn go sm" aria-label="${esc(t('chSend'))}">${ic('arrow-up')}</button></form>`;
  document.body.append(el);
  if (!CH.log.length) CH.log.push({ html: esc(t('chHelp')) });
  chatPaint(); mood('wave');
  $('#cform', el).onsubmit = e => { e.preventDefault(); const i = $('#cin', el); chatAsk(i.value); i.value = ''; };
  setTimeout(() => $('#cin', el)?.focus(), 30);
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-chatx]')) $('#chat')?.remove();
  const ex = e.target.closest('[data-chatq]'); if (ex) chatAsk(ex.dataset.chatq);
  if (e.target.closest('#chat a[href^="#"], #chat [data-row]') && innerWidth < 700) $('#chat')?.remove();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#chat') && !$('.ov.m')) $('#chat').remove(); });

/* ============ look ============ */
function isDark() { const r = document.documentElement, m = r.dataset.mode; return m === 'dark' || (m === 'system' && (r.dataset.theme === 'dark' || (!r.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches))); }
// [key, label, heading font]. Kanit, Anuphan and Noto Sans Thai come with the page; the others load when picked.
const FONTS = [['tusu', 'fontTusu', 'Kanit'], ['prompt', 'fontPrompt', 'Prompt'], ['plex', 'fontPlex', 'IBM Plex Sans Thai'], ['sarabun', 'fontSarabun', 'Sarabun'], ['anuphan', 'fontAnuphan', 'Anuphan']];
const fontLinks = new Set(['Kanit', 'Anuphan', 'Noto Sans Thai']);
function loadFont(fam) {
  if (fontLinks.has(fam)) return; fontLinks.add(fam);
  const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = `https://fonts.googleapis.com/css2?family=${fam.replace(/ /g, '+')}:wght@400;500;600;700&display=swap`; document.head.append(l);
}
function applyLook() {
  const r = document.documentElement;
  r.dataset.palette = LS.get('pal', 'tusu'); r.dataset.mode = LS.get('mode', 'system'); r.lang = lang;
  const f = FONTS.find(x => x[0] === LS.get('font', 'tusu')) || FONTS[0]; r.dataset.font = f[0]; loadFont(f[2]);
  const mc = mascotNow();
  r.classList.toggle('mphoto', !!mc.url);
  if (mc.url) r.style.setProperty('--photo', `url("${mc.url}")`); else r.style.removeProperty('--photo');
  r.style.setProperty('--strip', `url("${mc.strip || MASCOTS[0].strip}")`);
  $$('[data-t]').forEach(e => e.textContent = t(e.dataset.t));
  $$('[data-tp]').forEach(e => e.placeholder = t(e.dataset.tp));
  $('#langLbl').textContent = lang === 'th' ? 'TH / EN' : 'EN / TH';
  $$('[data-ta]').forEach(e => { e.setAttribute('aria-label', t(e.dataset.ta)); e.title = t(e.dataset.ta); });
  $('#roleLbl').textContent = API.demo ? t('roleDemo') : S.admin ? t('roleAdmin') : S.staff ? t('roleStaff') : t('roleView');
}
$('#langBtn').onclick = () => { lang = lang === 'th' ? 'en' : 'th'; LS.set('lang', lang); applyLook(); route(); };
$('#chatBtn').onclick = () => openChat();
$('#backBtn').onclick = () => history.back();
$('#fwdBtn').onclick = () => history.forward();
function closeLook() { $('.lookpop')?.remove(); $('#lookBtn').setAttribute('aria-expanded', 'false'); }
function lookHtml() {
  const pal = LS.get('pal', 'tusu'), mode = LS.get('mode', 'system');
  const P = [['tusu', 'palTusu', ['#006371', '#2BABC2', '#E8F3F5', '#B2DCE1']], ['blue', 'palBlue', ['#1479F0', '#7DB8FF', '#EFF3F9', '#0B5BC0']], ['tu', 'palTu', ['#B8141F', '#F5C443', '#FBF4EC', '#B07C00']], ['mint', 'palMint', ['#0B8F7E', '#8CCBF5', '#FFFFFF', '#2577B8']], ['pinksky', 'palPink', ['#F383B2', '#93C4F7', '#FFFFFF', '#CC3F7C']]];
  return `<div><h6>${esc(t('theme'))}</h6><div class="palrow">${P.map(([k, l, c]) => `<button class="palbtn" data-pal="${k}" aria-pressed="${pal === k}"><span class="sw2">${c.map(x => `<i style="background:${x}"></i>`).join('')}</span>${esc(t(l).replace(/ \(.*\)$/, ''))}</button>`).join('')}</div></div>
    <div><h6>${esc(t('mode'))}</h6><div class="seg">${['light', 'dark', 'system'].map(m => `<button data-setmode="${m}" aria-pressed="${mode === m}">${ic(m === 'light' ? 'sun' : m === 'dark' ? 'moon' : 'gear')}${esc(t(m))}</button>`).join('')}</div></div>
    <div class="sw-tog"><span>${esc(t('mascotT'))}</span><button class="tog" data-mascot aria-pressed="${mascotOn()}" aria-label="${esc(t('mascotT'))}"></button></div>`;
}
$('#lookBtn').onclick = e => {
  if ($('.lookpop')) return closeLook();
  const m = document.createElement('div'); m.className = 'lookpop'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-label', t('lookHero'));
  m.innerHTML = lookHtml(); document.body.append(m);
  const r = $('#lookBtn').getBoundingClientRect();
  m.style.top = (r.bottom + 8) + 'px'; m.style.left = Math.max(12, Math.min(innerWidth - m.offsetWidth - 12, r.right - m.offsetWidth)) + 'px';
  $('#lookBtn').setAttribute('aria-expanded', 'true');
};
document.addEventListener('click', e => { if ($('.lookpop') && !e.target.closest('.lookpop') && !e.target.closest('#lookBtn')) closeLook(); }, true);
function refreshLook() { const m = $('.lookpop'); if (m) m.innerHTML = lookHtml(); }
$('#menuBtn').onclick = () => side(true);
function side(on) { $('#side').classList.toggle('open', on); let s = $('.scrim'); if (on && !s) { s = document.createElement('div'); s.className = 'scrim'; s.onclick = () => side(false); document.body.append(s); } if (!on && s) s.remove(); }
let qT; $('#q').addEventListener('input', e => { clearTimeout(qT); qT = setTimeout(() => { S.q = e.target.value.trim(); if (S.q) { if (cur() !== 'search') location.hash = 'search'; else route(); } else if (cur() === 'search') location.hash = 'home'; }, 200); });

/* ============ nav + router ============ */
function cur() { return (location.hash || '#home').slice(1) || 'home'; }
function renderNav() {
  const c = cur();
  const a = (h, icon, label, extra = '', cls = '') => `<a class="${cls}" href="#${h}" aria-current="${c === h ? 'page' : 'false'}">${icon}<span>${esc(label)}</span>${extra}</a>`;
  const ct = n => `<span class="ct num">${n}</span>`;
  let h = `<div class="grp"><h6>${esc(t('gOverview'))}</h6><div class="nav">${a('home', ic('home'), t('home'))}${a('clubs', ic('users'), t('clubsNav'), ct(DATA.clubs.length))}${a('tags', ic('tag'), t('tagsNav'))}</div></div>`;
  h += `<div class="grp"><h6>${esc(t('gShared'))}</h6><div class="nav">${a('drive', ic('drive'), t('allDocs'), ct(A.shared.files().length))}${kidsF('shared', null).map(f => a('d-' + f.id, `<i class="dot" style="background:${colorOf(f.color)}"></i>`, f.name, ct(countIn('shared', f.id)), 'sub')).join('')}</div></div>`;
  h += `<div class="grp"><h6>${esc(t('gMine'))}</h6><div class="nav">${a('mine', ic('user'), t('mine'), ct(MY.files.length))}${a('starred', ic('star'), t('starred'), ct(A.shared.files().filter(d => S.stars.includes(d.id)).length))}</div></div>`;
  h += `<div class="grp"><h6>${esc(t('gTools'))}</h6><div class="nav">${a('tools', ic('layers'), t('tools'), S.tray.length ? `<span class="badge num">${S.tray.length}</span>` : '')}${a('look', ic('gear'), t('look'))}${a('help', ic('help'), t('help'))}</div></div>`;
  if (S.staff) { const n = DATA.docs.filter(d => d.trashed).length; h += `<div class="grp"><h6>${esc(t('gStaff'))}</h6><div class="nav">${a('trash', ic('trash'), t('trash'), n ? ct(n) : '')}${S.admin ? a('team', ic('badge'), t('teamNav'), TEAM ? ct(TEAM.length) : '') : ''}</div></div>`; }
  $('#navs').innerHTML = h;
  // active state for nested drive folders
  if (c.startsWith('d-')) { const top = pathOf('shared', c.slice(2))[0]; if (top) $(`#navs a[href="#d-${CSS.escape(top.id)}"]`)?.setAttribute('aria-current', 'page'); }
  if (c.startsWith('m-')) $('#navs a[href="#mine"]')?.setAttribute('aria-current', 'page');
  if (c.startsWith('c-')) $('#navs a[href="#clubs"]')?.setAttribute('aria-current', 'page');
  if (c.startsWith('t-')) $('#navs a[href="#tags"]')?.setAttribute('aria-current', 'page');
}
$('#navs').addEventListener('click', e => { if (e.target.closest('a')) side(false); });
window.addEventListener('hashchange', () => { if (R.d) closeReader(); closeModal(); route(); window.scrollTo({ top: 0 }); });
function route() {
  renderNav(); applyLook();
  const c = cur(), P = $('#page');
  const onMine = c === 'mine' || c.startsWith('m-');
  $('#upBtn').hidden = !(onMine || (A.shared.edit() && API.canUpload() && (c === 'drive' || c.startsWith('d-') || c === 'home')));
  if (c === 'home') P.innerHTML = pageHome();
  else if (c === 'drive') P.innerHTML = pageDrive('shared', null);
  else if (c.startsWith('d-')) P.innerHTML = folderOf('shared', c.slice(2)) ? pageDrive('shared', c.slice(2)) : pageDrive('shared', null);
  else if (c === 'mine') P.innerHTML = pageDrive('mine', null);
  else if (c.startsWith('m-')) P.innerHTML = folderOf('mine', c.slice(2)) ? pageDrive('mine', c.slice(2)) : pageDrive('mine', null);
  else if (c === 'clubs') P.innerHTML = pageClubs();
  else if (c.startsWith('c-')) P.innerHTML = pageClub(c.slice(2));
  else if (c === 'help') P.innerHTML = pageHelp();
  else if (c === 'tags') P.innerHTML = pageTags([]);
  else if (c.startsWith('t-')) P.innerHTML = pageTags(decodeURIComponent(c.slice(2)).split('|').filter(Boolean));
  else if (c === 'starred') P.innerHTML = pageStarred();
  else if (c === 'tools') P.innerHTML = pageTools();
  else if (c === 'look') P.innerHTML = pageLook();
  else if (c === 'trash' && S.staff) P.innerHTML = pageTrash();
  else if (c === 'team' && S.admin) P.innerHTML = pageTeam();
  else if (c === 'search') P.innerHTML = pageSearch();
  else P.innerHTML = pageHome();
  if (c !== 'search' && S.q) { S.q = ''; $('#q').value = ''; }
  $('#assist').hidden = (c === 'home' && $('#homeBubble')) || !mascotOn();
  if (c !== 'home') $('#aBubble').hidden = true;
  paintMascots();
}
function curKindFolder() { const c = cur(); if (c === 'mine') return ['mine', null]; if (c.startsWith('m-')) return ['mine', c.slice(2)]; if (c === 'drive' || c === 'home') return ['shared', null]; if (c.startsWith('d-')) return ['shared', c.slice(2)]; return ['shared', null]; }
$('#upBtn').onclick = () => { const [k, f] = curKindFolder(); uploadModal(k, f); };

/* ============ cards ============ */
function statusChip(d) { if (d.trashed) return `<span class="chip st-trash">${esc(t('trash'))}</span>`; const s = d.status || 'active'; return `<span class="chip st-${s}">${esc(t(s))}</span>`; }
const inTray = (src, id) => S.tray.some(x => x.src === src && x.id === id);
function linkCard(k, d) {
  const [cls, lb] = linkKind(d.url), clubsTxt = (d.clubs || []).length === 1 ? short(d.clubs[0]) : '';
  return `<article class="card doc" data-k="${k}" data-type="file" data-id="${esc(d.id)}" draggable="${A[k].edit()}">
    <a class="open" href="${esc(d.url)}" target="_blank" rel="noopener" draggable="false">
      <div class="pv lnk"><span class="li ${cls}">${lb}</span></div>
      <div class="bd"><h4>${esc(d.title)}</h4><p class="meta">${esc([t('link'), hostOf(d.url), clubsTxt].filter(Boolean).join(' · '))}</p></div>
    </a>
    <div class="ft"><span class="sp"></span>
      ${k === 'shared' ? `<button class="ib star" data-star aria-pressed="${S.stars.includes(d.id)}" aria-label="${esc(t('star'))}" title="${esc(t('star'))}">${ic('star')}</button>` : ''}
      <button class="dots" data-dots aria-label="more">${ic('dots')}</button>
    </div></article>`;
}
function docCard(k, d, hits = []) {
  if (isLink(d)) return linkCard(k, d);
  const n = (d.clubs || []).length;
  const meta = [d.year, d.pageCount ? `${d.pageCount} ${t('pages')}` : '', n > 1 ? `${n} ${t('clubs')}` : n === 1 ? short(d.clubs[0]) : '', k === 'mine' ? fmtB(d.sizeBytes) : ''].filter(Boolean).join(' · ');
  const hit = hits.length ? `<p class="hit">${esc(t('foundIn'))} ${hits.slice(0, 3).map(p => { const pg = (d.pages || []).find(x => x.p === p); return `<b class="num">${p}</b>${pg && pg.club && d.pages.length > 1 ? ' ' + esc(short(pg.club)) : ''}`; }).join(' · ')}${hits.length > 3 ? ' · +' + (hits.length - 3) : ''}</p>` : '';
  const th = A[k].thumb(d), src = k === 'shared' ? 'doc' : 'mine';
  return `<article class="card doc" data-k="${k}" data-type="file" data-id="${esc(d.id)}" draggable="${A[k].edit()}">
    <button class="open" data-open="${hits[0] || 1}">
      <div class="pv">${th ? `<img loading="lazy" alt="" src="${esc(th)}" draggable="false" onerror="this.remove()">` : `${isOffice(d) ? `<span class="ofc"><span class="${ofcCls(d)}">${esc(extOf(d).toUpperCase() || 'FILE')}</span></span>` : `<span class="ty">${(d.mime || '').includes('pdf') ? 'PDF' : 'IMG'}</span>`}`}${d.pageCount > 1 ? `<span class="pg num">${d.pageCount} ${esc(t('pages'))}</span>` : ''}</div>
      <div class="bd">${k === 'shared' && (d.status || 'active') !== 'active' ? `<div>${statusChip(d)}</div>` : ''}<h4>${esc(d.title)}</h4><p class="meta">${esc(meta)}</p>${hit}</div>
    </button>
    <div class="ft"><span class="sp"></span>
      ${k === 'shared' ? `<button class="ib star" data-star aria-pressed="${S.stars.includes(d.id)}" aria-label="${esc(t('star'))}" title="${esc(t('star'))}">${ic('star')}</button>` : ''}
      ${isOffice(d) ? '' : `<button class="ib ${inTray(src, d.id) ? 'on' : ''}" data-tray aria-label="${esc(t('addTray'))}" title="${esc(inTray(src, d.id) ? t('inTray') : t('addTray'))}">${ic(inTray(src, d.id) ? 'check' : 'plus')}</button>`}
      <button class="dots" data-dots aria-label="more">${ic('dots')}</button>
    </div></article>`;
}
function folderTile(k, f) {
  const c = colorOf(f.color);
  return `<div class="ftile" data-k="${k}" data-type="folder" data-id="${esc(f.id)}" draggable="${A[k].edit()}">
    <a class="fo" href="${A[k].pre}${esc(f.id)}" draggable="false"><span class="fic" style="background:color-mix(in srgb, ${c} 16%, transparent);color:${c}">${ic('folder')}</span><span><b>${esc(f.name)}</b><small>${esc(t('items', { n: countIn(k, f.id) }))}</small></span></a>
    <button class="dots" data-dots aria-label="more">${ic('dots')}</button></div>`;
}
const layoutSeg = () => `<div class="seg"><button data-layout="grid" aria-pressed="${S.layout !== 'list'}">${esc(t('cards'))}</button><button data-layout="list" aria-pressed="${S.layout === 'list'}">${esc(t('list'))}</button></div>`;
function empty(icon, title, p) { return `<div class="card empty"><div class="ic blue">${ic(icon)}</div><h3>${esc(title)}</h3>${p ? `<p>${esc(p)}</p>` : ''}</div>`; }
function sortItems(list, key = 'title') { return [...list].sort((a, b) => S.sort === 'new' ? (b.createdAt || '').localeCompare(a.createdAt || '') : String(a[key]).localeCompare(String(b[key]), 'th', { numeric: true })); }

/* ============ pages ============ */
function pageHome() {
  const F = A.shared.files();
  const C = DATA.clubs, cl = C.filter(c => c.kind === 'club'), ig = C.filter(c => c.kind === 'indep');
  const act = L => L.filter(c => c.status === 'มีสถานภาพ').length;
  const ap = F.filter(d => d.type === 'ใบแต่งตั้ง').length, ln = F.filter(isLink).length;
  const recent = [...F].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || '')).slice(0, 6);
  const sc = (href, icon, cls, b, sm, n) => `<a class="card sc" href="#${href}"><span class="ic ${cls}">${ic(icon)}</span>${n != null ? `<span class="n num">${n}</span>` : '<span></span>'}<b>${esc(b)}</b><small>${esc(sm)}</small></a>`;
  const showM = mascotOn();
  if (showM && !M.greeted) { M.greeted = true; setTimeout(() => say(t('say')[0], 'wave', 12), 0); }
  return `<div class="page">
    ${LS.get('helpSeen', '') ? '' : `<div class="note-bar">${ic('help')}<span style="flex:1">${esc(t('helpFirst'))}</span><a class="btn go sm" href="#help">${esc(t('helpOpen'))}</a><button class="pill round" data-helpx aria-label="${esc(t('close'))}">${ic('x')}</button></div>`}
    <section class="card home-hero"><div class="${showM ? 'row2' : ''}">${showM ? `<div class="mascot" role="img" aria-label="assistant"></div>` : ''}
      <div style="display:grid;gap:10px;min-width:0">${showM ? `<div class="bubble" id="homeBubble" aria-live="polite" style="justify-self:start">${esc(M.last || t('say')[0])}</div>` : ''}<h1>${esc(t('homeH'))}</h1><p style="color:var(--muted)">${esc(t('homeP'))}</p></div></div>
      <label class="bigsearch"><span class="sr">${esc(t('search'))}</span>${ic('search')}<input id="q2" type="search" autocomplete="off" placeholder="${esc(t('searchPh'))}"></label>
      <div class="mrow"><span class="lb">${esc(t('mascotSet'))}</span>${[...MASCOTS, ...TEAM_M].map(p => { const label = p.name ? t(p.name) : t('mBy', { n: p.by || '' }); return `<button class="mgb" data-mpick="${esc(p.id)}" aria-pressed="${showM && mascotNow().id === p.id}" aria-label="${esc(label)}" title="${esc(label)}"><span class="mthumb${p.strip ? ' strip' : ''}" style="background-image:url(&quot;${p.strip || p.url}&quot;)"></span></button>`; }).join('')}
        <button class="fchip" data-assist="off" aria-pressed="${!showM}">${esc(t('mascotOff'))}</button><a class="link" href="#look">${esc(t('mascotPhoto'))}</a></div></section>
    <div class="shortcuts">
      ${sc('clubs', 'users', 'blue', t('scClubs'), t('sClubsSub', { n: act(cl) + act(ig) }), C.length)}
      ${sc('d-f-2569', 'badge', 'amber', t('scAppoint'), t('scAppointP'), ap)}
      ${sc('d-f-links', 'link', 'green', t('scLinks'), t('scLinksP'), ln)}
      ${sc('mine', 'user', 'violet', t('scMine'), t('scMineP'), MY.files.length)}
      ${sc('tools', 'layers', 'blue', t('scTools'), t('scToolsP'), S.tray.length || null)}
    </div>
    <section class="card box"><div class="box-h"><h3>${esc(t('recentShort'))}</h3><a class="link" href="#drive">${esc(t('openDrive'))}</a></div>
      <div class="rows">${recent.map(d => `<button class="row" data-row="${esc(d.id)}"><span class="th">${FILES.thumb(d) ? `<img alt="" loading="lazy" src="${esc(FILES.thumb(d))}">` : isLink(d) ? `<span class="li ${linkKind(d.url)[0]}" style="width:100%;height:100%;display:grid;place-items:center;color:#fff;font:700 10px var(--mono)">${linkKind(d.url)[1]}</span>` : ''}</span><span style="min-width:0"><b>${esc(d.title)}</b><small>${esc(pathOf('shared', d.folder).map(f => f.name).join(' › ') || t('drive'))}</small></span>${statusChip(d)}</button>`).join('')}</div></section>
  </div>`;
}
document.addEventListener('input', e => { if (e.target.id !== 'q2') return; const v = e.target.value; $('#q').value = v; $('#q').dispatchEvent(new Event('input')); });
document.addEventListener('click', e => { const r = e.target.closest('[data-row]'); if (r) openReader('shared', r.dataset.row, 1); });

/* ============ clubs ============ */
S.cf = (() => { try { return Object.assign({ campus: '', kind: '', cat: '', stat: 'มีสถานภาพ', ap: '', q: '' }, JSON.parse(LS.get('cf', '{}'))); } catch { return { campus: '', kind: '', cat: '', stat: 'มีสถานภาพ', q: '' }; } })();
const clubById = id => DATA.clubs.find(c => c.id === id);
const clubIdsFor = names => uniq(String(names || '').split(',').map(x => norm(x.trim())).filter(Boolean).map(n => (DATA.clubs.find(c => norm(c.name) === n) || DATA.clubs.find(c => norm(c.short) === n) || {}).id));
const initial = c => (c.short || c.name).replace(/^[\s\d]+/, '').slice(0, 1).toUpperCase();
const campLbl = c => t(c);
const signedChip = d => d.signed ? `<span class="chip ${d.signed === 'partial' ? 'st-draft' : 'st-active'}">${esc(d.signed === 'partial' ? t('signedPartial') : t('signedFull'))}</span>` : '';
const apOf = c => c.appointDoc && DATA.docs.find(d => d.id === c.appointDoc && !d.trashed);
function clubMatch(c, f, skip) {
  return (!f.ap || (f.ap === 'yes') === !!apOf(c)) && (skip === 'campus' || !f.campus || c.campus === f.campus) && (skip === 'kind' || !f.kind || c.kind === f.kind) && (skip === 'cat' || !f.cat || (c.cat || '') === f.cat) && (skip === 'stat' || !f.stat || c.status === f.stat) && (!f.q || norm([...clubWords(c), c.advisor].join(' ')).includes(norm(f.q)));
}
function clubCard(c) {
  const ap = apOf(c);
  return `<a class="card ccard" href="#c-${esc(c.id)}"><span class="av cat-${catCls(c.cat)}">${esc(initial(c))}</span><span style="min-width:0"><b>${esc(c.short || c.name)}</b>
    <span class="tags"><span class="tag">${esc(campLbl(c.campus))}</span><span class="tag ${c.kind === 'indep' ? 'acc' : ''}">${esc(c.kind === 'indep' ? t('kIndep') : t('kClub'))}</span>${c.status !== 'มีสถานภาพ' ? `<span class="tag ${statCls(c.status)}">${esc(statLbl(c.status))}</span>` : ''}${ap ? `<span class="tag ${ap.signed === 'partial' ? 'warn' : 'ok'}">${ic(ap.signed === 'partial' ? 'dots' : 'check').replace('class="i"', 'class="i" style="width:12px;height:12px;vertical-align:-2px"')} ${esc(ap.signed === 'partial' ? t('apWait') : t('appoint'))}</span>` : ''}</span>
    ${c.contact ? `<small class="sub">${esc(c.contact.ch)}</small>` : c.email ? `<small class="sub">${esc(c.email)}</small>` : ''}</span></a>`;
}
function pageClubs() {
  const f = S.cf, C = DATA.clubs;
  const chip = (key, val, label) => { const n = C.filter(c => clubMatch(c, { ...f, [key]: val }, null)).length; return `<button class="fchip" data-cf="${key}" data-v="${esc(val)}" aria-pressed="${f[key] === val}">${esc(label)}<span class="n num">${n}</span></button>`; };
  const L = C.filter(c => clubMatch(c, f)).sort((a, b) => CAMPUS.indexOf(a.campus) - CAMPUS.indexOf(b.campus) || (a.kind === b.kind ? 0 : a.kind === 'club' ? -1 : 1) || CATS.findIndex(x => x[0] === a.cat) - CATS.findIndex(x => x[0] === b.cat) || (a.short || '').localeCompare(b.short || '', 'th'));
  const cats = [...CATS.map(x => x[0]), ''].filter(x => x !== '' || C.some(c => !c.cat));
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('gClubs'))}</p><h1>${esc(t('clubsHero'))}</h1><p class="d">${esc(t('clubsP'))}</p></div></section>
    <section class="card box filters">
      <label class="cfind">${ic('search')}<input id="cfq" type="search" value="${esc(f.q)}" placeholder="${esc(t('findClub'))}" aria-label="${esc(t('findClub'))}"></label>
      <div class="chips"><span class="lb">${esc(t('fCampus'))}</span>${chip('campus', '', t('all'))}${CAMPUS.map(x => chip('campus', x, t(x))).join('')}</div>
      <div class="chips"><span class="lb">${esc(t('fKind'))}</span>${chip('kind', '', t('all'))}${chip('kind', 'club', t('kClub'))}${chip('kind', 'indep', t('kIndep'))}</div>
      <div class="chips"><span class="lb">${esc(t('fCat'))}</span>${chip('cat', '', t('all'))}${CATS.map(x => chip('cat', x[0], catLbl(x[0]))).join('')}</div>
      <div class="chips"><span class="lb">${esc(t('fStat'))}</span>${chip('stat', '', t('all'))}${STATS.map(x => chip('stat', x[0], statLbl(x[0]))).join('')}</div>
      <div class="chips"><span class="lb">${esc(t('fAp'))} 2569</span>${chip('ap', '', t('all'))}${chip('ap', 'yes', t('apHas'))}${chip('ap', 'no', t('apNo'))}</div>
    </section>
    <p class="sec-h">${esc(t('nClubs', { n: L.length }))}</p>
    ${L.length ? `<div class="cgrid">${L.map(clubCard).join('')}</div>` : empty('users', t('noClub'), '')}</div>`;
}
document.addEventListener('click', e => { const b = e.target.closest('[data-cf]'); if (!b) return; S.cf[b.dataset.cf] = b.dataset.v; LS.set('cf', JSON.stringify(S.cf)); route(); });
let cfT; document.addEventListener('input', e => { if (e.target.id !== 'cfq') return; clearTimeout(cfT); cfT = setTimeout(() => { S.cf.q = e.target.value; LS.set('cf', JSON.stringify(S.cf)); const pos = e.target.selectionStart; route(); const i = $('#cfq'); if (i) { i.focus(); try { i.setSelectionRange(pos, pos); } catch {} } }, 220); });

function ckRow(label, val, note) {
  if (val === true) return `<div class="ck y"><span class="d">${ic('check')}</span><span>${esc(label)}${note ? `<small>${esc(note)}</small>` : ''}</span></div>`;
  let cls = 'n', icon = 'x', sub = '';
  if (val === true || ['ผ่าน', 'ส่งแล้ว', 'ครบถ้วน', 'พิจารณาสำเร็จ', 'ลงเว็บไซต์แล้ว'].includes(val)) { cls = 'y'; icon = 'check'; }
  else if (['แก้ไข', 'อยู่ระหว่างการพิจารณา'].includes(val)) { cls = 'w'; icon = 'dots'; }
  if (typeof val === 'string' && val) sub = val; else if (!val && val !== false) sub = '–';
  if (val === '' || val == null || val === false) { cls = 'n'; icon = 'x'; sub = lang === 'en' ? 'Not yet' : 'ยังไม่มี'; }
  return `<div class="ck ${cls}"><span class="d">${ic(icon)}</span><span>${esc(label)}${sub ? `<small>${esc(sub)}</small>` : ''}</span></div>`;
}
function lbtn(u, label, sub) {
  const [cls, lb] = linkKind(u);
  return `<a class="lbtn" href="${esc(u)}" target="_blank" rel="noopener"><span class="li ${cls}">${lb}</span><span>${esc(label)}<small>${esc(sub || hostOf(u) || u.replace(/^(mailto|tel):/, ''))}</small></span>${ic('ext')}</a>`;
}
function contactLinks(ch) {
  const out = []; const s = String(ch || '');
  for (const m of s.matchAll(/[\w.+-]+@[\w-]+\.[\w.]+/g)) out.push(['mailto:' + m[0], m[0]]);
  const ig = s.match(/IG\s*[:\-]?\s*@?([A-Za-z0-9._]+)/i); if (ig) out.push(['https://www.instagram.com/' + ig[1].replace(/\.$/, '') + '/', '@' + ig[1].replace(/\.$/, '')]);
  return out;
}
function pageClub(id) {
  const c = clubById(id); if (!c) return `<div class="page"><a class="backlink" href="#clubs">${ic('chev')}${esc(t('backClubs'))}</a>${empty('users', t('noClub'), '')}</div>`;
  const ed = A.shared.edit();
  const ap = c.appointDoc && A.shared.files().find(d => d.id === c.appointDoc);
  const other = A.shared.files().filter(d => (d.clubIds || []).includes(c.id) && d.id !== c.appointDoc), rel = relClubs(c);
  const kv = (k, v) => v ? `<dt>${esc(k)}</dt><dd>${v}</dd>` : '';
  const checks = c.kind === 'club'
    ? [['ck_sent', c.sent], ['ck_report', c.report], ['ck_meeting', c.meeting], ['ck_will', c.will], ['ck_grade', c.grade], ['ck_budget', c.budget], ['ck_review', c.review], ['ck_web', c.web || '']]
    : [['ck_renew', c.renew], ['ck_report', c.report], ['ck_meeting', c.meeting], ['ck_budget', c.budget]];
  const links = c.links || [], extra = c.extra || [];
  const ctl = c.contact ? contactLinks(c.contact.ch) : []; if (c.email) ctl.push(['mailto:' + c.email, c.email]);
  const apHtml = ap ? `<div class="apcard"><button class="pv" data-row="${esc(ap.id)}" aria-label="${esc(t('openDoc'))}">${FILES.thumb(ap) ? `<img alt="" src="${esc(FILES.thumb(ap))}">` : ''}</button>
      <div style="display:grid;gap:10px;min-width:0"><dl class="kv">${kv(t('fSigned'), signedChip(ap))}${kv(t('annOn'), esc(ap.announced))}${kv(t('meetOn'), esc(ap.meet))}</dl>${ap.note ? `<p class="note-bar" style="font-size:13px">${esc(ap.note)}</p>` : ''}
        ${(ap.committee || []).length ? `<div><h5 style="font-size:13px;color:var(--faint);font-weight:500;margin:0 0 6px">${esc(t('committee'))}</h5><ol>${ap.committee.map(x => `<li>${esc(x)}</li>`).join('')}</ol></div>` : ''}
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn go sm" data-row="${esc(ap.id)}">${ic('doc')}${esc(t('openDoc'))}</button><button class="btn sm" data-apdl="${esc(ap.id)}">${ic('down')}${esc(t('dlOrig'))}</button></div></div></div>`
    : `<p style="color:var(--muted)">${esc(t('apNone'))}</p>`;
  return `<div class="page"><a class="backlink" href="#clubs">${ic('chev')}${esc(t('backClubs'))}</a>
    <section class="card prof-h"><span class="av cat-${catCls(c.cat)}">${esc(initial(c))}</span><div style="min-width:0"><h1>${esc(c.name)}</h1>
      <div class="tags"><span class="tag">${esc(campLbl(c.campus))}</span><span class="tag ${c.kind === 'indep' ? 'acc' : ''}">${esc(c.kind === 'indep' ? t('kIndep') : t('kClub'))}</span><span class="tag cat-${catCls(c.cat)}">${esc(catLbl(c.cat))}</span><span class="tag ${statCls(c.status)}">${esc(statLbl(c.status))}</span></div></div></section>
    <div class="prof"><div>
      <section class="card box"><div class="box-h"><h3>${esc(t('apTitle'))}</h3></div>${apHtml}</section>
      <section class="card box"><div class="box-h"><h3>${esc(t('otherDocs'))}</h3></div><p class="note-bar" style="font-size:13px">${esc(t('fromSheet'))}</p><div class="checks">${checks.map(([k, v, n]) => ckRow(t(k), v, n)).join('')}</div></section>
      ${other.length ? `<section class="card box"><div class="box-h"><h3>${esc(t('clubFiles'))}</h3></div><div class="docs">${other.map(d => docCard('shared', d)).join('')}</div></section>` : ''}
      ${rel.length ? `<section class="card box"><div class="box-h"><h3>${esc(t('relClubs'))}</h3></div><div class="cgrid">${rel.map(clubCard).join('')}</div></section>` : ''}
    </div><div>
      <section class="card box"><div class="box-h"><h3>${esc(t('tagsOf'))}</h3>${ed ? `<button class="link" data-ctags="${esc(c.id)}">${esc(t('editTags'))}</button>` : ''}</div><div class="chips">${clubTags(c).map(k => tagChip(k)).join('')}</div>
        ${(c.keywords || []).length ? `<p class="kw"><b>${esc(t('kwT'))}</b> ${esc(c.keywords.join(', '))}</p>` : ''}</section>
      <section class="card box"><div class="box-h"><h3>${esc(t('linksT'))}</h3>${ed ? `<button class="link" data-addclink="${esc(c.id)}">${esc(t('addLink'))}</button>` : ''}</div>
        <div class="ltree">${links.length || extra.length ? links.map(l => lbtn(l.url, l.label)).join('') + extra.map((l, i) => ed ? `<div style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px;align-items:center">${lbtn(l.url, l.label)}<button class="dots" data-rmclink="${esc(c.id)}|${i}" aria-label="${esc(t('delLink'))}" title="${esc(t('delLink'))}">${ic('x')}</button></div>` : lbtn(l.url, l.label)).join('') : `<p style="color:var(--muted)">${esc(t('noLinks'))}</p>`}</div></section>
      <section class="card box"><div class="box-h"><h3>${esc(t('infoClub'))}</h3></div><dl class="kv">
        ${kv(t('advisor'), esc(c.advisor))}${kv(t('founded'), esc(c.founded))}${c.membersNote ? kv(t('ck_meeting').replace(/.*/, lang === 'en' ? 'Member list' : 'รายชื่อสมาชิก'), esc(c.membersNote)) : ''}${kv(t('fCampus'), esc(campLbl(c.campus)))}
      </dl></section>
      ${c.contact || ctl.length ? `<section class="card box"><div class="box-h"><h3>${esc(t('contact'))}</h3></div>
        ${c.contact ? `<dl class="kv">${kv(lang === 'en' ? 'Name' : 'ชื่อ', esc(c.contact.rep))}${kv(lang === 'en' ? 'Role' : 'ตำแหน่ง', esc(c.contact.pos))}${kv(t('phone'), `<span style="display:inline-flex;gap:8px;align-items:center"><a href="tel:${esc(c.contact.phone)}" class="num">${esc(c.contact.phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3'))}</a><button class="link" data-copy="${esc(c.contact.phone)}">${esc(lang === 'en' ? 'Copy' : 'คัดลอก')}</button></span>`)}</dl>` : ''}
        <div class="ltree">${ctl.map(([u, l]) => lbtn(u, l, u.startsWith('mailto') ? 'Email' : 'Instagram')).join('')}</div></section>` : ''}
    </div></div></div>`;
}
document.addEventListener('click', e => {
  const d = e.target.closest('[data-apdl]'); if (d) { const doc = DATA.docs.find(x => x.id === d.dataset.apdl); if (doc) dlOrig('shared', doc); }
  const a = e.target.closest('[data-addclink]'); if (a) { const c = clubById(a.dataset.addclink); if (c) linkModal('shared', null, null, c); }
});

function pageDrive(k, fid) {
  const ed = A[k].edit();
  const path = pathOf(k, fid);
  const rootLbl = k === 'shared' ? t('drive') : t('mine');
  const crumbs = `<nav class="crumbs" aria-label="path"><a href="${A[k].root}" data-crumb="" data-k="${k}">${esc(rootLbl)}</a>${path.map(f => `<span class="sep">${ic('chev')}</span><a href="${A[k].pre}${esc(f.id)}" data-crumb="${esc(f.id)}" data-k="${k}">${esc(f.name)}</a>`).join('')}</nav>`;
  const F = sortItems(kidsF(k, fid), 'name'), D = sortItems(kidsD(k, fid));
  const newBtn = ed ? `<button class="btn go" data-new="${k}">${ic('plus')}${esc(t('newBtn'))}</button>` : '';
  const tools = `<div class="toolbar">${newBtn}<span class="sp"></span><span class="sel"><select data-sort aria-label="sort"><option value="name" ${S.sort === 'name' ? 'selected' : ''}>${esc(t('sortName'))}</option><option value="new" ${S.sort === 'new' ? 'selected' : ''}>${esc(t('sortNew'))}</option></select></span>${layoutSeg()}</div>`;
  let note = '';
  if (k === 'mine') note = `<div class="note-bar">${ic('user')}<span>${esc(MY.temp ? t('mineTemp') : t('mineNote'))}</span></div>`;
  const body = (F.length || D.length)
    ? `${F.length ? `<p class="sec-h">${esc(t('folders'))}</p><div class="ftiles">${F.map(f => folderTile(k, f)).join('')}</div>` : ''}
       ${D.length ? `<p class="sec-h">${esc(t('files'))}</p><div class="docs ${S.layout === 'list' ? 'list' : ''}">${D.map(d => docCard(k, d)).join('')}</div>` : ''}`
    : empty('folder', t('emptyFolder'), ed ? t('emptyFolderEdit') : t('emptyFolderView'));
  return `<div class="page" data-drop="${k}" data-folder="${esc(fid || '')}">${crumbs}${note}${tools}${body}${ed && (F.length || D.length) ? `<p style="color:var(--faint);font-size:13px;text-align:center">${esc(t('dropHint'))}</p>` : ''}</div>`;
}
document.addEventListener('change', e => { if (e.target.matches('[data-sort]')) { S.sort = e.target.value; LS.set('sort', S.sort); route(); } });
document.addEventListener('click', e => { const b = e.target.closest('[data-layout]'); if (b) { S.layout = b.dataset.layout; LS.set('layout', S.layout); route(); } });
document.addEventListener('click', e => {
  const nb = e.target.closest('[data-new]'); if (!nb) return;
  const k = nb.dataset.new, fid = curKindFolder()[1];
  openMenu(nb, [{ icon: 'fplus', label: t('newFolder'), run: () => folderModal(k, null, fid) }, { icon: 'link', label: t('newLink'), run: () => linkModal(k, null, fid) }, ...(k === 'mine' || API.canUpload() ? [{ icon: 'up', label: t('uploadHere'), run: () => uploadModal(k, fid) }] : [])]);
});

/* ============ how to use ============ */
function pageHelp() {
  LS.set('helpSeen', '1');
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('help'))}</p><h1>${esc(t('helpHero'))}</h1><p class="d">${esc(t('helpP'))}</p></div></section>
    <div class="helps">${t('helpItems').map(([icon, title, what, steps, go]) => `<section class="card box help">
      <h3><span class="ic blue">${ic(icon)}</span>${esc(title)}</h3><p class="d">${esc(what)}</p>
      <ol>${steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
      ${go ? `<a class="link" href="#${go}">${esc(t('helpGo'))} →</a>` : `<button class="link" data-openchat>${esc(t('chAsk'))} →</button>`}</section>`).join('')}</div></div>`;
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-openchat]')) $('#chatBtn').click();
  if (e.target.closest('[data-helpx]')) { LS.set('helpSeen', '1'); e.target.closest('.note-bar')?.remove(); }
});

/* ============ linked categories ============ */
function tagCounts(docs, clubs) {
  const n = new Map(), add = k => n.set(k, (n.get(k) || 0) + 1);
  docs.forEach(d => docTags(d).forEach(add)); clubs.forEach(c => clubTags(c).forEach(add));
  return n;
}
function tagGroups(n, sel, href) {
  return TAG_G.map(([g, lb]) => {
    const ks = [...n.keys()].filter(k => k.startsWith(g + ':') && !sel.includes(k)).sort((a, b) => g === 'year' ? b.localeCompare(a) : n.get(b) - n.get(a) || tagLbl(a).localeCompare(tagLbl(b), 'th'));
    return ks.length ? `<div class="chips"><span class="lb">${esc(t(lb))}</span>${ks.map(k => `<a class="fchip tchip" href="${href(k)}">${esc(tagLbl(k))}<span class="n num">${n.get(k)}</span></a>`).join('')}</div>` : '';
  }).join('');
}
// sel: the tags being looked at; an item must have all of them. Related tags narrow the selection further.
function pageTags(sel) {
  const docs = A.shared.files().filter(d => sel.every(k => docTags(d).includes(k)));
  const clubs = DATA.clubs.filter(c => sel.every(k => clubTags(c).includes(k)));
  const n = tagCounts(docs, clubs);
  const hero = `<section class="card hero"><div><p class="k">${esc(t('tagsNav'))}</p><h1>${esc(sel.length ? sel.map(tagLbl).join(' + ') : t('tagsHero'))}</h1><p class="d">${esc(sel.length ? t('nItems', { a: docs.length, b: clubs.length }) : t('tagsP'))}</p></div></section>`;
  if (!sel.length) return `<div class="page">${hero}<section class="card box filters">${tagGroups(n, [], k => tagHref([k]))}</section></div>`;
  const now = `<div class="chips"><span class="lb">${esc(t('tagSel'))}</span>${sel.map(k => `<a class="fchip tchip" aria-pressed="true" href="${sel.length > 1 ? tagHref(sel.filter(x => x !== k)) : '#tags'}" title="${esc(t('del'))}">${esc(tagLbl(k))}${ic('x')}</a>`).join('')}<a class="link" href="#tags">${esc(t('tagAll'))}</a></div>`;
  const rel = tagGroups(n, sel, k => tagHref([...sel, k]));
  return `<div class="page">${hero}<section class="card box filters">${now}${rel ? `<p class="sec-h" style="margin:4px 0 0">${esc(t('tagRel'))} · ${esc(t('tagRelP'))}</p>${rel}` : ''}</section>
    ${clubs.length ? `<p class="sec-h">${esc(t('clubsNav'))} · ${clubs.length}</p><div class="cgrid">${clubs.map(clubCard).join('')}</div>` : ''}
    ${docs.length ? `<p class="sec-h">${esc(t('drive'))} · ${docs.length}</p><div class="docs ${S.layout === 'list' ? 'list' : ''}">${sortItems(docs).map(d => docCard('shared', d)).join('')}</div>` : ''}
    ${docs.length || clubs.length ? '' : empty('tag', t('tagNone'), '')}</div>`;
}
// Ranks items by the tags they share with `keys`. A shared club or topic counts more than a shared campus or year.
const tagW = k => k.startsWith('club:') ? 4 : k.startsWith('topic:') ? 3 : k.startsWith('cat:') || k.startsWith('type:') ? 2 : 1;
function related(keys, list, keysOf, self, max) {
  return list.filter(x => x !== self).map(x => { const o = keysOf(x); return [x, keys.reduce((s, k) => s + (o.includes(k) ? tagW(k) : 0), 0)]; })
    .filter(([, s]) => s >= 3).sort((a, b) => b[1] - a[1]).slice(0, max).map(([x]) => x);
}
const docKeys = d => [...docTags(d), ...(d.clubIds || []).map(id => 'club:' + id)];
const relDocs = d => related(docKeys(d), A.shared.files().filter(x => !isLink(x)), docKeys, d, 6);
const relClubs = c => related(clubTags(c), DATA.clubs, clubTags, c, 6);
// Topic picker for the edit forms: preset topics as toggles plus free text. `auto` topics come from the name and aren't offered.
function tagPicker(chosen, auto = []) {
  const pre = TOPICS.map(x => x[0]), own = chosen.filter(x => !pre.includes(x));
  return `${auto.length ? `<p style="font-size:13px;color:var(--muted);margin:0 0 6px">${esc(t('tagsAuto'))} ${esc(auto.map(x => tagLbl('topic:' + x)).join(', '))}</p>` : ''}
    <div class="chips" id="tpk">${TOPICS.filter(x => !auto.includes(x[0])).map(x => `<button type="button" class="fchip" data-tp="${esc(x[0])}" aria-pressed="${chosen.includes(x[0])}">${esc(tagLbl('topic:' + x[0]))}</button>`).join('')}</div>
    <input id="tpo" aria-label="${esc(t('tagsMore'))}" placeholder="${esc(t('tagsMore'))}" value="${esc(own.join(', '))}" style="margin-top:8px">`;
}
const readPicker = o => uniq([...$$('#tpk [aria-pressed="true"]', o).map(b => b.dataset.tp), ...$('#tpo', o).value.split(',').map(s => s.trim())]);
document.addEventListener('click', e => { const b = e.target.closest('#tpk [data-tp]'); if (b) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); });
function clubTagModal(c) {
  const auto = autoTopics(c);
  const o = modal(t('editTags'), `<div class="fields"><div class="field full"><label>${esc(t('fTags'))}</label>${tagPicker(c.tags || [], auto)}</div>
    <div class="field full"><label for="ckw">${esc(t('kwT'))}</label><textarea id="ckw" rows="3" placeholder="${esc(t('kwPh'))}">${esc((c.keywords || []).join(', '))}</textarea><small style="color:var(--muted)">${esc(t('kwP'))}</small></div></div>`,
    `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn go" id="ctok">${esc(t('save'))}</button>`);
  $('#ctok', o).onclick = () => { c.tags = readPicker(o).filter(x => !auto.includes(x)); c.keywords = uniq($('#ckw', o).value.split(',').map(s => s.trim())); closeModal(); commit([['clubs', c]]); };
}
document.addEventListener('click', e => { const b = e.target.closest('[data-ctags]'); if (b) { const c = clubById(b.dataset.ctags); if (c) clubTagModal(c); } });

function pageStarred() {
  const D = A.shared.files().filter(d => S.stars.includes(d.id));
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('gMine'))}</p><h1>${esc(t('starHero'))}</h1><p class="d">${esc(t('starP'))}</p></div></section>
    ${D.length ? `<div class="toolbar"><span class="sp"></span>${layoutSeg()}</div><div class="docs ${S.layout === 'list' ? 'list' : ''}">${D.map(d => docCard('shared', d)).join('')}</div>` : empty('star', t('starEmpty'), t('starEmptyP'))}</div>`;
}
function matchDocs(k, list, query) {
  const toks = query.trim().split(/\s+/).map(norm).filter(Boolean); const out = [];
  for (const d of list) {
    const head = d._h ||= norm([d.title, d.year, d.note, d.fileName, d.announced, d.url, d.text, ...(d.committee || []), ...(d.clubs || []), ...(d.clubIds || []).flatMap(id => { const c = clubById(id); return c ? clubWords(c) : []; }), ...pathOf(k, d.folder).map(f => f.name), ...(k === 'shared' ? docTags(d).map(tagLbl) : [])].join(' '));
    const pages = d.pages || []; pages.forEach(p => p.n ||= norm((p.club || '') + ' ' + (p.text || '')));
    if (!toks.every(tk => head.includes(tk) || pages.some(p => p.n.includes(tk)))) continue;
    const pt = toks.filter(tk => !head.includes(tk));
    out.push({ d, hits: pt.length ? pages.filter(p => pt.every(tk => p.n.includes(tk))).map(p => p.p) : [] });
  }
  return out;
}
function pageSearch() {
  if (!S.q) return `<div class="page">${empty('search', t('typeToSearch'), '')}</div>`;
  const qn = norm(S.q);
  const fa = A.shared.folders().filter(f => norm(f.name).includes(qn)), fb = MY.folders.filter(f => norm(f.name).includes(qn));
  const toks = S.q.trim().split(/\s+/).map(norm).filter(Boolean);
  const cs = DATA.clubs.filter(c => { const h = norm([...clubWords(c), c.advisor, c.contact?.rep, c.contact?.ch, c.email, c.cat, ...clubTags(c).map(tagLbl)].join(' ')); return toks.every(tk => h.includes(tk)); });
  const a = matchDocs('shared', A.shared.files(), S.q), b = matchDocs('mine', MY.files, S.q);
  const total = a.length + b.length + fa.length + fb.length + cs.length;
  setTimeout(() => say(total ? t('sayFound', { n: total }) : t('sayNone'), total ? 'happy' : 'confused', 10), 0);
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('results'))}</p><h1>${esc(t('searchHero', { q: S.q }))}</h1><p class="d">${esc(t('searchSub', { a: a.length + fa.length, b: b.length + fb.length }))}</p></div></section>
    ${cs.length ? `<p class="sec-h">${esc(t('clubsFound'))} · ${cs.length}</p><div class="cgrid">${cs.slice(0, 12).map(clubCard).join('')}</div>${cs.length > 12 ? `<a class="link" href="#clubs" data-clubq="${esc(S.q)}">${esc(t('nClubs', { n: cs.length }))} →</a>` : ''}` : ''}
    ${fa.length || fb.length ? `<p class="sec-h">${esc(t('folders'))}</p><div class="ftiles">${fa.map(f => folderTile('shared', f)).join('')}${fb.map(f => folderTile('mine', f)).join('')}</div>` : ''}
    ${a.length ? `<p class="sec-h">${esc(t('drive'))}</p><div class="docs">${a.map(x => docCard('shared', x.d, x.hits)).join('')}</div>` : ''}
    ${b.length ? `<p class="sec-h">${esc(t('mine'))}</p><div class="docs">${b.map(x => docCard('mine', x.d, x.hits)).join('')}</div>` : ''}
    ${total ? '' : empty('search', t('notFound'), t('notFoundP'))}</div>`;
}
document.addEventListener('click', e => { const b = e.target.closest('[data-clubq]'); if (b) { S.cf = { campus: '', kind: '', cat: '', stat: '', ap: '', q: b.dataset.clubq }; LS.set('cf', JSON.stringify(S.cf)); } });
function pageTrash() {
  const D = DATA.docs.filter(d => d.trashed);
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('gStaff'))}</p><h1>${esc(t('trashHero'))}</h1><p class="d">${esc(t('trashP'))}</p></div></section>
    ${D.length ? `<div class="card tbl-wrap"><table class="tbl"><tbody>${D.map(d => `<tr><td style="font-weight:600">${esc(d.title)}</td><td class="num" style="color:var(--muted);white-space:nowrap">${fmtB(d.sizeBytes)}</td><td style="text-align:right;white-space:nowrap"><button class="btn sm" data-restore="${esc(d.id)}">${ic('restore')}${esc(t('restore'))}</button> <button class="btn sm bad" data-purge="${esc(d.id)}">${esc(t('purge'))}</button></td></tr>`).join('')}</tbody></table></div>` : empty('trash', t('trashEmpty'), '')}</div>`;
}
document.addEventListener('click', e => {
  const r = e.target.closest('[data-restore]'); if (r) { const d = DATA.docs.find(x => x.id === r.dataset.restore); if (d) { d.trashed = false; commit([['docs', d]]); } }
  const p = e.target.closest('[data-purge]'); if (p) { const d = DATA.docs.find(x => x.id === p.dataset.purge); if (d) confirmModal(t('purgeQ', { n: d.title }), async () => { await API.removeFile(d).catch(() => {}); DATA.docs = DATA.docs.filter(x => x !== d); commit([['docs', d, true]]); }); }
});
/* ============ team (admins only) ============ */
let TEAM = null;
const roleOf = m => m.admin ? 'admin' : m.role === 'editor' ? 'editor' : 'viewer';
const ROLE_T = { viewer: 'rViewer', editor: 'rEditor', admin: 'rAdmin' };
async function loadTeam() {
  try { TEAM = (await API.listTeam()).sort((a, b) => a.id.localeCompare(b.id)); } catch (e) { console.error(e); TEAM = []; toast(t('tLoadErr')); }
  if (cur() === 'team') route(); else renderNav();
}
function pageTeam() {
  const me = API.me(), roleSel = (r, attr) => `<span class="sel"><select ${attr}>${Object.keys(ROLE_T).map(k => `<option value="${k}"${k === r ? ' selected' : ''}>${esc(t(ROLE_T[k]))}</option>`).join('')}</select></span>`;
  const rows = (TEAM || []).map(m => `<tr><td style="font-weight:600">${esc(m.id)}${m.id === me ? ` <span class="chip">${esc(t('teamYou'))}</span>` : ''}</td>
    <td class="num" style="color:var(--muted);white-space:nowrap">${m.lastSeen ? `${esc(t('teamSeen'))} ${fmtD(m.lastSeen)}` : esc(t('teamNever'))}</td>
    <td style="text-align:right;white-space:nowrap">${m.id === me ? esc(t(ROLE_T[roleOf(m)])) : `${roleSel(roleOf(m), `data-trole="${esc(m.id)}" aria-label="${esc(m.id)}"`)} <button class="btn sm bad" data-tdel="${esc(m.id)}">${ic('trash')}${esc(t('del'))}</button>`}</td></tr>`).join('');
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('gStaff'))}</p><h1>${esc(t('teamHero'))}</h1><p class="d">${esc(t('teamP'))}</p></div></section>
    <section class="card box"><form class="toolbar" id="teamAdd"><div class="field" style="flex:1;min-width:220px"><label for="tEmail">${esc(t('teamEmail'))}</label><input id="tEmail" type="email" autocomplete="off" placeholder="name@gmail.com" required></div>
      <div class="field"><label for="tRole">${esc(t('teamRole'))}</label>${roleSel('viewer', 'id="tRole"')}</div>
      <button class="btn go" style="align-self:end">${ic('plus')}${esc(t('teamAdd'))}</button></form>
      <p class="d">${esc(t('teamRoles'))}</p></section>
    ${TEAM ? `<div class="card tbl-wrap"><table class="tbl"><tbody>${rows}</tbody></table></div>` : `<div class="card box"><p class="d">${esc(t('teamLoading'))}</p></div>`}</div>`;
}
// Saves one person's access and updates the list; admin always goes with role 'editor' (see firestore.rules).
async function saveMember(email, r) {
  try {
    await API.putMember(email, r === 'viewer' ? 'viewer' : 'editor', r === 'admin');
    toast(t('tTeamSaved')); await loadTeam();
  } catch (e) { console.error(e); toast(t('tTeamErr')); route(); }
}
document.addEventListener('submit', e => {
  if (e.target.id !== 'teamAdd') return;
  e.preventDefault();
  const email = $('#tEmail').value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast(t('tTeamBad'));
  if ((TEAM || []).some(m => m.id === email)) return toast(t('tTeamDup'));
  saveMember(email, $('#tRole').value);
});
document.addEventListener('change', e => { const s = e.target.closest('[data-trole]'); if (s) saveMember(s.dataset.trole, s.value); });
document.addEventListener('click', e => {
  const d = e.target.closest('[data-tdel]'); if (!d) return;
  const email = d.dataset.tdel;
  confirmModal(t('teamDelQ', { n: email }), async () => {
    try { await API.removeMember(email); await loadTeam(); } catch (e) { console.error(e); toast(t('tTeamErr')); }
  });
});
function pageLook() {
  const pal = LS.get('pal', 'tusu'), mode = LS.get('mode', 'system'), as = LS.get('mascot', 'off');
  const P = [['tusu', 'palTusu', ['#006371', '#2BABC2', '#E8F3F5']], ['blue', 'palBlue', ['#1479F0', '#7DB8FF', '#0C0D10']], ['tu', 'palTu', ['#B8141F', '#F5C443', '#FFFFFF']], ['mint', 'palMint', ['#0B8F7E', '#8CCBF5', '#FFFFFF']], ['pinksky', 'palPink', ['#F383B2', '#93C4F7', '#FFFFFF']]];
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('gTools'))}</p><h1>${esc(t('lookHero'))}</h1><p class="d">${esc(t('lookP'))}</p></div></section>
    <section class="card box"><h3 style="font-size:18px">${esc(t('theme'))}</h3><div class="opts">${P.map(([k, l, c]) => `<button class="opt" data-pal="${k}" aria-pressed="${pal === k}"><span class="sw">${c.map(x => `<i style="background:${x}"></i>`).join('')}</span>${esc(t(l))}</button>`).join('')}</div></section>
    <section class="card box"><h3 style="font-size:18px">${esc(t('font'))}</h3><div class="opts">${FONTS.map(([k, l, fam]) => { loadFont(fam); return `<button class="opt" data-setfont="${k}" aria-pressed="${(LS.get('font', 'tusu')) === k}"><span class="fsample" style="font-family:'${fam}'">อมธ. คลังเอกสาร</span>${esc(t(l))}</button>`; }).join('')}</div></section>
    <section class="card box"><h3 style="font-size:18px">${esc(t('mode'))}</h3><div class="seg" style="justify-self:start">${['light', 'dark', 'system'].map(m => `<button data-setmode="${m}" aria-pressed="${mode === m}">${ic(m === 'light' ? 'sun' : m === 'dark' ? 'moon' : 'gear')}${esc(t(m))}</button>`).join('')}</div></section>
    <section class="card box"><h3 style="font-size:18px">${esc(t('lang'))}</h3><div class="seg" style="justify-self:start"><button data-setlang="th" aria-pressed="${lang === 'th'}">ไทย</button><button data-setlang="en" aria-pressed="${lang === 'en'}">English</button></div></section>
    <section class="card box"><h3 style="font-size:18px">${esc(t('mascotSet'))}</h3><div class="seg" style="justify-self:start"><button data-assist="on" aria-pressed="${as === 'on'}">${esc(t('mascotOn'))}</button><button data-assist="off" aria-pressed="${as !== 'on'}">${esc(t('mascotOff'))}</button></div>
      <p class="d">${esc(t('mascotPhotoP'))}</p>
      <div class="mgal">${[...MASCOTS, ...TEAM_M].map(p => { const sel = mascotNow().id === p.id, label = p.name ? t(p.name) : t('mBy', { n: p.by || '' }); return `<div class="mg"><button class="mgb" data-mpick="${esc(p.id)}" aria-pressed="${sel}" aria-label="${esc(label)}" title="${esc(label)}"><span class="mthumb${p.strip ? ' strip' : ''}" style="background-image:url(&quot;${p.strip || p.url}&quot;)"></span>${sel ? `<i class="mok">${ic('check')}</i>` : ''}</button>${p.name ? `<small class="mcap">${esc(t(p.name))}</small>` : ''}${!p.strip && canDelMascot(p) ? `<button class="mgx" data-mdel="${esc(p.id)}" aria-label="${esc(t('del'))}" title="${esc(t('del'))}">${ic('x')}</button>` : ''}</div>`; }).join('')}
        ${TEAM_M.length < MASCOT_MAX ? `<label class="mgadd" title="${esc(t('mascotPhoto'))}">${ic('plus')}<span>${esc(t('mascotPhoto'))}</span><input type="file" id="mPhotoIn" accept="image/png,image/jpeg,image/webp,image/gif" class="sr"></label>` : ''}</div></section></div>`;
}
document.addEventListener('click', e => {
  const p = e.target.closest('[data-pal]'); if (p) { LS.set('pal', p.dataset.pal); applyLook(); refreshLook(); if (cur() === 'look') route(); }
  const fo = e.target.closest('[data-setfont]'); if (fo) { LS.set('font', fo.dataset.setfont); applyLook(); route(); }
  const m = e.target.closest('[data-setmode]'); if (m) { LS.set('mode', m.dataset.setmode); applyLook(); refreshLook(); if (cur() === 'look') route(); }
  const ms = e.target.closest('[data-mascot]'); if (ms) { LS.set('mascot', mascotOn() ? 'off' : 'on'); refreshLook(); route(); if (mascotOn()) setTimeout(() => say(t('sayHi'), 'wave', 10), 50); }
  const l = e.target.closest('[data-setlang]'); if (l) { lang = l.dataset.setlang; LS.set('lang', lang); route(); }
  const a = e.target.closest('[data-assist]'); if (a) { LS.set('mascot', a.dataset.assist); route(); }
  const mp = e.target.closest('[data-mpick]'); if (mp) { LS.set('mascotPick', mp.dataset.mpick); LS.set('mascot', 'on'); applyLook(); route(); say(t('sayHi'), 'happy', 10); }
  const md = e.target.closest('[data-mdel]'); if (md) confirmModal(t('mDelQ'), async () => { try { await removeMascotPhoto(md.dataset.mdel); } catch (err) { console.error(err); toast(t('failed')); } applyLook(); route(); });
});
document.addEventListener('change', async e => {
  if (e.target.id !== 'mPhotoIn' || !e.target.files[0]) return;
  try { await addMascotPhoto(e.target.files[0]); applyLook(); route(); toast(t('tPhotoSaved')); say(t('sayHi'), 'happy', 10); }
  catch (err) { console.error(err); toast(err.code === 'full' ? t('tPhotoFull') : t('tPhotoBad')); }
});

/* ============ tools ============ */
function trayItem(x) { if (x.src === 'doc') return DATA.docs.find(d => d.id === x.id && !d.trashed); if (x.src === 'mine') return MY.files.find(d => d.id === x.id); return S.local.get(x.id); }
function pageTools() {
  S.tray = S.tray.filter(x => trayItem(x)); saveTray();
  const items = S.tray.map(x => ({ x, d: trayItem(x) }));
  const srcL = x => x.src === 'doc' ? t('drive') : x.src === 'mine' ? t('mine') : t('local');
  const thumb = (x, d) => x.src === 'doc' && FILES.thumb(d) ? `<img alt="" src="${esc(FILES.thumb(d))}">` : x.src === 'mine' && d.thumb ? `<img alt="" src="${esc(myThumb(d))}">` : ((d.mime || '').includes('pdf') ? 'PDF' : 'IMG');
  const dis = items.length ? '' : 'disabled';
  return `<div class="page"><section class="card hero"><div><p class="k">${esc(t('gTools'))}</p><h1>${esc(t('toolsHero'))}</h1><p class="d">${esc(t('toolsP'))}</p></div></section>
    <div class="tools"><section class="card box"><div class="box-h"><h3>${esc(t('tray'))} <span class="num" style="color:var(--faint)">${items.length || ''}</span></h3>${items.length ? `<button class="link" data-tclear>${esc(t('clearAll'))}</button>` : ''}</div>
      ${items.length ? `<div class="tray">${items.map(({ x, d }, i) => `<div class="ti"><span class="n num">${i + 1}</span><span class="th">${thumb(x, d)}</span><span style="min-width:0"><b>${esc(d.title)}</b><small>${esc(srcL(x))} · ${d.pageCount || 1} ${esc(t('pages'))} · ${fmtB(d.sizeBytes)}</small></span><span class="acts"><button data-tmv="${i}" data-dir="-1" aria-label="up" ${i === 0 ? 'disabled' : ''}>${ic('arrow-up')}</button><button data-tmv="${i}" data-dir="1" aria-label="down" ${i === items.length - 1 ? 'disabled' : ''}>${ic('arrow-dn')}</button><button data-trm="${i}" aria-label="${esc(t('del'))}">${ic('x')}</button></span></div>`).join('')}</div>`
        : `<div style="text-align:center;color:var(--muted);padding:22px 8px"><b style="color:var(--fg);display:block;font-size:16px">${esc(t('trayEmpty'))}</b>${esc(t('trayEmptyP'))}</div>`}
      <label class="btn" style="justify-self:start">${ic('plus')}${esc(t('fromPc'))}<input type="file" id="pcIn" multiple accept=".pdf,.png,.jpg,.jpeg,.webp" class="sr"></label></section>
    <div style="display:grid;gap:14px">
      <div class="card tool-card"><h4><span class="ic blue">${ic('layers')}</span>${esc(t('tMerge'))}</h4><p>${esc(t('tMergeP'))}</p><div class="btns"><button class="btn go" data-tool="merge" ${dis}>${esc(t('doMerge'))}</button></div></div>
      <div class="card tool-card"><h4><span class="ic green">${ic('image')}</span>${esc(t('tImg'))}</h4><p>${esc(t('tImgP'))}</p><div class="btns"><button class="btn" data-tool="png" ${dis}>${esc(t('toPng'))}</button><button class="btn" data-tool="jpg" ${dis}>${esc(t('toJpg'))}</button></div></div>
      <div class="card tool-card"><h4><span class="ic amber">${ic('zip')}</span>${esc(t('tZip'))}</h4><p>${esc(t('tZipP'))}</p><div class="btns"><button class="btn" data-tool="zip" ${dis}>${esc(t('doZip'))}</button></div></div>
      <div class="card tool-card"><h4><span class="ic green">${ic('print')}</span>${esc(t('tPrint'))}</h4><p>${esc(t('tPrintP'))}</p><div class="btns"><button class="btn" data-tool="print" ${dis}>${esc(t('printAll'))}</button></div></div>
      ${S.staff ? `<div class="card tool-card"><h4><span class="ic blue">${ic('down')}</span>${esc(t('tBak'))}</h4><p>${esc(t('tBakP'))}</p><p style="color:var(--bad)">${esc(t('tBakWarn'))}</p><div class="btns"><button class="btn" data-tool="backup">${esc(t('doBak'))}</button></div></div>` : ''}
    </div></div></div>`;
}
document.addEventListener('click', e => {
  const mv = e.target.closest('[data-tmv]'); if (mv) { const i = +mv.dataset.tmv, j = i + +mv.dataset.dir; [S.tray[i], S.tray[j]] = [S.tray[j], S.tray[i]]; saveTray(); return route(); }
  const rm = e.target.closest('[data-trm]'); if (rm) { S.tray.splice(+rm.dataset.trm, 1); saveTray(); return route(); }
  if (e.target.closest('[data-tclear]')) { S.tray = []; saveTray(); return route(); }
  const tl = e.target.closest('[data-tool]'); if (tl) { const list = S.tray.map(trayItem).filter(Boolean); ({ merge: () => mergeFiles(list), zip: () => zipFiles(list), png: () => toImages(list, 'png'), jpg: () => toImages(list, 'jpg'), print: () => printFiles(list), backup: backupAll })[tl.dataset.tool](); }
});
document.addEventListener('change', async e => {
  if (e.target.id !== 'pcIn') return;
  for (const file of e.target.files) {
    const mime = mimeOf(file); if (!mime) { toast(t('tType')); continue; }
    const id = 'L' + rid(); let pageCount = 1;
    if (mime === 'application/pdf') { try { pageCount = (await pdfjsLib.getDocument({ data: new Uint8Array(await file.arrayBuffer()), isEvalSupported: false }).promise).numPages; } catch {} }
    S.local.set(id, { id, title: file.name.replace(/\.[^.]+$/, ''), fileName: file.name, mime, sizeBytes: file.size, pageCount, blob: file });
    S.tray.push({ src: 'local', id });
  }
  route();
});
function toggleTray(src, id) { const i = S.tray.findIndex(x => x.src === src && x.id === id); const it = trayItem({ src, id }); if (i < 0 && it && (isLink(it) || isOffice(it))) { toast(t('officeOnly')); return; } if (i >= 0) S.tray.splice(i, 1); else { S.tray.push({ src, id }); toast(t('tAdded')); mood('hold', 6); } saveTray(); route(); if (R.d) renderSide(); }
function toggleStar(id) { const i = S.stars.indexOf(id); i >= 0 ? S.stars.splice(i, 1) : S.stars.push(id); saveStars(); route(); if (R.d) renderSide(); }

/* ============ card interactions + menus ============ */
document.addEventListener('click', e => {
  const card = e.target.closest('.doc'); if (!card) return;
  const k = card.dataset.k, id = card.dataset.id, src = k === 'shared' ? 'doc' : 'mine';
  if (e.target.closest('[data-star]')) return toggleStar(id);
  if (e.target.closest('[data-tray]')) return toggleTray(src, id);
  if (e.target.closest('[data-dots]')) return fileMenu(e.target.closest('[data-dots]'), k, id);
  const o = e.target.closest('[data-open]'); if (o) openReader(k, id, +o.dataset.open || 1);
});
document.addEventListener('click', e => { const t_ = e.target.closest('.ftile [data-dots]'); if (t_) { const tile = t_.closest('.ftile'); folderMenu(t_, tile.dataset.k, tile.dataset.id); } });
function closeMenu() { $('.pmenu')?.remove(); }
function openMenu(anchor, items) {
  closeMenu();
  const m = document.createElement('div'); m.className = 'pmenu'; m.setAttribute('role', 'menu');
  m.innerHTML = items.map((it, i) => it === '-' ? '<hr>' : `<button role="menuitem" data-mi="${i}" class="${it.bad ? 'bad' : ''}">${ic(it.icon)}${esc(it.label)}</button>`).join('');
  document.body.append(m);
  const r = anchor.getBoundingClientRect(), mw = m.offsetWidth, mh = m.offsetHeight;
  m.style.left = Math.max(8, Math.min(innerWidth - mw - 8, r.right - mw)) + 'px';
  m.style.top = (r.bottom + mh + 8 > innerHeight ? Math.max(8, r.top - mh - 6) : r.bottom + 6) + 'px';
  m.onclick = ev => { const b = ev.target.closest('[data-mi]'); if (!b) return; closeMenu(); items[+b.dataset.mi].run(); };
  setTimeout(() => m.querySelector('button')?.focus(), 0);
}
document.addEventListener('click', e => { if ($('.pmenu') && !e.target.closest('.pmenu') && !e.target.closest('[data-dots],[data-new]')) closeMenu(); }, true);
window.addEventListener('scroll', closeMenu, true);
function fileMenu(anchor, k, id) {
  const d = A[k].files().find(x => x.id === id); if (!d) return; const ed = A[k].edit(), src = k === 'shared' ? 'doc' : 'mine';
  if (isLink(d)) {
    const items = [{ icon: 'ext', label: t('openLink'), run: () => openTab(d.url) }, { icon: 'link', label: t('copyLink'), run: () => copyText(d.url) }];
    if (k === 'shared') items.push({ icon: 'star', label: S.stars.includes(id) ? t('unstar') : t('star'), run: () => toggleStar(id) });
    if (ed) items.push('-', { icon: 'edit', label: t('editInfo'), run: () => linkModal(k, d) }, { icon: 'move', label: t('moveTo'), run: () => moveModal(k, 'file', id) },
      k === 'shared' ? { icon: 'trash', label: t('toTrash'), bad: true, run: () => { d.trashed = true; commit([['docs', d]]); toast(t('tTrashed')); } } : { icon: 'trash', label: t('del'), bad: true, run: () => confirmModal(t('delFileQ', { n: d.title }), () => deleteMine(d)) });
    return openMenu(anchor, items);
  }
  const items = [{ icon: 'doc', label: t('open'), run: () => openReader(k, id, 1) }, { icon: 'down', label: t('dlOrig'), run: () => dlOrig(k, d) }, { icon: 'print', label: t('print'), run: () => printFiles([d]) }];
  if (k === 'shared' && !d.wrap) items.push({ icon: 'ext', label: t('openTab'), run: () => openTab(FILES.url(d)) });
  items.push({ icon: inTray(src, id) ? 'check' : 'plus', label: inTray(src, id) ? t('inTray') : t('addTray'), run: () => toggleTray(src, id) });
  if (k === 'shared') items.push({ icon: 'star', label: S.stars.includes(id) ? t('unstar') : t('star'), run: () => toggleStar(id) });
  if (ed) {
    items.push('-');
    items.push(k === 'shared' ? { icon: 'edit', label: t('editInfo'), run: () => editModal(d) } : { icon: 'edit', label: t('renameFile'), run: () => renameMine(d) });
    items.push({ icon: 'move', label: t('moveTo'), run: () => moveModal(k, 'file', id) });
    items.push(k === 'shared' ? { icon: 'trash', label: t('toTrash'), bad: true, run: () => { d.trashed = true; commit([['docs', d]]); toast(t('tTrashed')); } } : { icon: 'trash', label: t('del'), bad: true, run: () => confirmModal(t('delFileQ', { n: d.title }), () => deleteMine(d)) });
  }
  openMenu(anchor, items);
}
function folderMenu(anchor, k, id) {
  const f = folderOf(k, id); if (!f) return;
  const items = [{ icon: 'folder', label: t('open'), run: () => location.hash = A[k].pre.slice(1) + id }];
  if (A[k].edit()) items.push('-', { icon: 'edit', label: t('rename'), run: () => folderModal(k, f) }, { icon: 'move', label: t('moveTo'), run: () => moveModal(k, 'folder', id) }, { icon: 'trash', label: t('delFolder'), bad: true, run: () => confirmModal(t('delFolderQ', { n: f.name }), () => deleteFolder(k, f)) });
  openMenu(anchor, items);
}

/* ============ mutations ============ */
// fn returns a list of [store, obj, isDelete] for personal storage; shared data is saved by commit()
async function mutate(k, fn) {
  const changed = fn() || []; for (const [, o] of changed) if (o) delete o._h;
  if (k === 'shared') { commit(changed); return; }
  for (const [store, obj, del] of changed) del ? await myDel(store, obj.id) : await myPut(store, obj);
  route();
}
function moveItem(k, type, id, target) {
  target = target || null;
  if (type === 'folder') {
    if (descendants(k, id).has(target)) return;
    const f = folderOf(k, id); if (!f || (f.parent || null) === target) return;
    mutate(k, () => { f.parent = target; return [['folders', f]]; }); say(t('sayMoved'), 'happy', 6); toast(t('tMoved'));
  } else {
    const d = A[k].files().find(x => x.id === id); if (!d || (d.folder || null) === target) return;
    mutate(k, () => { d.folder = target; if (k === 'shared') d.updatedAt = new Date().toISOString(); return [['files', d]]; }); say(t('sayMoved'), 'happy', 6); toast(t('tMoved'));
  }
}
function deleteFolder(k, f) {
  const up = f.parent || null;
  mutate(k, () => {
    const ch = [];
    for (const x of A[k].folders()) if (x.parent === f.id) { x.parent = up; ch.push(['folders', x]); }
    for (const d of A[k].files()) if (d.folder === f.id) { d.folder = up; ch.push(['files', d]); }
    if (k === 'shared') { for (const d of DATA.docs) if (d.folder === f.id) d.folder = up; DATA.folders = DATA.folders.filter(x => x !== f); }
    else MY.folders = MY.folders.filter(x => x !== f);
    ch.push(['folders', f, true]); return ch;
  });
  if (cur() === A[k].pre.slice(1) + f.id) location.hash = up ? A[k].pre.slice(1) + up : A[k].root.slice(1);
}
async function deleteMine(d) {
  MY.files = MY.files.filter(x => x !== d); await myDel('files', d.id);
  S.tray = S.tray.filter(x => !(x.src === 'mine' && x.id === d.id)); saveTray();
  if (R.d === d) closeReader(); route();
}

/* ============ modals ============ */
function closeModal() { $$('.ov.m').forEach(o => o.remove()); if (!R.d) document.body.style.overflow = ''; }
function modal(title, body, foot) {
  const o = document.createElement('div'); o.className = 'ov m'; o.style.zIndex = 60;
  o.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><header><h2>${esc(title)}</h2><button class="pill round" data-x aria-label="${esc(t('close'))}">${ic('x')}</button></header><div class="mb">${body}</div><footer>${foot}</footer></div>`;
  o.addEventListener('click', e => { if (e.target === o || e.target.closest('[data-x]') || e.target.closest('[data-cancel]')) closeModal(); });
  document.body.append(o); document.body.style.overflow = 'hidden'; return o;
}
function confirmModal(text, yes) {
  const o = modal(t('del'), `<p>${esc(text)}</p>`, `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn bad" id="cy">${esc(t('yes'))}</button>`);
  $('#cy', o).onclick = () => { closeModal(); yes(); };
}
function folderModal(k, f, parent) {
  const o = modal(f ? t('rename') : t('newFolder'), `<div class="field"><label for="fn">${esc(t('folderName'))}</label><input id="fn" maxlength="80" value="${esc(f?.name || '')}"></div><div class="field"><label>${esc(t('color'))}</label><div class="colors" id="fc">${Object.entries(COLORS).map(([c, v]) => `<button data-c="${c}" aria-pressed="${(f?.color || 'blue') === c}" style="background:${v}" aria-label="${c}"></button>`).join('')}${(() => { const own = !COLORS[f?.color] && /^#/.test(f?.color || ''); return `<label class="cpick" title="${esc(t('customColor'))}" aria-pressed="${own}" style="${own ? `background:${f.color}` : ''}"><input type="color" id="fcc" value="${own ? f.color : '#3B82F6'}" aria-label="${esc(t('customColor'))}"></label>`; })()}</div></div>`,
    `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn go" id="fok">${esc(f ? t('save') : t('create'))}</button>`);
  let color = f?.color || 'blue';
  const pick = $('.cpick', o);
  $('#fc', o).onclick = e => { const b = e.target.closest('[data-c]'); if (!b) return; color = b.dataset.c; $$('#fc button', o).forEach(x => x.setAttribute('aria-pressed', String(x === b))); pick.setAttribute('aria-pressed', 'false'); pick.style.background = ''; };
  $('#fcc', o).oninput = e => { color = e.target.value; $$('#fc button', o).forEach(x => x.setAttribute('aria-pressed', 'false')); pick.setAttribute('aria-pressed', 'true'); pick.style.background = color; };
  setTimeout(() => $('#fn', o).focus(), 30);
  const ok = () => {
    const name = $('#fn', o).value.trim(); if (!name) return; closeModal();
    if (f) mutate(k, () => { f.name = name; f.color = color; return [['folders', f]]; });
    else { const nf = { id: (k === 'shared' ? 'f-' : 'm') + rid(), name, parent: parent || null, color, createdAt: new Date().toISOString() }; mutate(k, () => { A[k].folders().push(nf); return [['folders', nf]]; }); }
  };
  $('#fok', o).onclick = ok; $('#fn', o).onkeydown = e => { if (e.key === 'Enter') ok(); };
}
function treeOptions(k, exclude, selected) {
  const rows = [];
  const walk = (pid, depth) => { for (const f of sortItems(kidsF(k, pid), 'name')) { const dis = exclude.has(f.id); rows.push(`<label class="${dis ? 'dis' : ''}" style="padding-left:${10 + depth * 20}px"><input type="radio" name="tgt" value="${esc(f.id)}" ${dis ? 'disabled' : ''} ${selected === f.id ? 'checked' : ''}><i class="dot" style="background:${colorOf(f.color)}"></i>${esc(f.name)}</label>`); if (!dis) walk(f.id, depth + 1); } };
  walk(null, 0);
  return `<div class="tree"><label><input type="radio" name="tgt" value="" ${!selected ? 'checked' : ''}>${ic(k === 'shared' ? 'drive' : 'user')}${esc(k === 'shared' ? t('drive') : t('mine'))} · ${esc(t('root'))}</label>${rows.join('')}</div>`;
}
function moveModal(k, type, id) {
  const ex = type === 'folder' ? descendants(k, id) : new Set();
  const curParent = type === 'folder' ? folderOf(k, id)?.parent : A[k].files().find(x => x.id === id)?.folder;
  const o = modal(t('moveTitle'), treeOptions(k, ex, curParent || ''), `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn go" id="mok">${esc(t('moveHere'))}</button>`);
  $('#mok', o).onclick = () => { const v = $('input[name="tgt"]:checked', o)?.value ?? ''; closeModal(); moveItem(k, type, id, v || null); };
}
// Club picker: type to search, pick from the list, picked clubs show as chips. The hidden input keeps the
// comma-separated names the forms already read (see clubIdsFor).
const cpkChip = n => `<button type="button" class="fchip" aria-pressed="true" data-cpkx="${esc(n)}" title="${esc(t('del'))}">${esc(short(n))}${ic('x')}</button>`;
const clubPicker = (id, names) => `<div class="cpk"><input type="hidden" id="${id}" value="${esc(names.join(', '))}"><div class="chips cpk-c">${names.map(cpkChip).join('')}</div>
  <input class="cpk-q" list="${id}L" autocomplete="off" placeholder="${esc(t('pickClub'))}" aria-label="${esc(t('pickClub'))}"><datalist id="${id}L">${DATA.clubs.map(c => `<option value="${esc(c.name)}">${esc(t(c.campus))}</option>`).join('')}</datalist></div>`;
const cpkNames = box => box.querySelector('input[type=hidden]').value.split(',').map(s => s.trim()).filter(Boolean);
function cpkSet(box, names) { box.querySelector('input[type=hidden]').value = names.join(', '); box.querySelector('.cpk-c').innerHTML = names.map(cpkChip).join(''); }
document.addEventListener('input', e => {
  const q = e.target.closest('.cpk-q'); if (!q) return;
  const c = DATA.clubs.find(x => x.name === q.value.trim()); if (!c) return;
  const box = q.closest('.cpk'); cpkSet(box, uniq([...cpkNames(box), c.name])); q.value = '';
});
document.addEventListener('click', e => { const b = e.target.closest('[data-cpkx]'); if (!b) return; const box = b.closest('.cpk'); cpkSet(box, cpkNames(box).filter(n => n !== b.dataset.cpkx)); });
const typeInput = (id, v) => `<input id="${id}" list="${id}L" value="${esc(v || '')}"><datalist id="${id}L">${DOC_TYPES.map(x => `<option value="${esc(x[0])}">`).join('')}</datalist>`;
function editModal(d) {
  const o = modal(t('editInfo'), `<div class="fields">
    <div class="field full"><label for="eti">${esc(t('fTitle'))}</label><input id="eti" value="${esc(d.title)}"></div>
    <div class="field"><label for="est">${esc(t('fStatus'))}</label><select id="est">${STATUS.map(s => `<option value="${s}" ${(d.status || 'active') === s ? 'selected' : ''}>${esc(t(s))}</option>`).join('')}</select></div>
    <div class="field"><label for="eyr">${esc(t('fYear'))}</label><input id="eyr" inputmode="numeric" value="${esc(d.year || '')}"></div>
    <div class="field"><label for="ety">${esc(t('fType'))}</label>${typeInput('ety', d.type)}</div>
    <div class="field"><label for="ean">${esc(t('fAnn'))}</label><input id="ean" value="${esc(d.announced || '')}"></div>
    <div class="field full"><label>${esc(t('fClubs'))}</label>${clubPicker('ecl', d.clubs || [])}</div>
    <div class="field full"><label>${esc(t('fTags'))}</label>${tagPicker(d.tags || [])}</div>
    <div class="field full"><label for="eno">${esc(t('fNote'))}</label><textarea id="eno">${esc(d.note || '')}</textarea></div></div>`,
    `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn go" id="eok">${esc(t('save'))}</button>`);
  const cl0 = (d.clubs || []).join(', ');
  $('#eok', o).onclick = () => {
    const v = id => $('#' + id, o).value.trim();
    Object.assign(d, { title: v('eti') || t('untitled'), status: v('est'), year: parseInt(v('eyr'), 10) || null, type: v('ety'), announced: v('ean'), clubs: uniq(v('ecl').split(',').map(s => s.trim())), tags: readPicker(o), note: v('eno'), updatedAt: new Date().toISOString() });
    if (v('ecl') !== cl0) d.clubIds = clubIdsFor(v('ecl'));
    closeModal(); commit([['docs', d]]);
  };
}
async function copyText(txt) {
  try { await navigator.clipboard.writeText(txt); toast(t('tCopied')); }
  catch { const i = document.createElement('input'); i.value = txt; document.body.append(i); i.select(); try { document.execCommand('copy'); toast(t('tCopied')); } catch { toast(txt); } i.remove(); }
}
// k: 'shared' | 'mine'; d: link to edit; fid: folder for a new link; club: add the link to this club's page instead
function linkModal(k, d, fid, club) {
  const o = modal(d ? t('editInfo') : club ? t('addLink') : t('newLink'), `<div class="fields">
    <div class="field full"><label for="lku">${esc(t('linkUrl'))}</label><input id="lku" type="url" inputmode="url" placeholder="https://docs.google.com/…" value="${esc(d?.url || '')}"></div>
    <div class="field full"><label for="lkt">${esc(t('linkTitle'))}</label><input id="lkt" maxlength="120" value="${esc(d?.title || '')}"></div>
    ${club || k === 'mine' ? '' : `<div class="field full"><label>${esc(t('fClubs'))}</label>${clubPicker('lkc', d?.clubs || [])}</div>`}
    <p class="field full" id="lkerr" style="color:var(--bad);font-size:13px" hidden>${esc(t('linkBad'))}</p></div>`,
    `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn go" id="lkok">${esc(d ? t('save') : t('create'))}</button>`);
  setTimeout(() => $('#lku', o).focus(), 30);
  $('#lku', o).addEventListener('input', e => { const ti = $('#lkt', o); if (!ti.dataset.touched) { const [cls] = linkKind(e.target.value); ti.value = { sheet: 'Google Sheets', doc: 'Google Docs', slide: 'Google Slides', form: 'Google Forms', drive: 'Google Drive' }[cls] || hostOf(e.target.value); } });
  $('#lkt', o).addEventListener('input', e => { e.target.dataset.touched = '1'; });
  $('#lkok', o).onclick = () => {
    const url = $('#lku', o).value.trim(), title = $('#lkt', o).value.trim() || hostOf(url);
    if (!/^https:\/\/[^\s]+\.[^\s]+/.test(url)) { $('#lkerr', o).hidden = false; return; }
    const cl = $('#lkc', o) ? $('#lkc', o).value : '';
    closeModal(); const now = new Date().toISOString();
    if (club) { club.extra = [...(club.extra || []), { label: title, url }]; commit([['clubs', club]]); return; }
    if (d) { mutate(k, () => { Object.assign(d, { url, title, clubs: uniq(cl.split(',').map(x => x.trim())), clubIds: clubIdsFor(cl), updatedAt: now }); return [['files', d]]; }); return; }
    const rec = { id: (k === 'shared' ? 'lnk-' : 'xl') + rid(), kind: 'link', title, url, folder: fid || null, type: t('link'), status: 'active', clubs: uniq(cl.split(',').map(x => x.trim())), clubIds: clubIdsFor(cl), trashed: false, createdAt: now, updatedAt: now };
    mutate(k, () => { (k === 'shared' ? DATA.docs : MY.files).push(rec); return [['files', rec]]; });
  };
}
document.addEventListener('click', e => { const b = e.target.closest('[data-copy]'); if (b) copyText(b.dataset.copy); });
document.addEventListener('click', e => {
  const b = e.target.closest('[data-rmclink]'); if (!b) return;
  const [cid, i] = b.dataset.rmclink.split('|'); const c = clubById(cid); if (!c) return;
  c.extra = (c.extra || []).filter((_, j) => j !== +i); commit([['clubs', c]]);
});
function renameMine(d) {
  const o = modal(t('renameFile'), `<div class="field"><label for="rn">${esc(t('fTitle'))}</label><input id="rn" value="${esc(d.title)}"></div>`, `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn go" id="rok">${esc(t('save'))}</button>`);
  $('#rok', o).onclick = () => { const v = $('#rn', o).value.trim(); if (!v) return; closeModal(); mutate('mine', () => { d.title = v; return [['files', d]]; }); };
}

/* ============ drag and drop ============ */
let drag = null;
document.addEventListener('dragstart', e => {
  const it = e.target.closest?.('[data-type][draggable="true"]'); if (!it) return;
  drag = { k: it.dataset.k, type: it.dataset.type, id: it.dataset.id };
  e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', it.dataset.id); } catch {}
});
document.addEventListener('dragend', () => { drag = null; $$('.dz-over').forEach(x => x.classList.remove('dz-over')); });
function dropTarget(e) {
  const tile = e.target.closest('.ftile'), crumb = e.target.closest('[data-crumb]'), page = e.target.closest('[data-drop]');
  if (tile) return { el: tile, k: tile.dataset.k, fid: tile.dataset.id };
  if (crumb) return { el: crumb, k: crumb.dataset.k, fid: crumb.dataset.crumb || null };
  if (page) return { el: page, k: page.dataset.drop, fid: page.dataset.folder || null, page: true };
  return null;
}
document.addEventListener('dragover', e => {
  const tg = dropTarget(e); if (!tg || !A[tg.k].edit()) return;
  const files = !drag && [...(e.dataTransfer?.types || [])].includes('Files');
  if (drag && (drag.k !== tg.k || tg.page)) return;
  if (!drag && !files) return;
  if (drag && drag.type === 'folder' && (descendants(tg.k, drag.id).has(tg.fid))) return;
  e.preventDefault(); $$('.dz-over').forEach(x => x !== tg.el && x.classList.remove('dz-over')); tg.el.classList.add('dz-over');
});
document.addEventListener('dragleave', e => { const tg = dropTarget(e); if (tg && !tg.el.contains(e.relatedTarget)) tg.el.classList.remove('dz-over'); });
document.addEventListener('drop', e => {
  const tg = dropTarget(e); $$('.dz-over').forEach(x => x.classList.remove('dz-over'));
  if (!tg || !A[tg.k].edit()) return;
  e.preventDefault();
  if (drag) { const d = drag; drag = null; if (d.k === tg.k && !tg.page) moveItem(tg.k, d.type, d.id, tg.fid); return; }
  if (e.dataTransfer?.files?.length) uploadModal(tg.k, tg.fid, e.dataTransfer.files);
});

/* ============ files / conversion ============ */
const bc = new Map();
async function bytes(d) {
  if (d.blob) return d.blob.arrayBuffer();
  const key = d.fileId || d.id;
  if (bc.has(key)) return bc.get(key);
  const p = (API.fetchFile ? API.fetchFile(d) : fetch(FILES.url(d))).then(async r => {
    if (!r.ok) throw new Error('missing');
    if (d.wrap !== 'b64') return r.arrayBuffer();
    const bin = atob((await r.text()).trim()); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer;
  });
  bc.set(key, p); p.catch(() => bc.delete(key)); return p;
}
function openTab(url) { const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener'; document.body.append(a); a.click(); a.remove(); }
const isPdf = d => (d.mime || '').includes('pdf');
const loadPdf = async d => pdfjsLib.getDocument({ data: new Uint8Array((await bytes(d)).slice(0)), isEvalSupported: false }).promise;
function mimeOf(f) { const ok = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp']; if (ok.includes(f.type)) return f.type; const x = (f.name.split('.').pop() || '').toLowerCase(); return { pdf: 'application/pdf', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', ...OFFICE }[x] || ''; }
async function save(filename, blob) {
  try {
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = filename; a.rel = 'noopener'; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    toast(t('tDl')); say(t('sayDone'), 'happy', 10); return true;
  } catch (e) { console.error(e); toast(t('tErr')); return false; }
}
async function backupAll() {
  try { await save(`tusu-backup-${new Date().toISOString().slice(0, 10)}.json`, new Blob([JSON.stringify(await API.backup(), null, 1)], { type: 'application/json' })); }
  catch (e) { console.error(e); toast(t('tErr')); }
}
async function dlOrig(k, d) {
  const ext = (d.fileName || '').split('.').pop() || 'pdf';
  try { save(`${safe(d.title)}.${ext}`, new Blob([await bytes(d)])); } catch { toast(t('tErr')); }
}
async function pageImg(pdf, n, type) {
  const pg = await pdf.getPage(n), vp = pg.getViewport({ scale: 2.5 });
  const c = document.createElement('canvas'); c.width = Math.round(vp.width); c.height = Math.round(vp.height);
  const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
  await pg.render({ canvasContext: x, viewport: vp }).promise;
  return new Promise(r => c.toBlob(r, type, .92));
}
async function imgConvert(d, type) { const b = await createImageBitmap(new Blob([await bytes(d)])); const c = document.createElement('canvas'); c.width = b.width; c.height = b.height; const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(b, 0, 0); return new Promise(r => c.toBlob(r, type, .92)); }
async function addImg(doc, d) {
  const buf = await bytes(d); let img;
  if (/png/.test(d.mime)) img = await doc.embedPng(buf); else if (/jpe?g/.test(d.mime)) img = await doc.embedJpg(buf);
  else img = await doc.embedPng(await (await imgConvert(d, 'image/png')).arrayBuffer());
  const W = 595.28, H = 841.89, s = Math.min(W / img.width, H / img.height, 1);
  doc.addPage([W, H]).drawImage(img, { x: (W - img.width * s) / 2, y: (H - img.height * s) / 2, width: img.width * s, height: img.height * s });
}
function onlyPdfImg(list) { const ok = list.filter(d => isPdf(d) || isImg(d)); if (ok.length < list.length) toast(t('officeOnly')); return ok; }
async function mergeFiles(list) {
  list = onlyPdfImg(list); if (!list.length) return;
  veil(true); mood('work', 99);
  try {
    const out = await PDFLib.PDFDocument.create();
    for (const [i, d] of list.entries()) { veil(true, `${t('tWork')} ${i + 1}/${list.length}`); if (isPdf(d)) { const src = await PDFLib.PDFDocument.load(await bytes(d), { ignoreEncryption: true }); (await out.copyPages(src, src.getPageIndices())).forEach(p => out.addPage(p)); } else await addImg(out, d); }
    const blob = new Blob([await out.save()], { type: 'application/pdf' }); veil(false); M.mood = null;
    save(`${lang === 'th' ? 'รวมเอกสาร' : 'merged'}_${list.length}.pdf`, blob);
  } catch (e) { console.error(e); veil(false); toast(t('tErr')); mood('confused', 8); }
}
async function zipFiles(list) {
  veil(true); mood('work', 99);
  try { const z = new JSZip(), used = new Set(); for (const d of list) { const ext = (d.fileName || '').split('.').pop() || 'pdf'; let n = `${safe(d.title)}.${ext}`, c = 2; while (used.has(n)) n = `${safe(d.title)} (${c++}).${ext}`; used.add(n); z.file(n, await bytes(d)); } const b = await z.generateAsync({ type: 'blob' }); veil(false); M.mood = null; save(`${lang === 'th' ? 'เอกสาร' : 'documents'}_${list.length}.zip`, b); }
  catch (e) { console.error(e); veil(false); toast(t('tErr')); mood('confused', 8); }
}
async function toImages(list, fmt) {
  list = onlyPdfImg(list); if (!list.length) return;
  const type = fmt === 'jpg' ? 'image/jpeg' : 'image/png'; veil(true); mood('work', 99);
  try {
    const z = new JSZip(); let n = 0;
    for (const d of list) { if (isPdf(d)) { const pdf = await loadPdf(d); for (let i = 1; i <= pdf.numPages; i++) { veil(true, `${t('tWork')} ${++n}`); z.file(`${safe(d.title)}_p${String(i).padStart(2, '0')}.${fmt}`, await pageImg(pdf, i, type)); } } else { z.file(`${safe(d.title)}.${fmt}`, await imgConvert(d, type)); n++; } }
    const b = await z.generateAsync({ type: 'blob' }); veil(false); M.mood = null; save(`${lang === 'th' ? 'รูปเอกสาร' : 'images'}_${fmt}.zip`, b);
  } catch (e) { console.error(e); veil(false); toast(t('tErr')); mood('confused', 8); }
}

/* ============ Office files (Word / Excel) preview, libraries load only when needed ============ */
const LIBS = { mammoth: 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js', xlsx: 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js' };
const libP = {};
function loadLib(name) {
  return libP[name] ||= new Promise((res, rej) => { const el = document.createElement('script'); el.src = LIBS[name]; el.onload = res; el.onerror = () => { delete libP[name]; el.remove(); rej(new Error('lib ' + name)); }; document.head.append(el); });
}
// Word, Excel (every sheet) and text files as HTML, for the reader and for printing.
const HTML_EXT = ['docx', 'xlsx', 'xls', 'csv', 'txt'];
async function officeHtml(d) {
  const x = extOf(d);
  if (x === 'docx') { await loadLib('mammoth'); return (await window.mammoth.convertToHtml({ arrayBuffer: await bytes(d) })).value; }
  if (x === 'txt') return `<pre style="white-space:pre-wrap">${esc(new TextDecoder().decode(await bytes(d)))}</pre>`;
  await loadLib('xlsx'); const wb = window.XLSX.read(new Uint8Array(await bytes(d)), { type: 'array' });
  return wb.SheetNames.map(n => `${wb.SheetNames.length > 1 ? `<h3>${esc(n)}</h3>` : ''}${window.XLSX.utils.sheet_to_html(wb.Sheets[n], { header: '', footer: '' })}`).join('');
}
async function renderOffice(cw, d) {
  const x = extOf(d);
  try {
    if (x === 'docx') {
      const h = await officeHtml(d); if (R.d !== d) return;
      cw.innerHTML = `<div class="office-view">${h}</div>`; return;
    }
    if (['xlsx', 'xls', 'csv'].includes(x)) {
      await loadLib('xlsx'); const wb = window.XLSX.read(new Uint8Array(await bytes(d)), { type: 'array' }); if (R.d !== d) return;
      const show = i => {
        cw.innerHTML = `<div class="office-view">${wb.SheetNames.length > 1 ? `<div class="sheet-tabs">${wb.SheetNames.map((n, j) => `<button class="fchip" data-sheet="${j}" aria-pressed="${i === j}">${esc(n)}</button>`).join('')}</div>` : ''}<div class="tbl-wrap">${window.XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[i]], { header: '', footer: '' })}</div></div>`;
        $$('[data-sheet]', cw).forEach(b => b.onclick = () => show(+b.dataset.sheet));
      };
      show(0); return;
    }
    if (x === 'txt') { const h = await officeHtml(d); if (R.d !== d) return; cw.innerHTML = `<div class="office-view">${h}</div>`; return; }
  } catch (e) { console.error(e); }
  if (R.d !== d) return;
  cw.innerHTML = `<div class="card empty" style="max-width:520px;background:var(--panel);margin-top:24px"><div class="ic blue">${ic('doc')}</div><h3>${esc(d.fileName || d.title)}</h3><p>${esc(t('officeNoPrev'))}</p><button class="btn go" data-cwdl>${ic('down')}${esc(t('dlOrig'))}</button></div>`;
  $('[data-cwdl]', cw).onclick = () => dlOrig(R.k, d);
}

/* ============ print ============ */
// Everything goes through one hidden frame, so a whole list prints as one job: PDF pages are drawn as images
// (works the same in every browser), pictures go in as they are, Word/Excel/text as HTML.
// Other types (PowerPoint, old .doc) open in Google Drive, which can print them.
const canPrint = d => isPdf(d) || isImg(d) || HTML_EXT.includes(extOf(d));
async function printFiles(list) {
  list = list.filter(d => d && !isLink(d));
  const ok = list.filter(canPrint), rest = list.filter(d => !canPrint(d));
  if (rest.length === 1 && !ok.length && !rest[0].blob && FILES.url(rest[0])) { openTab(FILES.url(rest[0])); toast(t('tPrintDrive')); return; }
  if (rest.length) toast(t('tPrintSkip', { n: rest.length }));
  if (!ok.length) return;
  veil(true); mood('work', 99);
  const urls = [], parts = [], img = blob => { const u = URL.createObjectURL(blob); urls.push(u); return `<img class="pg" alt="" src="${u}">`; };
  try {
    for (const [i, d] of ok.entries()) {
      veil(true, `${t('tWork')} ${i + 1}/${ok.length}`);
      if (isPdf(d)) { const pdf = await loadPdf(d); for (let p = 1; p <= pdf.numPages; p++) parts.push(img(await pageImg(pdf, p, 'image/jpeg'))); }
      else if (isImg(d)) parts.push(img(new Blob([await bytes(d)], { type: d.mime })));
      else parts.push(`<div class="htm">${await officeHtml(d)}</div>`);
    }
    const f = document.createElement('iframe'); f.setAttribute('aria-hidden', 'true'); f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    f.srcdoc = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>${esc(ok.length === 1 ? ok[0].title : t('printAll'))}</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;700&display=swap">
      <style>@page{size:A4;margin:10mm}body{margin:0;font:11pt 'Noto Sans Thai',sans-serif;color:#000}.pg{display:block;max-width:100%;max-height:276mm;margin:0 auto}.pg,.htm{break-after:page}.pg:last-child,.htm:last-child{break-after:auto}
      table{border-collapse:collapse;font-size:9pt}td,th{border:1px solid #888;padding:2px 6px}.htm img{max-width:100%}</style></head><body>${parts.join('')}</body></html>`;
    const loaded = new Promise(r => { f.onload = r; }); document.body.append(f); await loaded;
    const doc = f.contentDocument;
    await Promise.all([...doc.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
    await doc.fonts?.ready;
    veil(false); M.mood = null; toast(t('tPrintReady'));
    f.contentWindow.focus(); f.contentWindow.print();
    setTimeout(() => { f.remove(); urls.forEach(u => URL.revokeObjectURL(u)); }, 60000);
  } catch (e) { console.error(e); veil(false); urls.forEach(u => URL.revokeObjectURL(u)); toast(t('tErr')); mood('confused', 8); }
}

/* ============ reader ============ */
const R = { d: null, k: 'shared', pdf: null, page: 1, task: null };
function closeReader() { R.task?.cancel?.(); R.d = null; R.pdf = null; $('#layer').innerHTML = ''; document.body.style.overflow = ''; }
async function openReader(k, id, page = 1) {
  const d = A[k].files().find(x => x.id === id) || (k === 'shared' ? DATA.docs.find(x => x.id === id) : null); if (!d) return;
  if (isLink(d)) { openTab(d.url); return; }
  Object.assign(R, { d, k, page, pdf: null });
  document.body.style.overflow = 'hidden';
  $('#layer').innerHTML = `<div class="ov" id="ov"><div class="reader" role="dialog" aria-modal="true" aria-labelledby="rt"><div class="rh"><h2 id="rt"></h2><button class="pill round" id="rx" aria-label="${esc(t('close'))}">${ic('x')}</button></div>
    <div class="rb"><div class="stage"><div class="cw" id="cw"><span class="spin" style="margin-top:48px"></span></div><div class="pager"><button class="btn sm" id="pp">${esc(t('prev'))}</button><input id="pn" inputmode="numeric" aria-label="page"><span id="pt" class="num" style="color:var(--muted)"></span><button class="btn sm" id="px">${esc(t('next'))}</button></div></div><div class="rs" id="rs"></div></div></div></div>`;
  $('#ov').onclick = e => { if (e.target.id === 'ov') closeReader(); };
  $('#rx').onclick = closeReader; $('#pp').onclick = () => go(R.page - 1); $('#px').onclick = () => go(R.page + 1); $('#pn').onchange = e => go(parseInt(e.target.value, 10) || 1);
  renderSide();
  try { if (isPdf(d)) { R.pdf = await loadPdf(d); if (R.d !== d) return; } go(page); } catch (e) { console.error(e); $('#cw').innerHTML = `<p style="color:var(--muted)">${esc(t('tErr'))}</p>`; }
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if ($('.pmenu')) return closeMenu(); if ($('.ov.m')) return closeModal(); if (R.d) return closeReader(); }
  if (R.d && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') { e.preventDefault(); printFiles([R.d]); return; }
  if (R.d && !$('.ov.m') && !e.target.closest('input,select,textarea')) { if (e.key === 'ArrowRight') go(R.page + 1); if (e.key === 'ArrowLeft') go(R.page - 1); }
});
async function go(n) {
  const d = R.d; if (!d) return;
  const total = R.pdf ? R.pdf.numPages : 1; n = Math.max(1, Math.min(total, n)); R.page = n;
  $('#pn').value = n; $('#pt').textContent = `${t('of')} ${total}`; $('#pp').disabled = n <= 1; $('#px').disabled = n >= total;
  $$('#rs .idx button').forEach(b => b.setAttribute('aria-current', String(+b.dataset.p === n)));
  const cw = $('#cw');
  if (isOffice(d)) return renderOffice(cw, d);
  if (!R.pdf) { const src = d.blob ? URL.createObjectURL(d.blob) : FILES.url(d); cw.innerHTML = `<img alt="" src="${esc(src)}">`; return; }
  const pg = await R.pdf.getPage(n); if (R.d !== d || R.page !== n) return;
  const w = Math.min(cw.clientWidth - 44, 880), dpr = Math.min(devicePixelRatio || 1, 2);
  const vp = pg.getViewport({ scale: w / pg.getViewport({ scale: 1 }).width * dpr });
  const c = document.createElement('canvas'); c.width = Math.round(vp.width); c.height = Math.round(vp.height); c.style.width = w + 'px';
  R.task?.cancel?.(); R.task = pg.render({ canvasContext: c.getContext('2d'), viewport: vp });
  try { await R.task.promise; } catch { return; }
  if (R.d === d && R.page === n) { cw.replaceChildren(c); cw.scrollTop = 0; }
}
function renderSide() {
  const d = R.d, k = R.k; if (!d) return; $('#rt').textContent = d.title;
  const pdf = isPdf(d), many = (d.pageCount || 1) > 1, src = k === 'shared' ? 'doc' : 'mine', ed = A[k].edit(), ofc = isOffice(d);
  const pages = (d.pages || []).filter(p => p.club);
  const fpath = pathOf(k, d.folder).map(f => f.name).join(' › ') || (k === 'shared' ? t('drive') : t('mine'));
  let h = `<section><div class="qa">
      <button class="btn go" data-dl="orig">${ic('down')}${esc(t('dlOrig'))}</button>
      <button class="btn go" data-print>${ic('print')}${esc(t('print'))}</button>
      ${k === 'shared' && !d.wrap ? `<a class="btn full" href="${esc(FILES.url(d))}" target="_blank" rel="noopener">${ic('ext')}${esc(t('openTab'))}</a>` : ''}
      ${k === 'shared' && (d.clubIds || []).length ? `<a class="btn full" href="#c-${esc(d.clubIds[0])}" data-goclub>${ic('users')}${esc(t('goClub'))}</a>` : ''}
      ${ofc ? '' : `<button class="btn" data-dl="pagePdf">${esc(pdf ? t('dlPagePdf') : 'PDF')}</button>
      <button class="btn" data-dl="pagePng">${esc(pdf ? t('dlPagePng') : 'PNG')}</button>
      <button class="btn" data-dl="pageJpg">${esc(pdf ? t('dlPageJpg') : 'JPG')}</button>
      ${pdf && many ? `<button class="btn" data-dl="allPng">${esc(t('dlAllPng'))}</button><button class="btn full" data-dl="allJpg">${esc(t('dlAllJpg'))}</button>` : `<button class="btn" data-rtray>${ic(inTray(src, d.id) ? 'check' : 'plus')}${esc(inTray(src, d.id) ? t('inTray') : t('addTray'))}</button>`}
      ${pdf && many ? `<button class="btn" data-rtray>${ic(inTray(src, d.id) ? 'check' : 'plus')}${esc(inTray(src, d.id) ? t('inTray') : t('addTray'))}</button>` : ''}`}
      ${k === 'shared' ? `<button class="btn ${(pdf && many) || ofc ? 'full' : 'full'}" data-rstar>${ic('star')}${esc(S.stars.includes(d.id) ? t('unstar') : t('star'))}</button>` : ''}
    </div></section>
    <section><h5>${esc(t('info'))}</h5><dl class="kv">
      <dt>${esc(t('fFolder'))}</dt><dd>${esc(fpath)}</dd>
      ${k === 'shared' ? `<dt>${esc(t('fStatus'))}</dt><dd>${statusChip(d)}</dd>` : ''}
      ${d.signed ? `<dt>${esc(t('fSigned'))}</dt><dd>${signedChip(d)}</dd>` : ''}
      ${d.year ? `<dt>${esc(t('fYear'))}</dt><dd class="num">${esc(d.year)}</dd>` : ''}
      ${d.announced ? `<dt>${esc(t('fAnn'))}</dt><dd>${esc(d.announced)}</dd>` : ''}
      <dt>${esc(t('fPages'))}</dt><dd class="num">${d.pageCount || 1}</dd><dt>${esc(t('fSize'))}</dt><dd class="num">${fmtB(d.sizeBytes)}</dd>
      <dt>${esc(t('fFile'))}</dt><dd>${esc(d.fileName || '–')}</dd><dt>${esc(t('fAdded'))}</dt><dd>${fmtD(d.createdAt)}</dd>
      ${d.meet ? `<dt>${esc(t('meetOn'))}</dt><dd>${esc(d.meet)}</dd>` : ''}
      ${d.note ? `<dt>${esc(t('fNote'))}</dt><dd>${esc(d.note)}</dd>` : ''}</dl></section>
    ${k === 'shared' ? `<section><h5>${esc(t('tagsOf'))}</h5><div class="chips">${docTags(d).map(x => tagChip(x)).join('')}</div></section>` : ''}
    ${(d.committee || []).length ? `<section><h5>${esc(t('committee'))}</h5><ol style="margin:0;padding-left:20px;display:grid;gap:3px;font-size:14px">${d.committee.map(x => `<li>${esc(x)}</li>`).join('')}</ol></section>` : ''}`;
  const rel = k === 'shared' ? relDocs(d) : [];
  if (rel.length) h += `<section><h5>${esc(t('relDocs'))}</h5><div class="rows">${rel.map(x => `<button class="row" data-row="${esc(x.id)}"><span class="th">${FILES.thumb(x) ? `<img alt="" loading="lazy" src="${esc(FILES.thumb(x))}">` : ''}</span><span style="min-width:0"><b>${esc(x.title)}</b><small>${esc([x.type, x.year].filter(Boolean).join(' · '))}</small></span><span></span></button>`).join('')}</div></section>`;
  if (pages.length > 1) h += `<section><h5>${esc(t('clubIdx'))} · ${pages.length}</h5><div class="idx">${pages.map(p => `<button data-p="${p.p}" aria-current="${p.p === R.page}"><span class="p num">${p.p}</span><span>${esc(short(p.club))}</span></button>`).join('')}</div></section>`;
  if (ed) h += `<section><div class="qa">${k === 'shared' ? `<button class="btn" data-redit>${ic('edit')}${esc(t('editInfo'))}</button>` : `<button class="btn" data-rren>${ic('edit')}${esc(t('renameFile'))}</button>`}<button class="btn" data-rmove>${ic('move')}${esc(t('moveTo'))}</button><button class="btn bad full" data-rdel>${ic('trash')}${esc(k === 'shared' ? t('toTrash') : t('del'))}</button></div></section>`;
  const rs = $('#rs'); rs.innerHTML = h;
  rs.onclick = e => {
    if (e.target.closest('[data-goclub]')) { closeReader(); return; }
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.dl) return dlOne(b.dataset.dl);
    if (b.hasAttribute('data-print')) return printFiles([d]);
    if (b.dataset.p) return go(+b.dataset.p);
    if (b.hasAttribute('data-rstar')) return toggleStar(d.id);
    if (b.hasAttribute('data-rtray')) return toggleTray(src, d.id);
    if (b.hasAttribute('data-redit')) return editModal(d);
    if (b.hasAttribute('data-rren')) return renameMine(d);
    if (b.hasAttribute('data-rmove')) return moveModal(k, 'file', d.id);
    if (b.hasAttribute('data-rdel')) { if (k === 'shared') { d.trashed = true; closeReader(); commit([['docs', d]]); toast(t('tTrashed')); } else confirmModal(t('delFileQ', { n: d.title }), () => deleteMine(d)); }
  };
}
async function dlOne(kind) {
  const d = R.d; if (!d) return; const base = safe(d.title);
  if (kind === 'orig') return dlOrig(R.k, d);
  veil(true);
  try {
    if (!isPdf(d)) {
      if (kind === 'pagePdf') { const doc = await PDFLib.PDFDocument.create(); await addImg(doc, d); const b = new Blob([await doc.save()], { type: 'application/pdf' }); veil(false); return save(`${base}.pdf`, b); }
      const jpg = /jpg/i.test(kind); const b = await imgConvert(d, jpg ? 'image/jpeg' : 'image/png'); veil(false); return save(`${base}.${jpg ? 'jpg' : 'png'}`, b);
    }
    const pdf = R.pdf || await loadPdf(d), n = R.page;
    if (kind === 'pagePdf') { const src = await PDFLib.PDFDocument.load(await bytes(d), { ignoreEncryption: true }); const o = await PDFLib.PDFDocument.create(); const [p] = await o.copyPages(src, [n - 1]); o.addPage(p); const b = new Blob([await o.save()], { type: 'application/pdf' }); veil(false); return save(`${base}_p${n}.pdf`, b); }
    if (kind === 'pagePng' || kind === 'pageJpg') { const jpg = kind === 'pageJpg'; const b = await pageImg(pdf, n, jpg ? 'image/jpeg' : 'image/png'); veil(false); return save(`${base}_p${n}.${jpg ? 'jpg' : 'png'}`, b); }
    veil(false); return toImages([d], kind === 'allJpg' ? 'jpg' : 'png');
  } catch (e) { console.error(e); veil(false); toast(t('tErr')); }
}

/* ============ upload ============ */
function detectMeta(texts, name) {
  const pages = texts.map((tx, i) => {
    const flat = tx.replace(/\s+/g, '').replace(/ํา/g, 'ำ');
    const m = flat.match(/เรื่อง(?:แต่งตั้ง)?(?:คณะกรรมการบริหาร|กรรมการ)?(ชุมนุม.+?)(?:ประจำ|ประจา)ปีการศึกษา(\d{4})/);
    const meet = flat.match(/ประชุมใหญ่ของชุมนุมเมื่อ(?:วันที่)?(\d{1,2}[ก-๙]+?\d{4})/);
    const ann = flat.match(/ประกาศณวันที่(\d{0,2})([ก-๙]+)พ\.ศ\.(\d{4})/);
    const a = flat.indexOf('ดังนี้'), b = flat.indexOf('ทั้งนี้', a);
    return { p: i + 1, club: m ? m[1] : '', year: m ? +m[2] : null, meet: meet ? meet[1] : '', ann: ann ? `${ann[1] ? ann[1] + ' ' : ''}${ann[2]} ${ann[3]}` : '', text: (a >= 0 ? flat.slice(a + 6, b > a ? b : a + 900) : flat).slice(0, 1200) };
  });
  const clubs = uniq(pages.map(p => p.club));
  const year = pages.find(p => p.year)?.year || +(name.match(/25\d\d/)?.[0] || 0) || null;
  const announced = pages.find(p => p.ann)?.ann || '';
  const title = clubs.length === 1 ? `${t('appoint')} ${short(clubs[0])}${year ? ' ' + year : ''}` : clubs.length > 1 ? `${t('appoint')} ${clubs.length} ${t('clubs')}${year ? ' ' + year : ''}` : name.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
  return { title, year, clubs, announced, status: clubs.length && !/^\d/.test(announced) ? 'draft' : 'active', pages: pages.map(({ p, club, meet, text }) => ({ p, club, meet, text })) };
}
async function thumbOf(draw, w0, h0) { const W = 360, s = W / w0, c = document.createElement('canvas'); c.width = W; c.height = Math.round(h0 * s); const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); await draw(x, s); return new Promise(r => c.toBlob(r, 'image/webp', .82)); }
async function prep(file, k) {
  const mime = mimeOf(file); if (!mime) throw { code: 'unsupported_type' };
  if (file.size > (k === 'shared' ? 20 : 100) * 1048576) throw { code: 'too_large' };
  if (mime === 'application/pdf') {
    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(await file.arrayBuffer()), isEvalSupported: false }).promise; const texts = [];
    for (let i = 1; i <= pdf.numPages; i++) texts.push((await (await pdf.getPage(i)).getTextContent()).items.map(x => x.str).join(' '));
    const p1 = await pdf.getPage(1), v = p1.getViewport({ scale: 1 });
    return { file, mime, pageCount: pdf.numPages, meta: detectMeta(texts, file.name), thumb: await thumbOf(async (x, s) => p1.render({ canvasContext: x, viewport: p1.getViewport({ scale: s }) }).promise, v.width, v.height) };
  }
  if (!/^image\//.test(mime)) return { file, mime, pageCount: 1, meta: { title: file.name.replace(/\.[^.]+$/, '').replace(/_/g, ' '), clubs: [], pages: [], status: 'active' }, thumb: null };
  const b = await createImageBitmap(file);
  return { file, mime, pageCount: 1, meta: { title: file.name.replace(/\.[^.]+$/, '').replace(/_/g, ' '), clubs: [], pages: [], status: 'active' }, thumb: await thumbOf(async (x, s) => x.drawImage(b, 0, 0, b.width * s, b.height * s), b.width, b.height) };
}
// Upload rows ask only for the title; what was read from the file is shown in one line and the rest sits under "more details".
function metaFields(m, key, k) {
  const title = `<div class="fields"><div class="field full"><label for="${key}ti">${esc(t('fTitle'))}</label><input id="${key}ti" value="${esc(m.title)}"></div></div>`;
  if (k === 'mine') return title;
  const cl = m.clubs || [], got = [cl.length && tagLbl('type:ใบแต่งตั้ง'), m.year, ...cl.slice(0, 3).map(short), cl.length > 3 && '+' + (cl.length - 3)].filter(Boolean);
  return `${title}<p class="upauto">${got.length ? `${ic('check')}<span>${esc(t('autoFilled'))} <b>${esc(got.join(' · '))}</b></span>` : `<span>${esc(t('autoNone'))}</span>`}</p>
    <details class="upmore"><summary>${esc(t('moreDetail'))}</summary><div class="fields">
    <div class="field"><label for="${key}st">${esc(t('fStatus'))}</label><select id="${key}st">${STATUS.map(s => `<option value="${s}" ${(m.status || 'active') === s ? 'selected' : ''}>${esc(t(s))}</option>`).join('')}</select></div>
    <div class="field"><label for="${key}yr">${esc(t('fYear'))}</label><input id="${key}yr" inputmode="numeric" value="${esc(m.year || '')}"></div>
    <div class="field full"><label for="${key}ty">${esc(t('fType'))}</label>${typeInput(key + 'ty', (m.clubs || []).length ? 'ใบแต่งตั้ง' : '')}</div>
    <div class="field full"><label>${esc(t('fClubs'))}</label>${clubPicker(key + 'cl', cl)}</div></div></details>`;
}
const whereLbl = (k, fid) => [k === 'shared' ? t('drive') : t('mine'), ...pathOf(k, fid).map(f => f.name)].join(' › ');
function uploadModal(k, fid, initial) {
  if (k === 'shared' && !(A.shared.edit() && API.canUpload())) { toast(t('tReadOnly')); return; }
  const o = modal(k === 'mine' ? t('upMine') : t('upShared'), `<ol class="upsteps">${t('upSteps').map((s, i) => `<li><span class="num">${i + 1}</span>${esc(s)}</li>`).join('')}</ol>
    ${k === 'mine' ? `<p class="note-bar">${ic('user')}<span>${esc(t('upMineP'))}</span></p>` : ''}
    <details class="where"><summary>${ic('folder')}<span>${esc(t('into'))}: <b id="whereL">${esc(whereLbl(k, fid))}</b></span><span class="link">${esc(t('change'))}</span></summary>${treeOptions(k, new Set(), fid || '')}</details>
    <div class="drop" id="drop">${ic('up')}<b>${esc(t('dropHere'))}</b><span>${esc(t('or'))}</span><label class="btn sm">${esc(t('pick'))}<input type="file" id="upIn" multiple accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.txt" class="sr"></label><p style="font-size:13px">${esc(t('upNote'))}</p></div><div id="ul" style="display:grid;gap:12px"></div>`,
    `<button class="btn" data-cancel>${esc(t('cancel'))}</button><button class="btn go" id="ugo" disabled>${esc(t('upGo'))}</button>`);
  const rows = [], drop = $('#drop', o);
  o.addEventListener('change', e => { if (e.target.name !== 'tgt') return; $('#whereL', o).textContent = whereLbl(k, e.target.value || null); $('.where', o).open = false; });
  const add = files => [...files].forEach(async file => {
    const key = 'u' + rid(), row = document.createElement('div'); row.className = 'urow';
    row.innerHTML = `<div class="fn"><span>${esc(file.name)}</span><span class="num">${fmtB(file.size)}</span></div><span class="us busy">${esc(t('reading'))}</span>`;
    $('#ul', o).append(row); const it = { key, row, p: null, done: false }; rows.push(it);
    try { it.p = await prep(file, k); row.innerHTML = `<div class="fn"><span>${esc(file.name)}</span><span class="num">${it.p.pageCount} ${esc(t('pages'))} · ${fmtB(file.size)}</span></div>${metaFields(it.p.meta, key, k)}<span class="us">${esc(t('ready'))}</span>`; }
    catch (e) { const s = row.querySelector('.us'); s.className = 'us err'; s.textContent = e.code === 'too_large' ? t('tBig') : e.code === 'unsupported_type' ? t('tType') : t('failed'); }
    $('#ugo', o).disabled = !rows.some(r => r.p && !r.done);
  });
  $('#upIn', o).onchange = e => add(e.target.files);
  drop.ondragover = e => { e.preventDefault(); e.stopPropagation(); drop.classList.add('over'); }; drop.ondragleave = () => drop.classList.remove('over');
  drop.ondrop = e => { e.preventDefault(); e.stopPropagation(); drop.classList.remove('over'); add(e.dataTransfer.files); };
  if (initial) add(initial);
  $('#ugo', o).onclick = async () => {
    $('#ugo', o).disabled = true; mood('work', 99);
    const target = $('input[name="tgt"]:checked', o)?.value || null; let added = 0;
    for (const r of rows) {
      if (!r.p || r.done) continue; const s = r.row.querySelector('.us'); s.className = 'us busy'; s.textContent = t('uploading');
      const v = id => ($('#' + r.key + id, r.row)?.value || '').trim(); const now = new Date().toISOString();
      try {
        if (k === 'mine') {
          const rec = { id: 'x' + rid(), title: v('ti') || t('untitled'), folder: target, mime: r.p.mime, sizeBytes: r.p.file.size, pageCount: r.p.pageCount, pages: r.p.meta.pages || [], fileName: r.p.file.name, createdAt: now, blob: r.p.file, thumb: r.p.thumb };
          MY.files.push(rec); await myPut('files', rec);
        } else {
          const up = await API.upload(r.p.file, r.p.thumb);
          const nd = { id: 'd' + rid(), title: v('ti') || t('untitled'), folder: target, status: v('st') || 'active', year: parseInt(v('yr'), 10) || null, type: v('ty'), clubs: uniq(v('cl').split(',').map(x => x.trim())), clubIds: clubIdsFor(v('cl')), announced: r.p.meta.announced || '', note: '', fileUrl: up.fileUrl, ...(up.driveId ? { driveId: up.driveId } : {}), thumbUrl: up.thumbUrl || '', fileName: r.p.file.name, mime: r.p.mime, sizeBytes: up.sizeBytes ?? r.p.file.size, pageCount: r.p.pageCount, pages: r.p.meta.pages || [], trashed: false, createdAt: now, updatedAt: now };
          DATA.docs.push(nd); r.newDoc = nd;
        }
        r.done = true; added++; s.className = 'us ok'; s.textContent = t('done');
      } catch (e) { console.error(e); s.className = 'us err'; s.textContent = e.code === 'quota_or_state' ? t('tQuota') : e.code === 'too_large' ? t('tBig') : e.code === 'unsupported_type' ? t('tType') : t('failed'); }
    }
    if (added) { if (k === 'shared') commit(rows.filter(r => r.newDoc && !r.saved).map(r => (r.saved = true, ['docs', r.newDoc]))); else { route(); say(t('sayDone'), 'happy', 10); } }
    if (rows.every(r => r.done || !r.p)) setTimeout(closeModal, 500); else $('#ugo', o).disabled = false;
  };
}

/* ============ boot ============ */
async function boot() {
  route();
  try {
    const d = await API.load();
    DATA = Object.assign({ v: 4, folders: [], docs: [], clubs: [] }, d);
  } catch (e) { console.error(e); toast(t('tLoadErr')); }
  try { S.staff = !!(await API.canEdit()); S.admin = S.staff && !!API.isAdmin(); } catch {}
  if (S.admin) loadTeam();
  loadMascots();
  route();
  await myOpen(); route();
}
boot();
})();
