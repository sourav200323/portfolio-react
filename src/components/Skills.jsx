import React , { useRef, useState , useEffect } from 'react'
import './skills.css'
import Threecard from '../SupportingComonent/Threecard'  

function Skills() {

  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const autoScrollTimer = useRef(null);
  const isUserInteracting = useRef(false);
  const inactivityTimer = useRef(null);



  // Check scroll position
  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    setShowLeft(container.scrollLeft > 0);
    setShowRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
  };

  // Manual scroll
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 450;
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

    if (direction === 'right' && isAtEnd) {
      // Loop to start
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Normal scroll
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }

    // Reset interaction flag
    handleUserInteraction();
  };

  // Auto-scroll
  const startAutoScroll = () => {
    clearTimeout(autoScrollTimer.current);
    autoScrollTimer.current = setInterval(() => {
      if (!isUserInteracting.current) {
        scroll('right');
      }
    }, 3000); // Adjust timing (3 seconds)
  };

  // Handle user interaction
  const handleUserInteraction = () => {
    isUserInteracting.current = true;
    clearTimeout(inactivityTimer.current);
    
    // Resume after 5 seconds of inactivity
    inactivityTimer.current = setTimeout(() => {
      isUserInteracting.current = false;
      startAutoScroll();
    }, 3000);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initial setup
    checkScroll();
    container.addEventListener('scroll', checkScroll);
    
    // Mouse events
    container.addEventListener('mousedown', () => isUserInteracting.current = true);
    container.addEventListener('mouseup', handleUserInteraction);
    container.addEventListener('touchstart', () => isUserInteracting.current = true);
    container.addEventListener('touchend', handleUserInteraction);

    // Start auto-scroll
    startAutoScroll();

    return () => {
      container.removeEventListener('scroll', checkScroll);
      container.removeEventListener('mousedown', () => isUserInteracting.current = true);
      container.removeEventListener('mouseup', handleUserInteraction);
      container.removeEventListener('touchstart', () => isUserInteracting.current = true);
      container.removeEventListener('touchend', handleUserInteraction);
      clearInterval(autoScrollTimer.current);
      clearTimeout(inactivityTimer.current);
    };
  }, []);
        const react_native = (
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react-native"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" /><path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" /><path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" /><path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" /><path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" /><path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" /><path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" /></svg>
        )
        const type_script= (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-ts"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M3.5 15h3" /><path d="M5 15v6" /></svg>)
        const java = (
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m15.638 4.566l.056.032c-.758.4-2.924 1.69-2.924 3.332c0 .554.317 1.088.614 1.59c.262.442.509.858.509 1.238c0 .957-.933 1.7-1.46 2.042l-.1-.058c.199-.243.444-.65.444-1.084c0-.598-.307-1.076-.618-1.561c-.322-.501-.648-1.01-.648-1.67c0-2.292 3.115-3.522 4.127-3.861m-4.095 1.212c1.253-1.12 2.622-2.344 2.622-4.185c0-.833-.341-1.365-.51-1.578L13.6.046c.04.166.1.472.1.872c0 1.676-1.422 2.85-2.798 3.988C9.611 5.974 8.36 7.008 8.36 8.392c0 1.985 1.958 3.206 2.785 3.722l.063.04l.05-.03q-.067-.074-.142-.152c-.636-.677-1.602-1.704-1.602-3.275c0-1.103.974-1.974 2.03-2.919m-.452 9.908c1.764 0 2.998-.253 3.546-.408l.832.48c-.793.403-2.551.71-4.382.71c-2.153 0-4.507-.462-4.514-1.078c-.005-.34.765-.566 1.595-.712l.05.029s-.281.101-.278.333c.004.35 1.42.646 3.15.646m-3.529 2.171c0-.407.839-.6 1.223-.677l.05.03c-.066.049-.102.116-.102.173c0 .267.93.511 2.356.511c1.278 0 1.988-.157 2.41-.258l.99.573c-.045.032-1.02.645-3.402.645c-1.731 0-3.525-.432-3.525-.997m8.529-1.728c1.18-.673 2.361-1.469 2.428-2.747c.044-.839-.727-1.454-1.57-1.29l.045-.112v-.002c.212-.064.474-.116.767-.116c.943 0 1.666.565 1.758 1.356c.186 1.586-2.062 2.618-3.321 2.973zm1.975 2.988c.01 1.09-3.698 1.738-7.012 1.767c-2.861.025-7.474-.515-7.484-1.605c-.006-.753 2-1.274 3.09-1.424l.115.065s-1.625.377-1.62 1.062c.006.683 3.425 1.274 5.894 1.253c3.825-.034 6.414-.657 6.72-1.502l.054-.031c.112.082.24.217.243.415M6.43 21.337a26 26 0 0 0 4.279.325c6.208-.054 7.96-1.58 8.23-1.912l.047.028c-.064 1.208-3.347 2.212-7.396 2.247c-2.061.018-3.937-.22-5.285-.615zm2.602-9.283c-1.079.083-3.396.426-3.396 1.036c0 .462 2.124 1.113 5.452 1.113c2.994 0 4.884-.565 5.325-.78l-.643-.375c-.46.125-2.169.506-4.682.506c-1.48 0-4.03-.273-4.03-.69c0-.374 1.591-.662 2.048-.745l.029-.005z"/></svg>
        )
        const vscode = (
          <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vscode"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3v18l4 -2.5v-13z" /><path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" /><path d="M16 16.5l-11 -10l-2 1l13 13.5" /></svg>
      )
      const firebase = (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" stroke-linejoin="round" d="m2.5 11.5l9-8l1 9l-5 2zm0 0l5-9l2 3m-7 6l1-11l3 3" stroke-width="1"/></svg>
      )
      const github = (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"/><ellipse cx="14.5" cy="9" rx="1.5" ry="1"/></g></mask><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"/></path></g><rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"/></rect></svg>
      )

      const js = (
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-12.19 145a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.84 2.83 26.4 7.66 24.16 24.97M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0"/></svg>
      )
      const wordpress = (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M3.667 12a8.33 8.33 0 0 0 4.697 7.5L4.388 8.607A8.3 8.3 0 0 0 3.667 12m8.48.729l-2.501 7.265a8.34 8.34 0 0 0 5.121-.133a1 1 0 0 1-.06-.115zm5.479-1.15a4.4 4.4 0 0 0-.687-2.298a3.9 3.9 0 0 1-.819-1.954a1.443 1.443 0 0 1 1.4-1.48q.055.002.107.008a8.33 8.33 0 0 0-12.59 1.568c.196.006.38.01.537.01c.871 0 2.22-.106 2.22-.106a.345.345 0 0 1 .054.687s-.452.052-.954.079l3.035 9.026l1.824-5.47l-1.299-3.556c-.449-.027-.874-.08-.874-.08a.345.345 0 0 1 .053-.686s1.376.106 2.195.106c.871 0 2.221-.106 2.221-.106a.344.344 0 0 1 .053.687s-.452.052-.953.079l3.011 8.958l.86-2.725c.336-.88.54-1.806.606-2.746m1.743-2.72a7.9 7.9 0 0 1-.634 2.985l-2.545 7.359a8.334 8.334 0 0 0 3.123-11.2q.056.426.056.856M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m3.659 18.662a9.39 9.39 0 0 1-8.914-.867a9.43 9.43 0 0 1-3.407-4.136a9.39 9.39 0 0 1 .867-8.914a9.43 9.43 0 0 1 4.136-3.406a9.39 9.39 0 0 1 8.914.866a9.43 9.43 0 0 1 3.407 4.136a9.39 9.39 0 0 1-.867 8.914a9.43 9.43 0 0 1-4.136 3.407"/></svg>
      )
      const chatgpt = (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linejoin="round" d="M18.38 27.94v-14.4l11.19-6.46c6.2-3.58 17.3 5.25 12.64 13.33" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linejoin="round" d="m18.38 20.94l12.47-7.2l11.19 6.46c6.2 3.58 4.1 17.61-5.23 17.61" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linejoin="round" d="m24.44 17.44l12.47 7.2v12.93c0 7.16-13.2 12.36-17.86 4.28" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linejoin="round" d="M30.5 21.2v14.14L19.31 41.8c-6.2 3.58-17.3-5.25-12.64-13.33" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linejoin="round" d="m30.5 27.94l-12.47 7.2l-11.19-6.46c-6.21-3.59-4.11-17.61 5.22-17.61" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linejoin="round" d="m24.44 31.44l-12.47-7.2V11.31c0-7.16 13.2-12.36 17.86-4.28" stroke-width="1"/></svg>
      )
    const canva = (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.563 22.611L31.341 28.5l-2.223-5.889M20.9 26.278a2.23 2.23 0 0 1-2.223 2.222h0a2.23 2.23 0 0 1-2.222-2.222v-1.445a2.23 2.23 0 0 1 2.222-2.222h0a2.23 2.23 0 0 1 2.223 2.222m0 3.667v-5.889m6.63 5.889v-3.667a2.23 2.23 0 0 0-2.222-2.222h0a2.23 2.23 0 0 0-2.222 2.222V28.5m0-3.667v-2.222m-8.67 2.889a2.99 2.99 0 0 1-3 3h0a2.99 2.99 0 0 1-3-3v-3a2.99 2.99 0 0 1 3-3h0a2.895 2.895 0 0 1 2.89 3h0m25.278 3.778A2.23 2.23 0 0 1 37.36 28.5h0a2.23 2.23 0 0 1-2.222-2.222v-1.445a2.23 2.23 0 0 1 2.222-2.222h0a2.23 2.23 0 0 1 2.223 2.222m.001 3.667v-5.889" stroke-width="1"/><circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></svg>
    )
  return (
    <>
    
<div className="skills-bg-grid"></div> 
    <div className="skills-container">
      
        <h2>Technical Proficiency </h2>
        
  <div className="header-badge"><p className='animated-gradient-text'>Primary Technical Domains</p></div>

      
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon-container">
            <p><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg></p>
          </div>
          <h6 className="skill-heading">Mobile Development</h6>
          <div className="skill-description">
            Experienced in <p style={{fontWeight:'700' , color:'#58cddc' , display:' inline'}}>React Native</p> ,<p style={{fontWeight:'700' , color:'#ff9101ff' , display:' inline'}}> TypeScript </p> , delivering polished, production-ready apps.
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon-container">
            <p><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-webflow"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 10s-1.376 3.606 -1.5 4c-.046 -.4 -1.5 -8 -1.5 -8c-2.627 0 -3.766 1.562 -4.5 3.5c0 0 -1.843 4.593 -2 5c-.013 -.368 -.5 -4.5 -.5 -4.5c-.15 -2.371 -2.211 -3.98 -4 -3.98l2 12.98c2.745 -.013 4.72 -1.562 5.5 -3.5c0 0 1.44 -4.3 1.5 -4.5c.013 .18 1 8 1 8c2.758 0 4.694 -1.626 5.5 -3.5l3.5 -9.5c-2.732 0 -4.253 2.055 -5 4z" /></svg></p>
          </div>
          <h6 className="skill-heading">Frontend Dev</h6>
          <div className="skill-description">
            Proficient in <p style={{fontWeight:'700' , color:'#58cddc' , display:' inline'}}>React</p> ,<p style={{fontWeight:'700' , color:'rgb(99, 102, 241)' , display:' inline'}}> CSS</p>,<p style={{fontWeight:'700' , color:'#ffb701ff' , display:' inline'}}> JavaScript</p> creating modern, responsive interfaces.
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon-container">
            <p><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg></p>
          </div>
          <h6 className="skill-heading">Backend API Dev </h6>
          <div className="skill-description">
            Experienced with <p style={{fontWeight:'700' , color:'#68A063' , display:' inline'}}>Node.js</p> ,<p style={{fontWeight:'700' , color:'#888888' , display:' inline'}}>Express</p>  , and <p style={{fontWeight:'700' , color:'#4DB33D' , display:' inline'}}>MongoDB</p>  for robust backend systems.
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-icon-container">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v9H3v-9Zm18 0v2h-2v7h-2v-7h-2v-2Zm-11-2a7.54 7.54 0 0 1 3.96 1.149l1.447-1.45A9.5 9.5 0 0 0 12 9a9.36 9.36 0 0 0-5.333 1.68l1.449 1.453A7.36 7.36 0 0 1 12 11"/><path fill="currentColor" d="M12 7a11.5 11.5 0 0 1 6.834 2.27l1.427-1.43A13.48 13.48 0 0 0 12 5a13.33 13.33 0 0 0-8.186 2.822l1.426 1.43A11.34 11.34 0 0 1 12 7"/><path fill="currentColor" d="M12 3a15.47 15.47 0 0 1 9.687 3.41l1.427-1.429A17.43 17.43 0 0 0 .96 4.964l1.427 1.429A15.33 15.33 0 0 1 12 3m0 10a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 13m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 20"/></svg></p>
          </div>
          <h6 className="skill-heading">IoT</h6>
          <div className="skill-description">
            Experienced in IoT development with <p style={{fontWeight:'700' , color:'#00979D' , display:' inline'}}> Arduino</p> , <p style={{fontWeight:'700' , color:'#665af0' , display:' inline'}}>NodeMCU</p>, and <p style={{fontWeight:'700' , color:'#FFCA28' , display:' inline'}}>Firebase</p> real-time integration
          </div>
        </div>
        {/* <div className="skill-card">
          <div className="skill-icon-container">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.147a5 5 0 0 0-.65-.107a7.492 7.492 0 0 0-14-2A6 6 0 0 0 4 4.365A5.98 5.98 0 0 0 4 15.65v-2.204a3.976 3.976 0 0 1 0-6.901a3.9 3.9 0 0 1 1.56-.515l1.07-.11l.5-.95a5.487 5.487 0 0 1 10.26 1.46l.3 1.5l1.53.11a3 3 0 0 1 .78.171a2.963 2.963 0 0 1 0 5.604v2.084a4.972 4.972 0 0 0 0-9.752"/><path fill="currentColor" d="M6 10v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5m2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5M6 17v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5m2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5"/></svg></p>
          </div>
          <h6 className="skill-heading">Cloud Computing</h6>
          <div className="skill-description">
           Proficient in cloud computing with <p style={{fontWeight:'700' , color:'#FF9900' , display:' inline'}}>AWS</p> , including hands-on experience with <p style={{fontWeight:'700' , color:'#F58536' , display:' inline'}}>EC2</p> and <p style={{fontWeight:'700' , color:'#569A31' , display:' inline'}}>S3</p>.
          </div>
        </div> */}
      </div>

   

  <div className="bracket-container ">
    <div className="header-badge"><p className='animated-gradient-text'>Languages & Daily Drivers</p></div>
    
      <div className='tool-language-container'>
        < Tool_Language_Card name = {'React-Native'} working = {'Building Mobile Apps'} icon= {react_native}/>
        < Tool_Language_Card name = {'Java'} working = {'Programming language & OOPS'} icon= {java}/>
        < Tool_Language_Card name = {'TypeScript'} working = {'Strongly typed, strongly built'} icon= {type_script}/>
   < Tool_Language_Card name = {'Canva'} working = {'Collaborate on code repositories'} icon= {canva}/>
        < Tool_Language_Card name = {'VS Code '} working = {'Code Editor'} icon= {vscode}/>
        < Tool_Language_Card name = {'Firebase'} working = {'App Dev SDK'} icon= {firebase}/>
        < Tool_Language_Card name = {'JavaScript'} working = {'Programming language for web pages'} icon= {js}/>
        < Tool_Language_Card name = {'Wordpress'} working = {'Building and managing websitess'} icon= {wordpress}/>
        < Tool_Language_Card name = {'Chat GPT'} working = {'Building and managing websitess'} icon= {chatgpt}/>
        < Tool_Language_Card name = {'Github'} working = {'Collaborate on code repositories'} icon= {github}/>
     
      </div>
  </div>
  <div className="header-badge"><p className='animated-gradient-text'>Key Subject Mastery</p></div>


    <div className="stats-wrapper">
   
      <button onClick={() => scroll('left')}  className={`scroll-btn left ${!showLeft && 'hidden'}`}><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20" height="20" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"/></svg></button>
      <div class="stats-container" ref={scrollRef}>


    <div className='inside-stats-container'></div>
      
      <Threecard title = {'Problem Solving & DSA'} liItem1 ={'Proficient in implementing arrays, linked lists, stacks, queues'} liItem2 = {'Strong foundation in sorting and searching algorithms'} liItem3 = {'Familiar with recursion, greedy algorithms, and divide-and-conquer'}  subCode = {'dsa'} iconSource = {'https://i.ibb.co/qM8JV8cp/idea-1.png'} />

      <Threecard title = {'Computer Networks'} liItem1 ={'Understanding of OSI and TCP/IP networking models'} liItem2 = {'Proficient in IP addressing, subnetting, and routing techniques'} liItem3 = {'Experience in configuration and management of routers and switches'}  subCode = {'cn'} iconSource = {'https://i.ibb.co/39FcVNpX/network-switch.png'} />

      <Threecard title = {'Database Management'} liItem1 ={'SQL queries for data retrieval and manipulation'} liItem2 = {'Worked with relational databases like MySQL'} liItem3 = {'Deploy and serve web applications using Apache'}  subCode = {'sql'} iconSource = {'https://i.ibb.co/M58bqL3Y/sql-2.png'} />

      <Threecard title = {'Cloud Computing'} liItem1 ={'Familiar with major cloud platforms like AWS'} liItem2 = {'Deploy and manage web applications on AWS EC2'} liItem3 = {'Utilize Amazon S3 for scalable media storage'}  subCode = {'cc'} iconSource = {'https://i.ibb.co/qL5DFDZ3/cloud-server.png'} />

      <Threecard title = {'Operating System'} liItem1 ={'OS fundamentals: processes, threads, memory management'} liItem2 = {'Understanding of file systems, I/O operations, and system calls'} liItem3 = {'Knowledge of scheduling algorithms and deadlock concepts'}  subCode = {'os'} iconSource = {'https://i.ibb.co/rR353GkW/operating-system.png'} />
      
      <Threecard title = {'Object Oriented Programming (OOPS)'} liItem1 ={'Wrote clean, reusable code using encapsulation and inheritance'} liItem2 = {'Simplified complexity through abstraction.'} liItem3 = {'Built flexible systems with polymorphism.'}  subCode = {'oops'} iconSource = {'https://i.ibb.co/HT5BptfG/oops.png'} />

   
        
        <button onClick={() => scroll('right')} className={`scroll-btn right ${!showRight && 'hidden'}`}><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20" height="20" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"/></svg></button>
       </div>
      </div>

      {/* <Threecard/> */}
  
    </div>
    </>
  )
}

const Tool_Language_Card = ({name , working , icon}) => {
  return (
    <div className="language-skills-container">
      <label className="language-skill-card-label">
        <input type="checkbox" className="language-skill-checkbox" />
        <div className="language-skill-card">
          <div className="language-skill-icon-container">
            
            <div className="language-skill-icon">
              {icon}
            </div>

            <div className="language-status-indicator"></div>
          </div>

          <div className="language-skill-text">
            <p className="language-skill-name">{name}</p>
            <p className="language-skill-category">{working}</p>
          </div>

          <div className="language-skill-progress"></div>
        </div>
      </label>
    </div>
  );
};


export default Skills
