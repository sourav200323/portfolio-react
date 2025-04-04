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

                <div className="button-container">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <button className="custom-button">
                    <span className="background"></span>
                    <div className="button-content">
                      <div className="text-container">
                        <p className="button-text">
                          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64" width="25" height="25">
                            <rect width="512" height="509.64" rx="115.61" ry="115.61"/>
                            <path fill="#4493f8" d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/>
                          </svg>
                          LinkedIn
                        </p>
                      </div>
                    </div>
                  </button>
                </a>


                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <button className="custom-button">
                    <span class="background"></span>
                    <div class="button-content">
                      <div class="text-container">
                        <p class="button-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
                            <path fill="#4493f8" d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
                          </svg>
                          Github
                        </p>
                      </div>
                    </div>
                  </button>
                </a>

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