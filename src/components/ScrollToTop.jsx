import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace('#', '');
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  return null;
};

export default ScrollToTop;
