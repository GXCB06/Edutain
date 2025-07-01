import React from 'react';
import './ServicesSection.css';

const services = [
  { title: 'Academic English Exam Consulting', desc: 'คำแนะนำจากผู้เชี่ยวชาญสำหรับการสอบ IELTS, TOEFL ITP, TOEIC, CU-TEP, TGAT1 และ A-Level English' },
  { title: 'Portfolio Tips & Techniques', desc: 'กลยุทธ์เฉพาะบุคคลเพื่อสร้าง Portfolio ที่โดดเด่นสำหรับการยื่นเข้าคณะมนุษยศาสตร์, ครุศาสตร์/ศึกษาศาสตร์ และคณะที่เกี่ยวข้องกับสายภาษา' },
  { title: 'Public Speaking & Competition Coaching', desc: 'การให้คำปรึกษาและเวิร์คช็อปสำหรับการพูดในที่สาธารณะและการแข่งขันเชิงวิชาการระดับประเทศ' },
  { title: 'Personal Coaching & Workshops', desc: 'การสอนแบบตัวต่อตัวและแบบกลุ่ม เพื่อเพิ่มพูนทักษะทางวิชาการและการสื่อสารของคุณ' },
  { title: 'Future Research Consulting', desc: 'คำแนะนำและการสนับสนุนสำหรับโครงการวิจัยเชิงวิชาการและการตีพิมพ์ผลงาน' },
];

const ServicesSection = () => (
  <section className="services" id="services">
    <h2>What I Offer</h2>
    <div className="services-list">
      {services.map((s, i) => (
        <div className="service-card" key={i}>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
