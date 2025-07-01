import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  { name: 'Dr. Jane Smith', text: 'The consulting services were invaluable for my research project. Highly recommended!' },
  { name: 'Alex Johnson', text: 'The online courses are clear, practical, and engaging. I learned so much!' },
];

const TestimonialsSection = () => (
  <section className="testimonials" id="testimonials">
    <h2>What Clients Say</h2>
    <div className="testimonials-list">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <p className="testimonial-text">“{t.text}”</p>
          <span className="testimonial-name">- {t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
