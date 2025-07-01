import React from 'react';
import './SocialLinks.css';

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'YouTube', url: 'https://youtube.com', icon: '▶️' },
];

const SocialLinks = () => (
  <div className="social-links">
    {socials.map((s, i) => (
      <a href={s.url} key={i} target="_blank" rel="noopener noreferrer" title={s.name} className="social-icon">
        <span>{s.icon}</span>
      </a>
    ))}
  </div>
);

export default SocialLinks;
