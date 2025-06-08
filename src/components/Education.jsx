import React, { useContext ,useEffect ,useState} from 'react'
import { ThemeContext } from '../assets/ThemeContext';
import { motion } from 'framer-motion';
import './education.css';

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();
    
    // Event listener for resizing
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


    const DesktopVersion = () => (
    <div className="education-container dark-theme">
      {/* <h2>Education Journey</h2> */}
      <div className="timeline-wrapper">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 800 400"
          className="timeline-svg"
        >
          {/* School 1 - High School */}
          
          <g className="school-item" transform="translate(100, 100)">
            <foreignObject x="-42" y="-45" width="140" height="140">
              <div className="outher-glass-effect">
                <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <g fill="none" stroke=" #665af0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M14 22v-4a2 2 0 1 0-4 0v4"/>
                  <path d="m18 10l3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10m12-5v17M4 6l7.106-3.553a2 2 0 0 1 1.788 0L20 6M6 5v17"/>
                  <circle cx="12" cy="9" r="2"/>
                </g>
              </svg>
              </div></div>
            </foreignObject>
            <text x="0" y="50" className="school-name">Kismat Dirghagram High School</text>
            <text x="0" y="70" className="school-details">2014-2020</text>
            <foreignObject x="-60" y="75" width="200" height="30">
              <text x="0" y="90" className="badge">Marks : 93.2%</text>
            </foreignObject>
          </g>

          {/* School 2 - University */}
          <g className="school-item" transform="translate(400, 150)">
            <foreignObject x="-40" y="-45" width="140" height="140">
                <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill=" #665af0" d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1m-7 8v-4h-4v4H7V4h10v14z"/>
                <path fill="#4493f8" d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"/>
              </svg>
              </div>
            </foreignObject>
            <text x="0" y="50" className="school-name">Kharar Sri Aurobindo High School</text>
            <text x="0" y="70" className="school-details">2020-2022</text>
               <foreignObject x="-60" y="75" width="200" height="30">
              <text x="0" y="90" className="badge">Marks : 91.2%</text>
              </foreignObject>
          </g>

          {/* School 3 - Graduate School */}
          <g className="school-item" transform="translate(700, 100)">
            <foreignObject x="-40" y="-45" width="120" height="120">
                <div className="glass-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15">
                <path fill=" #665af0" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3z"/>
              </svg>
              </div>
            </foreignObject>
            <text x="0" y="50" className="school-name">
              <tspan x="0" dy="0">University of Engineering & Management,</tspan>
              <tspan x="0" dy="20"> Jaipur</tspan>
            </text>

            <text x="0" y="90" className="school-details ">2022-2026</text>

            <foreignObject x="-50" y="100" width="200" height="30">
              <text x="0" y="90" className="badge">CGPA : 8.9</text>
            </foreignObject>
          </g>

          {/* Curved Arrow from School 1 to School 2 */}
            <path
            d="M140,100 C240,140 320,140 335,180"
            fill="none"
            className="arrow-path"
            markerUnits="strokeWidth"
            markerEnd="url(#arrowhead-60)"
            />

            {/* Curved Arrow from School 2 to School 3 */}
            <path
            d="M445,175 C520,110 610,125 652,92"

            fill="none"
            className="arrow-path"
            markerEnd="url(#arrowhead-default)"
            />

            {/* Arrowhead definitions */}
            <defs>

            <marker
            id="arrowhead-60"
            markerWidth="10"
            markerHeight="7"
            refX="4.8"
            refY="4.5"
            orient="50"
          >
            <path d="M0,0 Q10,3.5 0,7" fill="#bb86fc" className="arrowhead"/>
          </marker>

          <marker
            id="arrowhead-default"
            markerWidth="10"
            markerHeight="7"
            refX="5"
            refY="3.5"
            orient="-35"
          >
            <path d="M0,0 Q10,3.5 0,7" fill="#bb86fc" className="arrowhead"/>
          </marker>

            </defs>
        </svg>
      </div>
    </div>
  )

