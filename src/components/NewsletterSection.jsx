import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => (
  <section className="newsletter" id="newsletter">
    <h2>Subscribe to Newsletter</h2>
    <form className="newsletter-form">
      <input type="email" placeholder="Your Email" required />
      <button type="submit">Subscribe</button>
    </form>
  </section>
);

export default NewsletterSection;
