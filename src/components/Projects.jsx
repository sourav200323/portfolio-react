import React from 'react'
import './project.css'

const projects = [
  {
    isPopular: true,
    logo: "./public/project-img/dwp-logo.png",
    projectName: "Water Wastage Prevention System",
    projectImage: "./public/project-img/Screenshot 2024-07-31 182100.png",
    creatorName: "Nike Pantollon",
    price: "299",
    gitLink: "https://github.com/your-repo",
    buyLink: "https://buy-now-link.com",
    languages: [
      { name: "JavaScript", color: "red" },
      { name: "Python", color: "blue" },
      { name: "Java", color: "green" },
    ],
  },
  {
    isPopular: true,
    logo: "./public/project-img/other-logo.png",
    projectName: "Air Quality Tracker",
    projectImage: "./public/project-img/Screenshot 2024-07-31 182100.png",
    creatorName: "John Doe",
    price: "399",
    gitLink: "https://github.com/other-repo",
    buyLink: "https://another-buy-now-link.com",
    languages: [
      { name: "C#", color: "purple" },
      { name: "Ruby", color: "pink" },
    ],
  },
];
function Projects() {
  return (
    <div>
        <h2>Projects</h2>
        <div className="projects">
        {projects.map((project, index) => (
        <article
          key={index}
          className="project-card-container"
          style={{ "--isPopular": project.isPopular ? "true" : "false" }}
        >
          {/* Project Name Container */}
          <div className="project-name-container">
            <div>
              <img src={project.logo} alt={`${project.projectName} logo`} />
            </div>
            <div>
              <div className="project-name">{project.projectName}</div>
            </div>
          </div>

          {/* Project Image */}
          <div className="project-image">
            <img src={project.projectImage} alt={`${project.projectName}`} />
          </div>

          {/* Project Info */}
          <div className="project-info">
            <div className="name">{project.creatorName}</div>
            <div className="price">{project.price}</div>
          </div>

          {/* More Section */}
          <div className="more">
            <div className="buttons">
              <button onClick={() => window.open(project.gitLink, "_blank")}>
                Git
              </button>
              <button onClick={() => window.open(project.buyLink, "_blank")}>
                Buy now
              </button>
            </div>
            <div className="options">
              <label htmlFor="">Languages</label>
              <ul>
                {project.languages.map((lang, langIndex) => (
                  <li
                    key={langIndex}
                    style={{ backgroundColor: lang.color }}
                    title={lang.name}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}

          
          </div>
    </div>
  )
}

export default Projects