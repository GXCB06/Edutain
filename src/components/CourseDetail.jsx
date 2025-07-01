import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courses from './coursesData.jsx';
import './CoursesSection.css';
import './CoursesSection.extra.css';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses[parseInt(id, 10)];

  if (!course) return <div style={{padding: '2rem'}}>Course not found.</div>;

  return (
    <div className="course-detail-page" style={{maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(106,130,251,0.08)', padding: '2.5rem 2rem'}}>
      <button onClick={() => navigate(-1)} style={{marginBottom: '1.5rem', background: 'none', border: 'none', color: '#6a82fb', fontWeight: 600, cursor: 'pointer', fontSize: '1rem'}}>&larr; Back to Courses</button>
      <h2 style={{marginBottom: '0.5rem'}}>{course.name}</h2>
      <div className="course-price" style={{marginBottom: '1.2rem'}}>{course.price}</div>
      <div className="course-desc" style={{marginBottom: '1.5rem'}}>{course.desc}</div>
    </div>
  );
};

export default CourseDetail;
