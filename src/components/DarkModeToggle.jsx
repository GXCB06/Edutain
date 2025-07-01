import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);
  return (
    <button className="dark-toggle" onClick={() => setDark(d => !d)}>
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkModeToggle;
