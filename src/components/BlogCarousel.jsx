import React, { useState } from 'react';
import './BlogCarousel.css';

const posts = [
  { title: 'How to Succeed in Academia', date: 'June 2025', excerpt: 'Tips and strategies for academic excellence.' },
  { title: 'The Power of Online Learning', date: 'May 2025', excerpt: 'Why online courses are changing education.' },
  { title: 'Showcasing Your Achievements', date: 'April 2025', excerpt: 'Building a strong academic portfolio.' },
];

const BlogCarousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? posts.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === posts.length - 1 ? 0 : i + 1));
  return (
    <div className="blog-carousel">
      <button onClick={prev} className="carousel-btn" aria-label="Previous post" tabIndex={0} disabled={posts.length <= 1}>
        &#8592;
      </button>
      <div
        className="carousel-content"
        key={index}
        style={{
          minHeight: 180,
          minWidth: 260,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'opacity 0.3s',
          opacity: 1
        }}
      >
        <h3 style={{marginBottom: '0.5rem'}}>{posts[index].title}</h3>
        <span className="blog-date">{posts[index].date}</span>
        <p style={{margin: 0}}>{posts[index].excerpt}</p>
      </div>
      <button onClick={next} className="carousel-btn" aria-label="Next post" tabIndex={0} disabled={posts.length <= 1}>
        &#8594;
      </button>
    </div>
  );
};

export default BlogCarousel;