const MobileVersion = () => (
    <div className="timeline-wrapper-mobile">
        <svg width="100%" height="550" viewBox="0 0 400 550" className="mobile-timeline">
            {/* School 1 - Top Left */}
            <g className="school-item" transform="translate(60, 80)">
            <foreignObject x="-40" y="-45" width="120" height="120">
                <div className="outher-glass-effect">
                <div className="glass-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke=" #665af0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M14 22v-4a2 2 0 1 0-4 0v4"/>
                    <path d="m18 10l3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10m12-5v17M4 6l7.106-3.553a2 2 0 0 1 1.788 0L20 6M6 5v17"/>
                    <circle cx="12" cy="9" r="2"/>
                </g>
                </svg>
                </div></div>
            </foreignObject>
           <text x="0" y="50" className="school-name">
            <tspan x="0" dy="0">Kismat Dirghagram</tspan>
            <tspan x="0" dy="20">High School</tspan>
          </text>

            <text x="0" y="90" className="school-name batch-year" fill="#ffffff">2014–2020</text>
            <foreignObject x="-65" y="100" width="200" height="30">
              <text x="0" y="90" className="badge">Marks : 93.2%</text>
            </foreignObject>

            </g>

            {/* School 2 - Middle Right (pushed further right) */}
            <g className="school-item" transform="translate(315, 200)"> {/* Changed from 250,200 */}
            <foreignObject x="-40" y="-40" width="120" height="120">
                <div className="glass-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill=" #665af0" d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1m-7 8v-4h-4v4H7V4h10v14z"/>
                <path fill="#4493f8" d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"/>
                </svg></div>
            </foreignObject>
            <text x="0" y="55" className="school-name">
              <tspan x="0" dy="0">Kharar Sri Aurobindo</tspan>
              <tspan x="0" dy="20">High School</tspan>
            </text>

            <text x="0" y="95" className="school-name batch-year">2020-2022</text>
             <foreignObject x="-60" y="105" width="200" height="30">
              <text x="0" y="90" className="badge">Marks : 91.2%</text>
              </foreignObject>
            </g>

            {/* School 3 - Bottom Left */}
            <g className="school-item" transform="translate(80, 375)"> {/* Adjusted down from 350 */}
            <foreignObject x="-40" y="-45" width="120" height="120">
                <div className="glass-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                <path fill=" #665af0" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3z"/>
                </svg></div>
            </foreignObject>
            <text x="0" y="50" className="school-name">
              <tspan x="0" dy="0">University of Engineering </tspan>
              <tspan x="0" dy="20">& Management, Jaipur</tspan>
            </text>

            <text x="0" y="90" className="school-name batch-year">2022-2026</text>
            <foreignObject x="-50" y="100" width="200" height="30">
              <text x="0" y="90" className="badge">CGPA : 8.9</text>
            </foreignObject>
            </g>

            {/* More Dramatically Curved Arrows */}
            {/* Top-left → Middle-right */}
            <path
             d="M100,100 C130,60 220,140 260,155"
            className="mobile-arrow"
            markerEnd="url(#mobile-arrowhead)"
            />

            {/* Middle-right → Bottom-left */}
      
            <path
            d="M300,330 C320,350 250,380 130,400"
            className="mobile-arrow"
            markerEnd="url(#mobile-arrowhead)"
          />


            <defs>
            <marker
                id="mobile-arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="5"
                refY="3.5"
                orient="auto"
            >
                {/* <polygon points="0 0, 10 3.5, 0 7" className="arrowhead" /> */}
                 <path d="M0,0 Q10,3.5 0,7" fill="#bb86fc" className="arrowhead"/>
            </marker>
            </defs>
        </svg>
  </div>
);

    return (
    <div className="education-container dark-theme">
      <h2 >Education Journey</h2>
      <div className="timeline-wrapper">
        {isMobile ? <MobileVersion /> : <DesktopVersion />}
      </div>
    </div>
  );
};
export default Education ; 