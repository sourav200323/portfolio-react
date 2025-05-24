// Modal.jsx
import React , {useEffect} from 'react';
import ReactDOM from 'react-dom' ; 
import './modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  const {
    name,
    logo,
    githubLink,
    linkedinLink,
    liveDemo,
    images,
    description,
    techStack,
    features,
    role,
    challenges,
    isResponsive,
    performanceBadge
  } = project;

return ReactDOM.createPortal (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-header">
          <img src={logo} alt={`${name} logo`} className="project-logo"  loading='lazy'/>
          <h2>{name}</h2>
        </div>

        <div className="modal-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="demo-btn">Live Demo</a>
          )}
        </div>

        <div className="modal-slideshow">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Slide ${idx + 1}`} loading='lazy' />
          ))}
        </div>

        <p className="description">{description}</p>

        <div className="tech-stack">
          <strong>Tech Stack:</strong> {techStack.join(', ')}
        </div>

        <div className="features">
          <strong>Key Features:</strong>
          <ul>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="role">
          <strong>Role:</strong> {role}
        </div>

        {challenges && (
          <div className="challenges">
            <strong>Challenges & Learnings:</strong>
            <p>{challenges}</p>
          </div>
        )}

        <div className="indicators">
          {isResponsive && <span className="badge">📱 Responsive</span>}
          {performanceBadge && <span className="badge">⚡ {performanceBadge}</span>}
        </div>
      </div>
    </div>
     , document.body
    );
};


export default Modal;
