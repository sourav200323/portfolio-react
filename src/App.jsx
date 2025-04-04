// src/App.jsx
import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import { ThemeProvider, ThemeContext } from './assets/ThemeContext';

import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
// import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';

import Footer from './components/Contact';
import Achievements from './components/Achievements';

// import Master_card_stack from './components/Master_card_stack' ;

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = () => {
    setLoading(false); 
  };



const MainContent = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="grid">
    <div
      className="body"
      style={{
        backgroundColor: isDarkMode ? '#0d1117' : '#F0F0F0',
        color: isDarkMode ? '#f0f6fc' : 'black',
      }}
    >
      <Navbar />

      {/* <Master_card_stack/> */}
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <section id="about">
            <About/>
        </section>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <section id="skills">
         <Skills/>
        </section>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <section id="projects">
            <Projects/>
        </section>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <section id="experience">
            <Experience/>
        </section>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <section id="achievements">
            <Achievements/>
        </section>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <section id="contact">
            <Contact/>
        </section>
      </motion.div>

    </div>
    </div>
  );
};
  return (
    <ThemeProvider>
      {loading ? (
        //  <MainContent />
        <LoadingScreen onComplete={handleLoadingComplete} />

      ) : (
        <MainContent />
      )}
    </ThemeProvider>
  );
}

export default App;