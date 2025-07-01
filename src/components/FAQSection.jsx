import React from 'react';
import './FAQSection.css';

const faqs = [
  { q: 'What services do you offer?', a: 'Academic consulting, online courses, blog resources, and portfolio review.' },
  { q: 'How can I contact you?', a: 'Use the contact form at the bottom of the page.' },
  { q: 'Are your courses self-paced?', a: 'Yes, all online courses are self-paced and accessible anytime.' },
];

const FAQSection = () => (
  <section className="faq" id="faq">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div className="faq-card" key={i}>
          <h4>{f.q}</h4>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQSection;
