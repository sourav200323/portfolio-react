import React from 'react'
import '../css/project.css'

function Projects() {
  return (
    <div>
        <h1>Projects</h1>
        <div className="projects">
          <article className='project-card-container'   style={{ "--isPopular": "true" }} >
            <div className="project-name-container">
              <div><img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="" /></div>
              <div><div className='project-name'>Water Wastage </div></div>
            </div>
            <div className='project-imamge'><img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="" /></div>
            <div className="project-info">
              <div className="name">Nike Pantollon</div>
              <div className="price">299</div>
            </div>
            <div className="more">
              <div className="buttons">
                <button>Git</button>
                <button>Buy now </button>
              </div>
              <div className="options">
                <label htmlFor="">Options</label>
                <ul>
                  <li style={{backgroundColor:'red'}}></li>
                  <li style={{backgroundColor:'blue'}}></li>
                  <li style={{backgroundColor:'green'}}></li>
                </ul>
              </div>
            </div>
          </article>

          <article className='project-card-container'   style={{ "--isNew": "true" }} >
            <div className="project-name-container">
              <div><img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="" /></div>
              <div><div className='project-name'>Water Wastage </div></div>
            </div>
            <div className='project-imamge'><img src="https://avatars.githubusercontent.com/u/146749055?v=4" alt="" /></div>
            <div className="project-info">
              <div className="name">Nike Pantollon</div>
              <div className="price">299</div>
            </div>
            <div className="more">
              <div className="buttons">
                <button>Git</button>
                <button>Buy now </button>
              </div>
              <div className="options">
                <label htmlFor="">Options</label>
                <ul>
                  <li style={{backgroundColor:'red'}}></li>
                  <li style={{backgroundColor:'blue'}}></li>
                  <li style={{backgroundColor:'green'}}></li>
                </ul>
              </div>
            </div>
          </article>
          </div>
    </div>
  )
}

export default Projects