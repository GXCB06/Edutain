import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const message = form[2].value;
    const mailto = `mailto:chawankorngarfield@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=From: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="How can I help you?" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
