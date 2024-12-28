import React from 'react'
import '../css/about.css'

function About() {
  return (
    <div className='about-main' >
      <div className="grid"></div>
            {/* <h1>About</h1> */}

          {/* <section class="about-section"> */}
            <div class="about-container">
              <div class="left-side">
                <h1>Hi there, I'm Akash Bera</h1>
                <p>I build things for web, frontend, backend, DSA...</p>
                <p class="note">It would be great to connect with you!</p>
                <div class="links">
                  <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                  <a href="https://github.com" target="_blank">GitHub</a>
                </div>
              </div>
              <div class="right-side">
                <img src="https://i.ibb.co/9YQFc2M/Picsart-24-12-28-14-15-11-867.png" alt="Akash Bera" class="profile-image" />
              </div>
            </div>
          {/* </section> */}

         
    </div>
  )
}

export default About