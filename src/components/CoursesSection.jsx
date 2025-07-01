import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from './coursesData.jsx';
import './CoursesSection.css';
import './CoursesSection.extra.css';

const badgeLabels = [
  'Best Value',
  'Popular',
  'Recommended'
];

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="courses" id="courses">
      <h2>Online Courses</h2>
      <div className="courses-list">
        {courses.map((c, i) => (
          <div
            className="course-card"
            key={i}
            style={{ cursor: 'pointer' }}
          >
            {/* Badge for first course as example */}
            {i === 0 && <span className="course-badge">{badgeLabels[0]}</span>}
            <h3>{c.name}</h3>
            <div className="course-price">{c.price}</div>
            <button className="course-cta-btn" style={{marginTop: '1.2rem'}} onClick={() => navigate(`/courses/${i}`)}>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
