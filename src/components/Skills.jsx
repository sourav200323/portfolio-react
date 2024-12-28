import React from 'react'
import '../css/skills.css'
function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon-container">
            <p>icon</p>
          </div>
          <h6 className="skill-heading">Frontend Development</h6>
          <div className="skill-description">
            Proficient in React, CSS, and modern web design practices.
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon-container">
            <p>icon</p>
          </div>
          <h6 className="skill-heading">Backend Development</h6>
          <div className="skill-description">
            Experienced with Node.js, Express, and MongoDB for robust backend systems.
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon-container">
            <p>icon</p>
          </div>
          <h6 className="skill-heading">UI/UX Design</h6>
          <div className="skill-description">
            Adept at creating intuitive and visually appealing user interfaces.
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon-container">
            <p>icon</p>
          </div>
          <h6 className="skill-heading">DevOps</h6>
          <div className="skill-description">
            Familiar with CI/CD pipelines and deployment on cloud platforms.
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills
// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const StackScrollEffect = () => {
//   const { scrollYProgress } = useScroll(); // Tracks the scroll progress (0 to 1)

//   // Use different transform effects for each section.
//   const yTranslateFirst = useTransform(scrollYProgress, [0, 0.33], [0, -100]); // Moves first component up
//   const yTranslateSecond = useTransform(scrollYProgress, [0.33, 0.66], [100, -100]); // Moves second component up
//   const yTranslateThird = useTransform(scrollYProgress, [0.66, 1], [100, -100]); // Moves third component up

//   // Optional opacity effects to fade sections in/out
//   const opacityFirst = useTransform(scrollYProgress, [0, 0.33], [1, 0]); // First fades out
//   const opacitySecond = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]); // Second fades in
//   const opacityThird = useTransform(scrollYProgress, [0.66, 1], [0, 1]); // Third fades in

//   return (
//     <div style={{ height: '300vh', position: 'relative' }}>
//       {/* First Component */}
//       <motion.div
//         style={{
//           translateY: yTranslateFirst,
//           opacity: opacityFirst,
//           background: 'lightblue',
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'absolute',
//           width: '100%',
//           top: 0, // Starting at the top
//           zIndex: 3,
//         }}
//       >
//         <h1>First Page</h1>
//       </motion.div>

//       {/* Second Component */}
//       <motion.div
//         style={{
//           translateY: yTranslateSecond,
//           opacity: opacitySecond,
//           background: 'lightcoral',
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'absolute',
//           width: '100%',
//           top: 0, // Starts at the same top, stacked on the first
//           zIndex: 2,
//         }}
//       >
//         <h1>Second Page</h1>
//       </motion.div>

//       {/* Third Component */}
//       <motion.div
//         style={{
//           translateY: yTranslateThird,
//           opacity: opacityThird,
//           background: 'lightgreen',
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'absolute',
//           width: '100%',
//           top: 0, // Starts at the same top, stacked on the second
//           zIndex: 1,
//         }}
//       >
//         <h1>Third Page</h1>
//       </motion.div>
//     </div>
//   );
// };

// export default StackScrollEffect;
