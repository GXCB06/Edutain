// Course data for use in both CoursesSection and CourseDetail
const courses = [
  {
    name: 'Edutain Test Prep: พิชิตคะแนนสอบสูงสุด!',
    price: '2,800 THB',
    desc: (
      <>
        <ul>
          <li><b>Focus:</b> TOEIC, A-Level English, TGAT1, และ Grammar (เนื้อหาม.ต้น/ปลาย)</li>
          <li><b>Format:</b> รูปแบบการสอนแบบ กลุ่มเล็ก (ออนไลน์) 4-8 คน</li>
          <li><b>Package:</b> PhaEng Group Mastery (20 ชั่วโมง)</li>
          <li><b>Best Seller:</b> ราคาพิเศษ: 1,800 - 2,800 บาท/คน (เฉลี่ย 90 - 140 บาท/ชั่วโมง/คน)</li>
          <li><b>เหมาะสำหรับ:</b> น้องๆ นักเรียนมัธยมปลายที่ต้องการเตรียมตัวสอบเข้ามหาวิทยาลัย หรือสอบวัดระดับต่างๆผู้ที่ต้องการทำคะแนนสอบให้ดีขึ้น ในราคาที่คุ้มค่าและเข้าถึงง่ายที่สุด
</li>
        </ul>
        <a className="course-cta-btn" href="https://docs.google.com/forms/d/e/1FAIpQLScEDyBSoPKu_jONXbrsm9TFCeNOZdAmN-Hfp7K39q74DmKvsQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Enroll Now</a>
      </>
    )
  },
  {
    name: 'Edutain Public Speaking: พูดอย่างมั่นใจสู่เส้นชัยระดับชาติ!',
    price: '2,500 THB',
    desc: (
      <>
        <b>A. Public Speaking Coaching</b>
        <ul>
          <li><b>Focus:</b> การแข่งขันพูดในที่สาธารณะ การสร้างความมั่นใจ การนำเสนอ ในระดับชาติ</li>
          <li><b>Format:</b> รูปแบบการสอน ตัวต่อตัว (ออนไลน์) และ กลุ่มเล็ก (ออนไลน์) 4-8 คน</li>
          <li><b>One-on-One:</b> PhaEng Speak to Win (5 ชั่วโมง) ราคาพิเศษ: 2,000 - 2,500 บาท (เฉลี่ย 400 - 500 บาท/ชั่วโมง)</li>
          <li><b>Small Group:</b> PhaEng Group Speaker (5 ชั่วโมง) ราคาพิเศษ: 700 - 1,000 บาท/คน (เฉลี่ย 140 - 200 บาท/ชั่วโมง/คน)</li>
          <li><b>เหมาะสำหรับ:</b> น้องๆ นักเรียนที่ต้องการพัฒนาทักษะ Public Speaking ในราคาที่เข้าถึงง่ายขึ้น หรือผู้ที่ชอบเรียนรู้และฝึกฝนร่วมกับเพื่อนๆ</li>
        </ul>
        <a className="course-cta-btn" href="https://docs.google.com/forms/d/e/1FAIpQLScEDyBSoPKu_jONXbrsm9TFCeNOZdAmN-Hfp7K39q74DmKvsQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Enroll Now</a>
      </>
    )
  },
  {
    name: 'Edutain Portfolio: คว้าที่นั่งคณะในฝัน!',
    price: '990 THB',
    desc: (
      <>
        <ul>
          <li><b>Focus:</b> ให้คำปรึกษาแฟ้มสะสมผลงาน เข้าศึกษาต่อคณะครุศาสตร์ (เอกภาษาอังกฤษ), คณะมนุษยศาสตร์ (เอกภาษาอังกฤษ/ภาษาและวัฒนธรรม) หรือสาขาที่เกี่ยวข้องกับภาษารอบ Portfolio (รอบ 1)</li>
          <li><b>Includes:</b> Personal Statement & interview prep.</li>
          <li><b>Format:</b> รูปแบบการสอน: ตัวต่อตัว (ออนไลน์) (สำหรับกลุ่มสามารถทักมาสอบถามได้)</li>
          <li><b>Intro Package:</b> PhaEng Portfolio Jumpstart — 990 THB (ให้คำปรึกษาตลอด 30 วัน, ตรวจพอร์ตใได้ 3 ครั้ง)</li>
          <li><b>Group:</b> PhaEng Portfolio Group Consult — 350 THB/คน/ชั่วโมง</li>
          <li><b>เหมาะสำหรับ:</b> น้องๆ นักเรียนมัธยมปลายที่มีเป้าหมายเข้าศึกษาต่อคณะครุศาสตร์ (เอกภาษาอังกฤษ), คณะมนุษยศาสตร์ (เอกภาษาอังกฤษ/ภาษาและวัฒนธรรม) หรือสาขาที่เกี่ยวข้องผ่านระบบ Portfolio (รอบ 1)</li>
        </ul>
        <a className="course-cta-btn" href="https://docs.google.com/forms/d/e/1FAIpQLScEDyBSoPKu_jONXbrsm9TFCeNOZdAmN-Hfp7K39q74DmKvsQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Enroll Now</a>
      </>
    )
  }
];

export default courses;
