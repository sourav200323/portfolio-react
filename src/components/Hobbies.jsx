  import React , { useContext} from 'react'
import { motion } from 'framer-motion';
import './hobbies.css';
import { ThemeContext } from '../assets/ThemeContext';

const Hobbies = () => {
 const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const hobbies = [
      { title: 'Competitive Codiing', description: 'Digital art with Figma.', accentColor: '#4493f8' },
    { title: 'Photography', description: 'Minimalist shots.', accentColor: '#665af0' },
    { title: 'Origamy', description: 'Ambient tracks.', accentColor: '#238636' },
  ];

  return (
       <div className="hobbies-container">
      <h2>Hobbies</h2>
      <div className={`hobbies-list ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
        {hobbies.map((hobby, index) => (
          <motion.div
            className="hobby-card"
            key={`hobby-${index}`}
            style={{ '--accent-color': hobby.accentColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
          >
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;