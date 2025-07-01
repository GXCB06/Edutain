import React from 'react';
import './PortfolioSection.css';

const competitions = [
  { icon: '🥇', title: '1st Prize – Gold Medal', desc: 'Public Speech, “COLA Academic Tournament 2023”, COLA KKU' },
  { icon: '🥈', title: '1st Runner-up – Gold Medal (National)', desc: 'English Impromptu Speech, 70th National Student Arts and Crafts Competition, Northeastern Region' },
  { icon: '🥇', title: '1st Prize – Gold Medal (District)', desc: 'English Impromptu Speech, 70th National Student Arts and Crafts Competition, Sisaket-Yasothon' },
  { icon: '🥇', title: '1st Prize – Gold Medal (District)', desc: 'English Impromptu Speech, 71st National Student Arts and Crafts Competition, Sisaket-Yasothon' },
  { icon: '🥇', title: 'Champion', desc: 'English Proficiency Test x (Grade 10), Loeng Nok Tha School' },
  { icon: '🥇', title: 'Champion', desc: 'English Speech Contest, UBRU Christmas MICE University 2023' },
  { icon: '🥈', title: '1st Runner-up', desc: 'Public Speaking Competition, English Language Edutainment Festival 2024' },
  { icon: '🥈', title: '1st Runner-up', desc: 'Public Speaking Competition, HUSO-SCI Academic Contest 2023' },
];

const activities = [
  { icon: '✅', title: 'U.S. Embassy Open House 2024', desc: 'Selected as 1 of 50 nationwide (out of 700+ applicants) via English essay competition.' },
  { icon: '✅', title: 'YSEALI Public Speaking Workshop', desc: 'Chosen as 1 of 30 youth representatives from Northeastern Thailand.' },
];

const admissions = [
  { icon: '✅', title: 'Chulalongkorn University', desc: 'B.Ed. Secondary Education (English), Outstanding English Abilities Program' },
  { icon: '✅', title: 'Chiang Mai University', desc: 'Faculty of Humanities – English Major (Thai Program)' },
  { icon: '✅', title: 'Khon Kaen University', desc: 'Faculty of Humanities and Social Sciences – English Major (High Potential Program)' },
  { icon: '✅', title: 'Khon Kaen University', desc: 'Faculty of Business Administration and Accountancy – Digital Entrepreneurship (High Potential Program)' },
  { icon: '✅', title: 'Khon Kaen University', desc: 'Faculty of Law – High Potential Program (English Skills Track) (interview withdrawn)' },
];

const englishScores = [
  { label: 'TOEIC', value: '830 / 990' },
  { label: 'TOEFL ITP', value: '560 / 677' },
  { label: 'CU-TEP', value: '84 / 120' },
  { label: 'TGAT English', value: '83.33 / 100' },
  { label: 'A-Level English', value: '91.25 / 100' },
  { label: 'O-NET English', value: '91.70 / 100' },
];

const publications = [
  { icon: '🌍', title: 'International Research Publications', desc: 'Many papers published in international journals.' },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio & Achievements</h2>
      <h3>🏆 Competitions & Awards</h3>
      <div className="portfolio-list">
        {competitions.map((a, i) => (
          <div className="portfolio-card" key={i}>
            <span style={{fontSize:'1.5rem'}}>{a.icon}</span>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
      <h3 style={{marginTop:'2.5rem'}}>🌍 Activities & International Recognition</h3>
      <div className="portfolio-list">
        {activities.map((a, i) => (
          <div className="portfolio-card" key={i}>
            <span style={{fontSize:'1.5rem'}}>{a.icon}</span>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
      <h3 style={{marginTop:'2.5rem'}}>🎓 University Admissions</h3>
      <div className="portfolio-list" style={{position:'relative'}}>
        {admissions.map((a, i) => (
          <div className="portfolio-card" key={i} style={{position:'relative'}}>
            <span style={{fontSize:'1.5rem'}}>{a.icon}</span>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
      <h3 style={{marginTop:'2.5rem'}}>📈 English Test Scores</h3>
      <div className="portfolio-scorecard-list">
        {englishScores.map((s, i) => (
          <div className="portfolio-scorecard" key={i}>
            <div className="scorecard-label">{s.label}</div>
            <div className="scorecard-value">{s.value}</div>
          </div>
        ))}
      </div>
      <h3 style={{marginTop:'2.5rem'}}>🌍 Publications</h3>
      <div className="portfolio-list">
        {publications.map((a, i) => (
          <div className="portfolio-card" key={i}>
            <span style={{fontSize:'1.5rem'}}>{a.icon}</span>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
