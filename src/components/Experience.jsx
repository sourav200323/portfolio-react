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
    </div>
  );
}

export default Experience  


// import React from 'react';
// import { motion } from 'framer-motion';
// import '../css/experience.css';

// const Experience = () => {
//   const cardVariants = {
//     initial: { opacity: 0, scale: 0.8, y: 100 }, // Start off-screen
//     inView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
//     outOfView: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.2 } }, // Fade out and shrink when out of view
//   };

//   return (
//     <div className="experience-card-container">
//       <ul className="experience-cards">
//         {[1, 2, 3, 4].map((card, index) => (
//           <motion.li
//             className="experience-card"
//             key={card}
//             initial="initial"
//             whileInView="inView"
//             onViewportLeave={(e) => e.start("outOfView")} // Manually trigger outOfView when leaving viewport
//             variants={cardVariants}
//             viewport={{ once: false, amount: 0.5 }} // Detect multiple times
//             style={{ zIndex: 10 + index, top: `${index * 5}vh` }}
//           >
//             <div className="experience-card-body">
//               <h1>Card {card}</h1>
//             </div>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Experience;

