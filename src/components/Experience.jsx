import React, { useContext} from 'react'
import { ThemeContext } from '../assets/ThemeContext';
import { motion } from 'framer-motion';
import './experience.css';

function Experience  () {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const experiences = [
    {
      title: 'AICTE Eduskill Virtual Internship',
      company: 'Google Android Development',
      duration: 'Aug 2024 - Oct 2024',
      description: 'Gained practical experience in Android development and contributed to project implementation.'
    },
    {
      title: 'Frontend Developer',
      company: 'Codesoft',
      duration: 'June 2024 - Aug 2024',
      description: 'Developed user interfaces and improved website functionality, enhancing user experience'
    },
    {
      title: 'Acehack 3.0',
      company: '36-hour Inter-College Hackathon',
      duration: 'Feb 2024 - April 2024',
      description: ' Participated with team, demonstrating problem-solving skills under tight deadlines.'
    },
  ];
  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className={`experience-list ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}  // Starts with opacity 0 and slight downward position
            animate={{ opacity: 1, y: 0 }}   // Animates to full opacity and normal position
            transition={{ delay: index * 0.1, duration: 0.5 }}  // Staggered delay for each card
            whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }} // Hover effects
          >
            <h3>{exp.title}</h3>
            <p className="company-name">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </motion.div>
        ))}
      </div>


    <h3 className={`hackathons-subsection   ${isDarkMode ? 'dark' : 'light'}`}>Hackathons</h3>
    <div class="hackathon-grid">
      <div class={`hackathon-card  ${isDarkMode ? 'dark' : 'light'}`}>
        <h4>CodeStorm Hackathon 2024</h4>
        <p class={`hackathon-date  ${isDarkMode ? 'dark' : 'light'}`}>June 2024</p>
        <p class="hackathon-role">Team Lead & Frontend Developer</p>
        <p class="hackathon-achievements">
          Developed a real-time collaborative task management app. Won <strong>1st Place</strong> for innovative use of WebSocket technology.
        </p>
        <div class={`hackathon-tech ${isDarkMode ? 'dark' : 'light'}`}>
          <span class={`tech-tag  ${isDarkMode ? 'dark' : 'light'}`}>React</span>
          <span class={`tech-tag  ${isDarkMode ? 'dark' : 'light'}`}>Node.js</span>
          <span class={`tech-tag  ${isDarkMode ? 'dark' : 'light'}`}>WebSocket</span>
        </div>
        <a href="https://github.com/your-repo/codestorm" class={`hackathon-link1  ${isDarkMode ? 'dark' : 'light'}`} target="_blank">View Project</a>
      </div>
      
      <div class="hackathon-card">
        <h4>AI Innovate Hackathon 2023</h4>
        <p class="hackathon-date">November 2023</p>
        <p class="hackathon-role">Backend Developer</p>
        <p class="hackathon-achievements">
          Built an AI-powered chatbot for mental health support. Awarded <strong>Best Use of AI</strong>.
        </p>
        <div class="hackathon-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Flask</span>
          <span class="tech-tag">TensorFlow</span>
        </div>
        <a href="https://github.com/your-repo/ai-innovate" class="hackathon-link" target="_blank">View Project</a>
      </div>
    </div>

    </div>
  );
}

export default Experience  ;
