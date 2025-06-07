  import React , { useContext} from 'react'
  import './achievement.css' ; 
import { ThemeContext } from '../assets/ThemeContext';
  // import Hobbies  from '../components/Hobbies';

  function Achievements() {
 const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const portfolioItems = [
  {
    title: '🏆 AceHack 4.0 — Ranked Top 15 in All-India Inter-College Hackathon',
    size: 'large',
    subtitle: 'Placed among the top 15 out of 300+ participating teams'
  },
  {
    title: '💻 TechUtopia — Website for College Fest',
    size: 'medium',
    subtitle: 'Led the backend team to build and deploy a fully functional event site'
  },
  {
    title: '📄 Research Paper — DWWP System',
    size: 'medium',
    subtitle: 'Published in Springer as part of a smart IoT systems conference'
  },
  {
    title: '☁️ AWS Certification',
    size: 'tall',
    subtitle: 'Gained hands-on experience in Amazon AWS through SysOps certification'
  },
  {
    title: '📊 NPTEL Certifications',
    size: 'tall',
    subtitle: 'Certified in Python, Data Science with Python, and C Programming with an average score of 80%'
  },
  {
    title: '🎤 Organizer — AceHack 2.0 & 3.0',
    size: 'medium-large',
    subtitle: 'Contributed as a technical team member and helped successfully execute the events'
  }
];



    return (
  <div className='achievement-main-container'>
    <h2>Achievements</h2>

  <div className={`outer-div `}>
      <div className="dashboard-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className={`dashboard-item ${item.size} ${isDarkMode ? 'achievement-dark' : 'achievement-light'}`}>
            <span className={`icon`}>{item.icon}</span>
            <p className={` ${isDarkMode ? 'achievement-dark-title' : 'achievement-light-title'}`}>{item.title}</p>
            {item.subtitle && <small className= {`subtitle ${isDarkMode ? 'achievement-dark-sub' : 'achievement-light-sub'}`}>{item.subtitle}</small>}
          </div>
        ))}

      </div>
    </div>
  </div>
    )
  }

  export const InteractiveCard = () => (
    <div className="achievement-card-main">
      <div className="achievement-card-card">
        <div className="achievement-card-fl">
          <div className="achievement-card-fullscreen">
            <svg
              className="achievement-card-fullscreen_svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z" />
            </svg>
          </div>
        </div>

        <div className="achievement-card-card_content">
          <button>Code to Infinity!</button>
        </div>
        <div className="achievement-card-card_back" />
      </div>

      <div className="achievement-card-data">
        <div className="achievement-card-img">
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <g strokeLinecap="butt" fill="none" strokeWidth="2.00">
              <path d="M 14.06 0.00 Q..." stroke="#59afb1" />
              {/* …other paths… */}
            </g>
          </svg>
        </div>
        <div className="achievement-card-text">
          <div className="achievement-card-text_m">CSS Gradient Button</div>
          <div className="achievement-card-text_s">Praashoo7</div>
        </div>
      </div>

      <div className="achievement-card-btns">
        <div className="achievement-card-likes">
          <svg viewBox="-2 0 105 92" className="achievement-card-likes_svg">
            <path d="M85.24…" />
          </svg>
          <span className="achievement-card-likes_text">22</span>
        </div>
        <div className="achievement-card-comments">
          <svg viewBox="-405.9 238 56.3 54.8" className="achievement-card-comments_svg">
            <path d="M-391…" />
          </svg>
          <span className="achievement-card-comments_text">12</span>
        </div>
        <div className="achievement-card-views">
          <svg viewBox="0 0 30.5 16.5" className="achievement-card-views_svg">
            <path d="M15.3…" />
          </svg>
          <span className="achievement-card-views_text">332</span>
        </div>
      </div>
    </div>
  );

  export default Achievements 