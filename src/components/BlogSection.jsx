import React from 'react';
import './BlogSection.css';

const posts = [
  { title: 'How to Succeed in Academia', date: 'June 2025', excerpt: 'Tips and strategies for academic excellence.' },
  { title: 'The Power of Online Learning', date: 'May 2025', excerpt: 'Why online courses are changing education.' },
  { title: 'Showcasing Your Achievements', date: 'April 2025', excerpt: 'Building a strong academic portfolio.' },
];

const BlogSection = () => (
  <section className="blog" id="blog">
    <h2>Latest Blog Posts</h2>
    <div className="blog-list">
      {posts.map((p, i) => (
        <div className="blog-card" key={i}>
          <h3>{p.title}</h3>
          <span className="blog-date">{p.date}</span>
          <p>{p.excerpt}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection;
