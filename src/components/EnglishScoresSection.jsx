import React from 'react';
import { FaBookOpen, FaStar, FaCertificate, FaChartLine, FaMedal, FaTrophy } from 'react-icons/fa';
import './EnglishScoresSection.css';

const scores = [
  { name: 'TOEIC', score: 830, max: 990, icon: <FaChartLine color="#6a82fb" />, badge: 'Top 10%' },
  { name: 'TOEFL ITP', score: 560, max: 677, icon: <FaBookOpen color="#fc5c7d" />, badge: 'High Proficiency' },
  { name: 'CU-TEP', score: 84, max: 120, icon: <FaCertificate color="#FFD700" />, badge: 'Top 5%' },
  { name: 'TGAT English', score: 83.33, max: 100, icon: <FaStar color="#6a82fb" />, badge: 'Outstanding' },
  { name: 'A-Level English', score: 91.25, max: 100, icon: <FaMedal color="#fc5c7d" />, badge: 'Excellent' },
  { name: 'O-NET English', score: 91.70, max: 100, icon: <FaTrophy color="#FFD700" />, badge: 'Excellent' },
];

const AnimatedScore = ({ value, max }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const increment = value / 40;
    function update() {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start * 100) / 100);
        requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    }
    update();
  }, [value]);
  return <span>{count}{max ? <span style={{fontSize:'0.9em',color:'#888'}}>/{max}</span> : ''}</span>;
};

const EnglishScoresSection = () => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section className="english-scores-section">
      <h2 className="english-scores-title" style={{display:'flex',alignItems:'center',gap:'0.5em',justifyContent:'center'}}>
        <span role="img" aria-label="chart">📈</span> English Test Scores
      </h2>
      <div className="english-scores-board">
        {scores.map((test, idx) => (
          <div
            className={`score-card${hovered === test.name ? ' hovered' : ''}`}
            key={test.name}
            style={{animationDelay: `${0.1 * idx}s`}}
            onMouseEnter={() => setHovered(test.name)}
            onMouseLeave={() => setHovered(null)}
            tabIndex={0}
            aria-label={test.name + ' score card'}
          >
            <div className="score-icon">{test.icon}</div>
            <div className="score-name">{test.name}</div>
            <div className="score-value">
              <AnimatedScore value={test.score} max={test.max} />
            </div>
          </div>
        ))}
      </div>
      <p className="english-scores-note">* These scores reflect my personal achievements and dedication to English proficiency.<br/>I aim to help you reach your goals with proven strategies and passion for success.</p>
    </section>
  );
};

export default EnglishScoresSection;
