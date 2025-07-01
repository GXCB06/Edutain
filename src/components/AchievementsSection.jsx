import React, { useState, useEffect, useRef } from 'react';
import './AchievementsSection.css';
import { FaRocket, FaTrophy, FaMedal, FaLightbulb, FaCertificate, FaUserGraduate, FaChalkboardTeacher, FaLanguage, FaCalendarAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import QualifiedUniversities from './QualifiedUniversities';
import EnglishScoresSection from './EnglishScoresSection';

const AnimatedCounter = ({ end, duration = 1200, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    function update() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(update);
      } else {
        setCount(end);
        cancelAnimationFrame(ref.current);
      }
    }
    ref.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration]);
  return <span>{prefix}{count}{suffix}</span>;
};

const quickStats = [
  { icon: <FaUserGraduate />, label: '1st Year, Chulalongkorn University' },
  { icon: <FaLanguage />, label: 'EN/TH, Academic English' },
  { icon: <FaChalkboardTeacher />, label: '50+ Students Mentored' },
  { icon: <FaCalendarAlt />, label: '3+ Years Experience' },
];

const AchievementsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('bio');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    // Use Intersection Observer for robust scroll-based animation
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="achievements-section" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="achievements-title">🌟 Achievements & Successes 🌟</h2>
        <p className="achievements-subtitle">This is what happens when dedication meets Edutain.</p>
        {/* Section intro for narrative flow */}
        <div className="achievements-narrative-intro">
          <p>My journey of success begins with university admissions, where I excelled in the most competitive portfolio rounds.</p>
        </div>
        <QualifiedUniversities />
        {/* Transition to academic achievements */}
        <div className="achievements-narrative-transition">
          <p>But that’s just the start. Here are some of my academic achievements that paved the way for these results.</p>
        </div>
        {/* 2. overall academic achievements (existing achievements cards) */}
        <div className="achievements-cards-row">
          {/* Card 1: Academic Awards */}
          <div className="achievement-card" tabIndex={0} aria-label="Academic Awards: 10 Awards" title="Academic Awards">
            <FaMedal className="achievement-icon" title="Academic Awards" />
            <h3>Academic Awards</h3>
            <div className="achievement-value"><AnimatedCounter end={10} suffix=" Awards" /></div>
            <p className="achievement-desc">🏅 National & regional academic competitions, English, Science, Social Studies, and more.</p>
          </div>
          {/* Card 2: Language Achievements */}
          <div className="achievement-card" tabIndex={0} aria-label="Language Competitions: 15 Stages, 11 Wins, 6 Gold, 2 Silver, 3 Bronze" title="Language Competitions">
            <FaTrophy className="achievement-icon" title="Language Competitions" />
            <h3>Language Competitions</h3>
            <div className="achievement-value"><AnimatedCounter end={15} suffix=" Stages" /></div>
            <div className="achievement-stats">
              <span className="stat-win" title="Wins">🏆 11 Wins</span>
              <span className="stat-medals" title="Medals">🥇 6 | 🥈 2 | 🥉 3</span>
            </div>
            <p className="achievement-desc">🗣️ Conquering every language challenge with outstanding ability.</p>
          </div>
          {/* Card 3: Innovative Projects */}
          <div className="achievement-card" tabIndex={0} aria-label="Innovation Projects: 6 Projects" title="Innovation Projects">
            <FaLightbulb className="achievement-icon" title="Innovation Projects" />
            <h3>Innovation Projects</h3>
            <div className="achievement-value"><AnimatedCounter end={6} suffix=" Projects" /></div>
            <p className="achievement-desc">🚀 My startup story with passions🚀</p>
          </div>
        </div>
        <button
          className="see-more-btn modern-see-more"
          onClick={() => window.location.href = '#portfolio'}
          aria-label="See More Achievements"
        >
          See More Achievements <FaArrowRight style={{marginLeft:'0.5em', verticalAlign:'middle'}}/>
        </button>
        {/* Transition to English test scores */}
        <div className="achievements-narrative-transition">
          <p>Strong English skills have been a key part of my success. Here are some of my most recent scores.</p>
        </div>
        {/* 3. english test scores */}
        <EnglishScoresSection />
        {/* Transition to tutor profile */}
        <div className="achievements-narrative-transition">
          <p>Behind every achievement is a story of dedication and growth. Here’s a little more about me as your academic consultant and language mentor.</p>
        </div>
        {/* 4. tutor profile */}
        <div className="tutor-profile-card tutor-profile-horizontal">
          <img src="/tutor picture/193.JPG" alt="Tutor" className="tutor-photo" />
          <div className="vertical-divider" />
          <div className="tutor-info">
            <div className="tutor-section-intro">
              <button className="tutor-section-label tutor-section-label-btn" onClick={() => setShowModal(true)} aria-label="Get to Know Your Tutor">✨ Get to Know Your Tutor ✨</button>
            </div>
            <div className="tutor-divider"></div>
            <h2 className="tutor-name tutor-name-inline" style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
              Chawanakorn Bounpraphan
              <span className="verified-badge" title="Verified Tutor" aria-label="Verified Tutor">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.5c.6 0 1.2.3 1.5.8l.7 1.1c.3.5 1 .7 1.5.5l1.2-.4c.6-.2 1.2 0 1.6.4.4.4.6 1 .4 1.6l-.4 1.2c-.2.5 0 1.2.5 1.5l1.1.7c.5.3.8.9.8 1.5s-.3 1.2-.8 1.5l-1.1.7c-.5.3-.7 1-.5 1.5l.4 1.2c.2.6 0 1.2-.4 1.6-.4.4-1 .6-1.6.4l-1.2-.4c-.5-.2-1.2 0-1.5.5l-.7 1.1c-.3.5-.9.8-1.5.8s-1.2-.3-1.5-.8l-.7-1.1c-.3-.5-1-.7-1.5-.5l-1.2.4c-.6.2-1.2 0-1.6-.4-.4-.4-.6-1-.4-1.6l.4-1.2c.2-.5 0-1.2-.5-1.5l-1.1-.7c-.5-.3-.8-.9-.8-1.5s.3-1.2.8-1.5l1.1-.7c.5-.3.7-1 .5-1.5l-.4-1.2c-.2-.6 0-1.2.4-1.6.4-.4 1-.6 1.6-.4l1.2.4c.5.2 1.2 0 1.5-.5l.7-1.1c.3-.5.9-.8 1.5-.8zm-1.1 10.7 3.2-3.2c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-2.8 2.8-1.1-1.1c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l1.5 1.5c.2.2.5.2.7 0z" fill="#2196F3"/>
                  <path d="M10.9 13.2c.2.2.5.2.7 0l3.2-3.2c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-2.8 2.8-1.1-1.1c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l1.5 1.5c.2.2.5.2.7 0z" fill="#fff"/>
                </svg>
              </span>
            </h2>
            <div className="tutor-credentials tutor-credentials-inline" style={{display:'flex',alignItems:'center',gap:'0.5rem',whiteSpace:'nowrap'}}>
              <FaCertificate className="tutor-cred-icon" style={{color:'#6a82fb',fontSize:'1.2rem'}} /> Academic Consultant & Language Mentor
            </div>
            <div className="quick-stats-row">
              {quickStats.map((stat, idx) => (
                <span className="quick-stat-chip" key={idx}>{stat.icon} {stat.label}</span>
              ))}
            </div>
            <p className="tutor-bio tutor-message">
              สวัสดีครับ ครูพี่ฟิวนะครับ ตอนนี้กำลังเป็นนิสิตชั้นปีที่ 1 อยู่คณะครุศาสตร์ เอกภาษาอังกฤษ จุฬาลงกรณ์มหาวิทยาลัย<br/>
              ส่วนตัวพี่เป็นคนชอบเรียนรู้อยู่ตลอดเวลา และชอบหาเทคนิคและกลยุทธ์ใหม่ๆ มาปรับใช้ในการเรียนการสอน นอกจากน้องๆ จะได้ความรู้ทางวิชาการกลับไปแล้ว พี่ฟิวจะคอยพาน้องๆ ทำความรู้จักตัวเองไปในตัว ไม่ว่าจะพาทำเวิร์คช็อป การทำมินิการแข่งขัน ทั้งหมดนี้ไม่มีค่าใช้จ่ายและเปิดโอกาศให้น้องๆ เก็บเกี่ยวคุณค่าและประสบการณ์ที่ดีให้มากที่สุดเท่าที่จะเป็นไปได้ เหมือนที่ครั้งหนึ่งนภาษาและคุณครูหลายท่านเคยเปลี่ยนชีวิตพี่ครับ :)
            </p>
