// import React from 'react';
// import { motion } from 'framer-motion';

// import Skills from './Skills';
// import About from './About';
// import Projects from './Projects';
// import Experience from './Experience';
// import Certifications from './Certifications';

// import '../css/experience.css';

// // Define an array of sections for each card
// const cardContent = [
//   { id: "about", component: About },
//   { id: "skills", component: Skills },
//   { id: "projects", component: Projects },
//   { id: "experience", component: Experience },
//   { id: "certifications", component: Certifications },
// ];

// // Section component for repeated structure
// const Section = ({ id, Component }) => (
//   <motion.div
//     className="section"
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -50 }}
//     transition={{ duration: 0.5 }}
//   >
//     <section id={id}>
//       <Component />
//     </section>
//   </motion.div>
// );

// const Master_card_stack = () => {
//   const cardVariants = {
//     initial: { opacity: 0, scale: 0.8, y: 100 },
//     inView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
//     outOfView: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.2 } },
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
//             exit="outOfView"
//             variants={cardVariants}
//             viewport={{ once: false, amount: 0.5 }}
//             style={{ zIndex: 10 + index, top: `${index * 5}vh` }}
//           >
//             <div className="experience-card-body">
//               <h1>Card {card}</h1>
//               {cardContent.map(({ id, component: Component }) => (
//                 <Section key={id} id={id} Component={Component} />
//               ))}
//             </div>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Master_card_stack;
