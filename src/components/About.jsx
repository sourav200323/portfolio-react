import React, {useContext , useState, useEffect} from 'react'
import './about.css'
import { ThemeContext } from '../assets/ThemeContext';


function About() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const DesktopVersion = ({ isDarkMode })  => (
    <div className='about-main' >
      <div className="grid"></div>
          {/* <section class="about-section"> */}
            <div class="about-container">
              <div class="left-side">
                <h1>Hi there, I'm Akash Bera</h1>
                <p>I build things for web, frontend, backend, DSA...</p>
                <p class="note">It would be great to connect with you!</p>

                <div className="button-container">
                <a href="https://linkedin.com/in/akash-bera-5a3009250" target="_blank" rel="noopener noreferrer">
                  <button className={`custom-button ${isDarkMode ? 'dark' :'light'}`}>
                    <span className="background"></span>
                    <div className={`button-content ${isDarkMode ? 'dark' :'light'}`}>
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


                <a href="https://github.com/akashbera009" target="_blank" rel="noopener noreferrer">
                  <button className="custom-button">
                    <span class="background"></span>
                      <div className={`button-content ${isDarkMode ? 'dark' :'light'}`}>
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

                <a href="mailto:akashbera102003@gmail.com" target="_blank" rel="noopener noreferrer">
                  <button className="custom-button">
                    <span class="background"></span>
                    <div className={`button-content ${isDarkMode ? 'dark' :'light'}`}>
                      <div class="text-container">
                        <p class="button-text">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#4493f8"  class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                          Email
                        </p>
                      </div>
                    </div>
                  </button>
                </a>

                <a href="https://leetcode.com/u/AKASH_BERA/" target="_blank" rel="noopener noreferrer">
                  <button className="custom-button">
                    <span class="background"></span>
                        <div className={`button-content ${isDarkMode ? 'dark' :'light'}`}>
                      <div class="text-container">
                        <p class="button-text">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#4493f8"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13h7.5" /><path d="M9.424 7.268l4.999 -4.999" /><path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" /></svg>
                          Leetcode 
                        </p>
                      </div>
                    </div>
                  </button>
                </a>

                </div>

              </div>
              <div class="right-side">
                <img src="https://i.ibb.co/9YQFc2M/Picsart-24-12-28-14-15-11-867.png" alt="Akash Bera" class="profile-image" loading='eager' />
              </div>
            </div>
          {/* </section> */}
    </div>
  )

const MobileVersion = ({ isDarkMode }) => (
  <div className="profile-container mobile-grid">
    <div className="greeting">Hi there</div>
    
    <div className="profile-image-wrapper">
      <img
        src="https://i.ibb.co/9YQFc2M/Picsart-24-12-28-14-15-11-867.png"
        alt="Akash Bera"
        className="profile-image"
      />
    </div>
    

    <div className="intro-name">
       <h1 className="name">I'm </h1>
       <img className='intro-img' height={'40px'} src="./public/mine-image/Akash-Bera-6-8-2025.png" alt="" />
    </div>
    
    <p className="intro">
     Full Stack Developer & Problem Solver
    </p>
    <p className="desc">
     Specializing in building responsive web applications with modern technologies
    </p>

{/* <div className="mobile-button-container"> */}
  <div className="mobile-about-btn-grp">
          <a href="https://linkedin.com/in/akash-bera-5a3009250" target="_blank" rel="noopener noreferrer">
      <button class="mobile-about-button">
        <div class="mobile-about-blob1"></div>
        <div class="mobile-about-inner">                          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="#4493f8"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                          <p>
                          LinkedIn</p></div>
      </button></a>
      <a href="https://github.com/akashbera009" target="_blank" rel="noopener noreferrer">
        <button class="mobile-about-button">
          <div class="mobile-about-blob1"></div>
          
          <div class="mobile-about-inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
              <path fill="#4493f8" d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
                          </svg>
                          <p>
                            Github</p></div>
        </button>
      </a>

      <a href="mailto:akashbera102003@gmail.com" target="_blank" rel="noopener noreferrer">
      <button class="gmail-Btn mobile-about-blob1 ">
        <span class="gmail-svgContainer ">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#0a477d"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
        </span>
        <span class="gmail-BG"></span>
      </button></a>

  </div>
</div>
  // </div>
);



return (
  <div className="about-main">
    {isMobile ? (
      <MobileVersion isDarkMode={isDarkMode} />
    ) : (
      <DesktopVersion isDarkMode={isDarkMode} />
    )}
  </div>
);

}

export default About