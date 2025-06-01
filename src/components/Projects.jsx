import React , {useState} from 'react'
import './project.css'
import Modal from '../SupportingComonent/Modal';
import ImageSlideShow from '../SupportingComonent/ImageSlideShow' ; 

const project = [{
  name: "Domestic Water wastage Preventio System ",
  logo: "./public/project-img/dwp-black-log.png",
  githubLink: "https://github.com/yourname/portfolio",
  linkedinLink: "https://linkedin.com/in/yourname",
  liveDemo: "https://yourportfolio.com",
  images: [
  './public/project-img/dwp-black-log.png',
  './public/project-img/Screenshot 2024-07-31 182100.png',
  './public/project-img/Screenshot 2025-03-28 100546.png',
  ],
  description: "A personal portfolio website to showcase my projects and skills.",
  techStack: ["React", "CSS", "Framer Motion", "EmailJS"],
  features: ["Responsive layout", "Dark mode toggle"],
  role: "Full-stack Developer",
  challenges: "Creating smooth animations and responsive design for all screen sizes.",
  isResponsive: true,
  performanceBadge: "Lighthouse Score: 95+"
},
{
  name: "Clode Media",
  logo: "./public/project-img/cloud-media.png",
  githubLink: "https://github.com/yourname/portfolio",
  linkedinLink: "https://linkedin.com/in/yourname",
  liveDemo: "https://yourportfolio.com",
  images: [
    "/images/screen1.png",
    "/images/screen2.png",
    "/images/screen3.png"
  ],
  description: "A personal portfolio website to showcase my projects and skills.",
  techStack: ["React", "CSS", "Framer Motion", "EmailJS"],
  features: ["Responsive layout", "Animated "],
  role: "Full-stack Developer",
  challenges: "Creating smooth animations and responsive design for all screen sizes.",
  isResponsive: true,
  performanceBadge: "Lighthouse Score: 95+"
},

{
  name: "Score-Vault",
  logo: "./public/",
  githubLink: "https://github.com/yourname/portfolio",
  linkedinLink: "https://linkedin.com/in/yourname",
  liveDemo: "https://yourportfolio.com",
  images: [
    "/images/screen1.png",
    "/images/screen2.png",
    "/images/screen3.png"
  ],
  description: "A personal portfolio website to showcase my projects and skills.",
  techStack: ["React", "CSS", "Framer Motion", "EmailJS"],
  features: ["Responsive layout", "Animated "],
  role: "Full-stack Developer",
  challenges: "Creating smooth animations and responsive design for all screen sizes.",
  isResponsive: true,
  performanceBadge: "Lighthouse Score: 95+"
},

{
  name: "Score-Vault",
  logo: "./public/",
  githubLink: "https://github.com/yourname/portfolio",
  linkedinLink: "https://linkedin.com/in/yourname",
  liveDemo: "https://yourportfolio.com",
  images: [
    "/images/screen1.png",
    "/images/screen2.png",
    "/images/screen3.png"
  ],
  description: "A personal portfolio website to showcase my projects and skills.",
  techStack: ["React", "CSS", "Framer Motion", "EmailJS"],
  features: ["Responsive layout", "Animated "],
  role: "Full-stack Developer",
  challenges: "Creating smooth animations and responsive design for all screen sizes.",
  isResponsive: true,
  performanceBadge: "Lighthouse Score: 95+"
},

{
  name: "Score-Vault",
  logo: "./public/",
  githubLink: "https://github.com/yourname/portfolio",
  linkedinLink: "https://linkedin.com/in/yourname",
  liveDemo: "https://yourportfolio.com",
  images: [
    "/images/screen1.png",
    "/images/screen2.png",
    "/images/screen3.png"
  ],
  description: "A personal portfolio website to showcase my projects and skills.",
  techStack: ["React", "CSS", "Framer Motion", "EmailJS"],
  features: ["Responsive layout", "Animated "],
  role: "Full-stack Developer",
  challenges: "Creating smooth animations and responsive design for all screen sizes.",
  isResponsive: true,
  performanceBadge: "Lighthouse Score: 95+"
}
];

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? project : project.slice(0, 3);

    const handleOpenModal = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };
  return (
    <>
    <h2>Projects</h2>

  <div className="alter-prjct-container">
 {visibleProjects.map((proj, index) => (
      <div className="alter-prjt-card">
  
        <div className="alter-prjt-top-section">
          <div className="alter-prjt-border"></div>
          <ImageSlideShow img1={proj.images[0]} img2={proj.images[1]} img3={proj.images[2]} />

          <div className="alter-prjt-icons">
        
            <div className="alter-prjt-social-media">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="whitee"><rect width="256" height="256" fill="black" rx="60"/><path fill="white" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g></svg>

                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64" width="30" height="30">
                              <rect width="512" height="509.64" rx="115.61" ry="115.61"/>
                              <path fill="white" d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/>
                            </svg>
            </div>
          </div>
        </div>

        <div className="alter-prjt-bottom-section">
            <div className="alter-prjt-logo">
             <img loading = "lazy" className = "alter-prjt-icon-img" src={proj.logo} alt=""/>
              <span className="alter-prjt-title">{proj.name}</span>
            </div>
           
          <div className="alter-prjt-row alter-prjt-row1">
            <div className="alter-prjt-item">
              <span className="alter-prjt-big-text">Tech Stack</span>
              <span className="alter-prjt-regular-text">{proj.techStack}</span>
            </div>
            <div className="alter-prjt-item">
              <span className="alter-prjt-big-text">Feature</span>
              <span className="alter-prjt-regular-text">{proj.features}</span>
            </div>
            <div className="alter-prjt-item">
              <span className="alter-prjt-big-text">Role</span>
              <span className="alter-prjt-regular-text">{proj.role}</span>
            </div>
            
          </div>

        
          <button className="alter-prjt-open-btn" onClick={() => handleOpenModal(proj)}>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 4l4 0l0 4" /><path d="M14 10l6 -6" /><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /><path d="M16 20l4 0l0 -4" /><path d="M14 14l6 6" /><path d="M8 4l-4 0l0 4" /><path d="M4 4l6 6" /></svg>
                Expand Project
              </button>

        </div>
      </div>
      ))}
    </div>

       <div style={{ textAlign: 'center', marginTop: '1rem' }}>
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