<button className="cta-btn" onClick={() => window.location.href = 'https://drive.google.com/uc?export=download&id=1wke4gBeRHoBIcrZ7JXmNj1taLWjQ965s'} aria-label="ดาวน์โหลด TuTor_cv Portfolio"><FaEnvelope style={{marginRight:'0.5em'}}/>View My Portfolio</button>          </div>
        </div>
        {showModal && (
          <div className="tutor-modal-bg" onClick={() => setShowModal(false)}>
            <div className="tutor-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
              <div className="tutor-modal-tabs">
                <button className={activeTab === 'bio' ? 'active' : ''} onClick={() => setActiveTab('bio')} aria-label="Bio Tab">Bio</button>
                <button className={activeTab === 'video' ? 'active' : ''} onClick={() => setActiveTab('video')} aria-label="Video Tab">Video</button>
                <button className={activeTab === 'testimonials' ? 'active' : ''} onClick={() => setActiveTab('testimonials')} aria-label="Testimonials Tab">Testimonials</button>
              </div>
              <div className="tutor-modal-content">
                {activeTab === 'bio' && (
                  <div className="modal-bio">
                    <h3>About Chawanakorn Bounpraphan</h3>
                    <p>Academic Consultant & Language Mentor with a passion for empowering students. Years of experience in academic consulting, language competitions, and innovative education projects.</p>
                  </div>
                )}
                {activeTab === 'video' && (
                  <div className="modal-video">
                    <iframe width="280" height="158" src="https://www.youtube.com/embed/1G4isv_Fylg" title="Tutor Introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                )}
                {activeTab === 'testimonials' && (
                  <div className="modal-testimonials">
                    <blockquote>“Helped me win my first language competition!”</blockquote>
                    <span className="testimonial-author">- Thanaporn S.”</span>
                  </div>
                )}
              </div>
              <button className="close-modal-btn" onClick={() => setShowModal(false)} aria-label="Close">Close</button>
            </div>
          </div>
        )}
      </motion.div>
      {/* SVG Wave Divider for smooth transition to next section */}
      <div className="svg-wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 100" width="100%" height="100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,53.3C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z" fill="#f5f7fa"/>
        </svg>
      </div>
    </section>
  );
};

export default AchievementsSection;
