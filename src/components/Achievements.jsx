import React, { useContext } from 'react';
import './achievement.css';
import { ThemeContext } from '../assets/ThemeContext';

function Achievements() {
  const { isDarkMode } = useContext(ThemeContext);
  
  const portfolioItems = [
    {
      title: '🏆 AceHack 4.0 — Ranked Top 15 ',
      size: 'large',
      subtitle: 'Achieved a Top 15 position out of 300+ participating teams at AceHack 4.0, a national-level hackathon. Built an innovative IoT-based solution that addressed a real-world problem, integrating hardware with cloud-based analytics. The project was recognized for its technical depth, practical applicability, and effective team collaboration under time constraints. ',
      pattern: 'circuit',
      accentColor: '#FF9F43'
    },
    
    {
      title: '💻 TechUtopia — Website for College Fest',
      size: 'medium-large',
      subtitle: 'Led the backend team to build and deploy a fully functional event site',
      pattern: 'binary',
      accentColor: '#4493f8'
    },

    {
      title: '📊 NPTEL Certifications',
      size: 'medium',
      subtitle: 'Certified in Python, Data Science with Python, and C Programming with an average score of 80%',
      pattern: 'lines',
      accentColor: '#6C5CE7'
    },
    {
      title: '☁️ AWS Certification',
      size: 'medium',
      subtitle: 'Gained hands-on experience in Amazon AWS through SysOps certification',
      pattern: 'clouds',
      accentColor: '#FF6B6B'
    },
        {
      title: '📄 Research Paper — DWWP System',
      size: 'tall-wide',
      subtitle: 'Published in Springer as part of a smart IoT systems conference',
      pattern: 'dots',
      accentColor: '#27AE60'
    },
    {
      title: '🎤 Organizer — AceHack 2.0 & 3.0',
      size: 'medium-large',
      subtitle: 'Contributed as a technical team member and helped successfully execute the events',
      pattern: 'waves',
      accentColor: '#00CEC9'
    }
  ];

  return (
    <div className={`achievement-main-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="skills-bg-grid"></div>
      <h2 >Milestones</h2>

      <div className="outer-div">
        <div className="dashboard-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`dashboard-item ${item.size} ${isDarkMode ? 'achievement-dark' : 'achievement-light'}`}
              style={{ '--accent-color': item.accentColor }}
            >
              {/* Pattern Background */}
              <div className={`pattern ${item.pattern}`}></div>
              
              {/* Glow Effect */}
              <div className="card-glow"></div>
              
              {/* Content */}
              <span className="icon">{item.icon}</span>
              <p className={`title ${isDarkMode ? 'achievement-dark-title' : 'achievement-light-title'}`}>
                {item.title}
              </p>
              {item.subtitle && (
                <small className={`subtitle ${isDarkMode ? 'achievement-dark-sub' : 'achievement-light-sub'}`}>
                  {item.subtitle}
                </small>
              )}
              
              {/* Corner Accents */}
              <div className="corner-accent top-left"></div>
              <div className="corner-accent top-right"></div>
              <div className="corner-accent bottom-left"></div>
              <div className="corner-accent bottom-right"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;