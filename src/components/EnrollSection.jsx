import React from 'react';
import './EnrollSection.css';

const EnrollSection = () => {
  return (
    <section id="enroll" className="enroll-section">
      <div className="enroll-container">
        <h2 className="enroll-title">Ready to Enroll?</h2>
        <p className="enroll-desc">Sign up now to start your journey with our expert academic consulting and online courses.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScEDyBSoPKu_jONXbrsm9TFCeNOZdAmN-Hfp7K39q74DmKvsQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="enroll-google-form-btn"
        >
          Enroll via Google Form
        </a>
      </div>
    </section>
  );
};

export default EnrollSection;
