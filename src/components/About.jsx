import React, { useContext, useState, useEffect } from "react";
import "./about.css";
import { ThemeContext } from "../assets/ThemeContext";

function About() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopVersion = ({ isDarkMode }) => (
    <div className="about-main">
      <div className="grid"></div>
      {/* <section class="about-section"> */}
      <div class="about-container">
        <div class="left-side">
          <div className="hi-there">Hi there</div>
          <div className="intro-name-desk">
            <div className="name-desk">I'm </div>
            <img
              className="intro-img-desk"
              height={"40px"}
              src="https://i.ibb.co/jmT4TwM/Akash-Bera-6-8-2025.png"
              alt=""
            />
          </div>

          <div className="intro-desk">
            {/* Full Stack Developer & Problem Solver */}
            tekla master
          </div>
          <div className="descrip-desk">
           techla technologies i'm working at 
          </div>

          {/* <div className="button-container">
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
                  <a href="https://leetcode.com/u/AKASH_BERA/" target="_blank" rel="noopener noreferrer">
                  <button className="custom-button">
                    <span class="background"></span>
                        <div className={`button-content ${isDarkMode ? 'dark' :'light'}`}>
                      <div class="text-container">
                        <p class="button-text">
                       <svg xmlns="http://www.w3.org/2000/svg" width="128" height="25" viewBox="0 0 128 128"><path fill="#4493f8" d="M76.992.002C75.171-.035 73.362.627 72 1.998l-53.432 53.87c-5.19 5.237-7.904 12.464-7.904 20.454s2.715 15.447 7.904 20.674l23.004 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.095-2.731 20.295-7.969l13.803-14.064c2.72-2.742 2.625-7.281-.207-10.135s-7.334-2.948-10.049-.207l-14.273 13.904c-2.464 2.491-5.878 3.532-9.649 3.532s-7.18-1.04-9.654-3.532L29.197 86.26c-2.47-2.49-3.71-6.134-3.71-9.937s1.24-7.237 3.71-9.728l22.856-23.362c2.47-2.49 5.953-3.439 9.718-3.439c3.766 0 7.18 1.038 9.649 3.53l14.271 13.9c2.72 2.746 7.223 2.65 10.055-.203c2.832-2.86 2.927-7.398.207-10.14L82.15 32.823c-3.461-3.445-7.845-5.952-12.757-7.093l-.182-.04l13.05-13.35c2.732-2.74 2.636-7.284-.197-10.138a7.36 7.36 0 0 0-5.072-2.2M56.937 69.379c-3.712 0-6.718 3.22-6.718 7.178s3.001 7.18 6.718 7.18h53.678c3.712.005 6.72-3.217 6.72-7.18c0-3.958-3.008-7.178-6.72-7.178z"/></svg>
                          Leetcode 
                        </p>
                      </div>
                    </div>
                  </button>
                </a>

                <a href="mailto:akashbera102003@gmail.com" target="_blank" rel="noopener noreferrer">
                  <button className="gmail-Btn about-blob2">
                    <span class="gmail-svgContainer"> <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg></span>
                       <span class="gmail-BG"></span>
                  </button>
                </a>
                </div> */}
          <div className="button-container">
            <div class="tooltip-container">
              <div class="tooltip">
                <div class="tooltip-profile">
                  <div class="tooltip-user">
                    <div class="tooltip-img">
                      <img
                        src="https://avatars.githubusercontent.com/u/146749055?v=4"
                        alt=""
                        className="tooltip-img"
                      />
                    </div>
                    <div class="tooltip-details">
                      <div class="tooltip-name">User</div>
                      <div class="tooltip-username">@akash-bera-5a3009250</div>
                    </div>
                  </div>
                  <div class="tooltip-about">2500+ Connections</div>
                </div>
              </div>
              <div class="tooltip-text">
                <a
                  href="https://linkedin.com/in/akash-bera-5a3009250"
                  class="tooltip-icon"
                >
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-discord">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 512 509.64"
                        width="30"
                        height="30"
                      >
                        <rect
                          width="512"
                          height="509.64"
                          rx="115.61"
                          ry="115.61"
                        />
                        <path
                          fill="black"
                          d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="tooltip-text">LinkedIn</div>
                </a>
              </div>
            </div>

            <div class="tooltip-container">
              <div class="tooltip">
                <div class="tooltip-profile">
                  <div class="tooltip-user">
                    <div class="tooltip-img">
                      <img
                        src="https://avatars.githubusercontent.com/u/146749055?v=4"
                        alt=""
                        className="tooltip-img"
                      />
                    </div>
                    <div class="tooltip-details">
                      <div class="tooltip-name">User</div>
                      <div class="tooltip-username">@akashbera009</div>
                    </div>
                  </div>
                  <div class="tooltip-about">30+ Repositories</div>
                </div>
              </div>
              <div class="tooltip-text">
                <a href="https://github.com/akashbera009" class="tooltip-icon">
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-discord">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 640 640"
                      >
                        <path
                          fill="#5865F2"
                          d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="tooltip-text">Github</div>
                </a>
              </div>
            </div>

            <div class="tooltip-container">
              <div class="tooltip">
                <div class="tooltip-profile">
                  <div class="tooltip-user">
                    <div class="tooltip-img">
                      <img
                        src="https://avatars.githubusercontent.com/u/146749055?v=4"
                        alt=""
                        className="tooltip-img"
                      />
                    </div>
                    <div class="tooltip-details">
                      <div class="tooltip-name">User</div>
                      <div class="tooltip-username">@AKASH_BERA</div>
                    </div>
                  </div>
                  <div class="tooltip-about">55+ Solved Questions</div>
                </div>
              </div>
              <div class="tooltip-text">
                <a
                  href="https://leetcode.com/u/AKASH_BERA/"
                  class="tooltip-icon"
                >
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-discord">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill=""
                          d="M76.992.002C75.171-.035 73.362.627 72 1.998l-53.432 53.87c-5.19 5.237-7.904 12.464-7.904 20.454s2.715 15.447 7.904 20.674l23.004 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.095-2.731 20.295-7.969l13.803-14.064c2.72-2.742 2.625-7.281-.207-10.135s-7.334-2.948-10.049-.207l-14.273 13.904c-2.464 2.491-5.878 3.532-9.649 3.532s-7.18-1.04-9.654-3.532L29.197 86.26c-2.47-2.49-3.71-6.134-3.71-9.937s1.24-7.237 3.71-9.728l22.856-23.362c2.47-2.49 5.953-3.439 9.718-3.439c3.766 0 7.18 1.038 9.649 3.53l14.271 13.9c2.72 2.746 7.223 2.65 10.055-.203c2.832-2.86 2.927-7.398.207-10.14L82.15 32.823c-3.461-3.445-7.845-5.952-12.757-7.093l-.182-.04l13.05-13.35c2.732-2.74 2.636-7.284-.197-10.138a7.36 7.36 0 0 0-5.072-2.2M56.937 69.379c-3.712 0-6.718 3.22-6.718 7.178s3.001 7.18 6.718 7.18h53.678c3.712.005 6.72-3.217 6.72-7.18c0-3.958-3.008-7.178-6.72-7.178z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="tooltip-text">Leetcode</div>
                </a>
              </div>
            </div>

            <a
              href="mailto:akashbera102003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="gmail-Btn about-blob2">
                <span class="gmail-svgContainer">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </span>
                <span class="gmail-BG"></span>
              </button>
            </a>
          </div>
        </div>
        <div class="right-side">
          <img
            src="https://i.ibb.co/9YQFc2M/Picsart-24-12-28-14-15-11-867.png"
            alt="Akash Bera"
            className="profile-image"
            loading="eager"
          />
          {/* <img src="https://i.ibb.co/HfvmYrk4/profile-pic-removebg-preview.png" alt="Akash Bera" className="profile-image" loading='eager' /> */}
        </div>
      </div>
      {/* </section> */}
    </div>
  );

  const MobileVersion = ({ isDarkMode }) => {
    const [animateGreeting, setAnimateGreeting] = useState(false);
    const [showIntroName, setShowIntroName] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setAnimateGreeting(true);
      }, 300); // Delay to allow image or layout to load a bit
      return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowIntroName(true);
      }, 500); // delay to make it look polished after greeting
      return () => clearTimeout(timer);
    }, []);

    return (
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
          {/* <h1 className="name">I'm </h1> */}
          <img
            className="intro-img"
            height="40px"
            src="https://i.ibb.co/jmT4TwM/Akash-Bera-6-8-2025.png"
            alt="Akash Bera"
          />
        </div>

        <p className="intro">tekla</p>
        <p className="desc">
          Specializing in building responsive web applications with modern
          technologies
        </p>

        {/* <div className="mobile-button-container"> */}
        <div className="mobile-about-btn-grp">
          <a
            href="https://linkedin.com/in/akash-bera-5a3009250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="mobile-about-button">
              <div class="mobile-about-blob1"></div>
              <div class="mobile-about-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#4493f8"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                </svg>
                <p>LinkedIn</p>
              </div>
            </button>
          </a>
          <a
            href="https://github.com/akashbera009"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="mobile-about-button">
              <div class="mobile-about-blob1"></div>

              <div class="mobile-about-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="#4493f8"
                    d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                  />
                </svg>
                <p>Github</p>
              </div>
            </button>
          </a>

          <a
            href="mailto:akashbera102003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="gmail-Btn mobile-about-blob1 ">
              <span class="gmail-svgContainer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#0a477d"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </span>
              <span class="gmail-BG"></span>
            </button>
          </a>
        </div>

        <div className="mobile-about-btn-grp1">
          <a
            href="https://drive.google.com/file/d/1EZizpa3drJaEfgDvpqUNJt_oJ49KowZI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Download-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-file-text"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 9l1 0" />
                <path d="M9 13l6 0" />
                <path d="M9 17l6 0" />
              </svg>
              View Resume
            </button>
          </a>
        </div>
      </div>
    );
  };

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

export default About;
