import React , {useState, useEffect} from 'react'
import './project.css'
import Modal from '../SupportingComonent/Modal';
import ImageSlideShow from '../SupportingComonent/ImageSlideShow' ; 

const project = [{
  name: "Domestic Water wastage Preventio System ",
  logo: "https://i.ibb.co/cKZv9Xh1/DWWP-LOGO.png",
  githubLink: "https://github.com/akashbera009/DWWP_2.0",
  linkedinLink: "https://www.linkedin.com/posts/akash-bera-5a3009250_sustainableliving-iotinnovation-waterconservation-activity-7282042471600082944-EBU9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3wAAsB977LsEl8sRR8MeVQFjq4hLqdFl4",
  liveDemo: "https://dwwp-20-git-main-akash-beras-projects-53418e47.vercel.app/",
  images: [
  'https://i.ibb.co/1GPKv96v/Screenshot-2025-03-28-100546.png',
  'https://i.ibb.co/V1mHp5d/Screenshot-2025-06-13-173948.png',
  'https://i.ibb.co/BHtW46Qz/Screenshot-2025-06-13-174003.png',
  ],
  description: "Domestic Water Wastage Prevention System is an IoT-enabled smart water management solution that combines real-time monitoring, automated control, and cloud integration. It supports hybrid online-offline operation, provides role-based access, and ensures efficient water usage through intelligent decision-making and secure payment integration.",
  techStack: ["React", "Arduino", "Firebase", "RazorPay" , "CSS"],
  features: ["Responsive layout", "Dark mode toggle", "Real-time data Sync"],
  role: "Full-stack Developer",
  challenges: "Connecting IoT device with database and eventully with Frontened . A big challenge was to maintain real time data synchronization with databse and IoT device  ",
  isResponsive: true,
  performanceBadge: "Lighthouse Score: 95+"
},
{
  name: "Clode Media",
  logo: "https://i.ibb.co/m5TfNXWC/Screenshot-2025-04-04-170142.png",
  githubLink: "https://github.com/akashbera009/cloud-media",
  linkedinLink: "https://www.linkedin.com/posts/akash-bera-5a3009250_mern-react-nodejs-activity-7299369931836403712-WyQn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3wAAsB977LsEl8sRR8MeVQFjq4hLqdFl4",
  liveDemo: "",
  images: [
    "https://i.ibb.co/hxRDX0YZ/Screenshot-2025-06-13-180223.png",
    "https://i.ibb.co/RpygqXt1/Screenshot-2025-06-13-181001.png",
    "https://i.ibb.co/4Z8H8LDs/Screenshot-2025-06-13-181013.png"
  ],
  description: "Cloud-Media is a secure and scalable MERN stack application designed for personalized file management. It features user authentication with JWT and bcrypt, image uploads with multer, and individual file galleries for each user—all powered by MongoDB and Express APIs.",
  techStack: [ "MERN", "CSS", "JWT" ,"bcrypt",  "AXIOS" , "Multer"],
  features: ["Role based Authentication", "Secure Storage"],
  role: "MERN-stack Developer",
  challenges: "Faced challenges in implementing secure authentication, handling file uploads, enforcing user-specific access, managing consistent error handling, and configuring environment variables for deployment.",
  isResponsive: true,
  performanceBadge: "Lighthouse Score: 85+"
},

{
  name: "FoodieRoute.com",
  logo: "https://i.ibb.co/vVvwwNp/Picsart-23-11-19-00-47-40-912.png",
  githubLink: "https://github.com/akashbera009/FoodieRoute.com",
  linkedinLink: "",
  liveDemo: "",
  images: [
    "https://i.ibb.co/QFqMS3pT/Screenshot-2025-06-15-131048.png",
    "https://i.ibb.co/LXGnp0xK/Screenshot-2025-06-15-131646.png",
    "https://i.ibb.co/svG0MC5g/Screenshot-2025-06-15-130658.png"
  ],
  description: "FoodieRoute.com is a web-based food ordering platform that connects users with the nearest available restaurants using a clean, responsive interface.",
  techStack: ["HTML", "CSS", "JS", "PHP", "SQL"],
  features: ["Simple UI", "User Interactive"],
  role: "PHP Developer",
  challenges: "Connecting PHP with database while maintaining secure connection with Frontend",
  isResponsive: false,
  performanceBadge: "Lighthouse Score: 70+"
},

// {
//   name: "Score-Vault",
//   logo: "./public/",
//   githubLink: "https://github.com/yourname/portfolio",
//   linkedinLink: "https://linkedin.com/in/yourname",
//   liveDemo: "https://yourportfolio.com",
//   images: [
//     "/images/screen1.png",
//     "/images/screen2.png",
//     "/images/screen3.png"
//   ],
//   description: "A personal portfolio website to showcase my projects and skills.",
//   techStack: ["React", "CSS", "Framer Motion", "EmailJS"],
//   features: ["Responsive layout", "Animated "],
//   role: "Full-stack Developer",
//   challenges: "Creating smooth animations and responsive design for all screen sizes.",
//   isResponsive: true,
//   performanceBadge: "Lighthouse Score: 95+"
// },


];

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  const visibleProjects = isExpanded
  ? project
  : isMobile
    ? project.slice(0, 2)  // Show only 2 on mobile
    : project.slice(0, 3); // Show 3 on desktop


    const handleOpenModal = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };
  return (
    <>
    <h2>Selected Works</h2>
<div className="projects-section">
 <div className={`alter-prjct-container ${isExpanded ? 'expanded' : ''}`}>
 {visibleProjects.map((proj, index) => (
<div className="modern-prjt-card">
  <div className="modern-prjt-top-section">
    <div className="modern-prjt-image-container">
      <ImageSlideShow img1={proj.images[0]} img2={proj.images[1]} img3={proj.images[2]} />
      <div className="modern-prjt-overlay"></div>
    </div>
    
    <div className="modern-prjt-icons">
      <div className="modern-prjt-social-media">
        <a href={proj.githubLink} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" rx="60"/>
            <path fill="currentColor" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30"/>
          </svg>
        </a>
        {/* <a href={proj.linkedinLink} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"/>
            <rect width="215" height="184" x="20" y="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/>
            <line x1="92" x2="92" y1="112" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
            <line x1="164" x2="164" y1="112" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
            <line x1="92" x2="164" y1="144" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
            <circle cx="92" cy="80" r="12"/>
          </svg>
        </a> */}
      </div>
    </div>
  </div>

  <div className="modern-prjt-bottom-section">
    <div className="modern-prjt-logo">
      <img loading="lazy" className="modern-prjt-icon-img" src={proj.logo} alt=""/>
      <span className="modern-prjt-title">{proj.name}</span>
    </div>
    
    <div className="modern-prjt-tech-stack">
      {proj.techStack.map((tech, index) => (
        <span key={index} className="modern-prjt-tech-badge">{tech}</span>
      ))}
    </div>
    
    <button className="modern-prjt-open-btn" onClick={() => handleOpenModal(proj)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
      </svg>
      <span>View Details</span>
    </button>
  </div>
</div>
      ))}
    </div>
    </div>

       <div className="expand-collapse-wrapper">
        <button className="alter-prjt-open-btn-1" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Collapse Projects' : 'Expand All Projects'}
          <span className={`arrow-icon ${isExpanded ? 'expanded' : ''}`} />
        </button>
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          project={selectedProject}
        />
      )}
    </>
  )
}


export default Projects