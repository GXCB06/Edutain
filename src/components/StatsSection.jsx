import React, { useEffect, useRef } from 'react';
import './StatsSection.css';
import { FaUserGraduate, FaFileAlt, FaTrophy } from 'react-icons/fa';

const stats = [
  { label: 'Students Mentored', value: 100, icon: <FaUserGraduate size={36} color="#6a82fb" /> },
  { label: 'Research Papers', value: 20, icon: <FaFileAlt size={36} color="#fc5c7d" /> },
  { label: 'Awards Won', value: 5, icon: <FaTrophy size={36} color="#fbb034" /> },
];

const animateCount = (el, to) => {
  const duration = 1200;
  const step = (timestamp, startTime) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * to);
    if (progress < 1) {
      requestAnimationFrame((t) => step(t, startTime));
    } else {
      el.textContent = to;
    }
  };
  requestAnimationFrame(step);
};

const StatsSection = () => {
  const refs = useRef([]);
  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) animateCount(el, stats[i].value);
    });
  }, []);
  return (
    <section className="stats" id="stats">
      <div className="stats-list">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <span className="stat-value" ref={el => refs.current[i] = el}>0</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
