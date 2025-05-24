import React, { useState, useRef, useEffect } from 'react';
// import { Draggable } from 'react-draggable';
import './contact.css';
// import SendMailjetEmail from '../SupportingComonent/SendMailjetEmail.jsx'  ; 
// api : 21e048498c9e2b32d87ba0ea6dc3a9d0
// secret : 3dc2f5333ee0f8501b1d173b8a3da2c6

const Contact = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef(null);
    // const [shouldSend, setShouldSend] = useState(false);

  useEffect(() => {
    if (step <= 3 && step >1) {
      inputRef.current?.focus();
    }
  }, [step]);
  
  const handleRestart = () => {
    setStep(1);
    setEmail('');
    setName('');
    setDescription('');
    setCompleted(false);
  };
  // const handleFormSubmit = () => {
  //   // your existing logic to advance steps…
  //   // once you're ready to actually send:
  //   setShouldSend(true);
  // };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (step === 1 && email !== '') {
        setStep(2);
      } else if (step === 2 && name !== '') {
        setStep(3);
      } else if (step === 3 && description !== '') {
        // Save the description input and mark completion
        setCompleted(true);
        setStep(4); // Move to a new step to indicate completion
      }
    }
  };
  return (<>
    <h2>Contact</h2>  
    <div className='contact-container'>
      <div className='social-contact'>
        <Soclail_Contact_Card/>
      </div>
      <div className="terminal-container">      
        <div className="terminal">
          <div className="terminal-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <h3 className="terminal-title">contact@akash</h3>
          </div>
          <div className="terminal-body">
            <p className="terminal-greeting">Hey there! We're excited to link 🔗</p>

            <p className="terminal-question">
              {step >= 1 ? (
                <>
                  To start, could you give us <span className="terminal-highlight">your email?</span>
                </>
              ) : (
                ''
              )}
              {step === 1 && (
                <div className='next-input'>
                  <span className="terminal-prompt"> >> Enter email:</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ color: '#4493f8' }}
                    className="terminal-input"
                  />
                </div>
              )}
              {step > 1 && <p className="terminal-success">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.87"
                  style={{ enableBackground: 'new 0 0 122.88 122.87' }} // Corrected style
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M32.82,51.34l14.99-0.2l1.12,0.29c3.03,1.74,5.88,3.74,8.54,5.99c1.92,1.63,3.76,3.4,5.5,5.32 c5.38-8.65,11.11-16.6,17.16-23.9c6.63-8,13.66-15.27,21.05-21.9l1.46-0.56h16.36l-3.3,3.66c-10.13,11.26-19.33,22.9-27.64,34.9 C79.74,66.97,72.31,79.37,65.7,92.13l-2.06,3.97l-1.89-4.04c-3.49-7.48-7.66-14.35-12.64-20.49c-4.98-6.14-10.77-11.59-17.52-16.22 L32.82,51.34L32.82,51.34L32.82,51.34z"
                    />
                    <path
                      className="st1"
                      d="M61.44,0c9.53,0,18.55,2.17,26.61,6.04c-3.3,2.61-6.36,5.11-9.21,7.53c-5.43-1.97-11.28-3.05-17.39-3.05 c-14.06,0-26.79,5.7-36,14.92c-9.21,9.22-14.92,21.94-14.92,36c0,14.06,5.7,26.78,14.92,36s21.94,14.92,36,14.92 c14.06,0,26.79-5.7,36-14.92c9.22-9.22,14.91-21.94,14.91-36c0-3.34-0.32-6.62-0.94-9.78c2.64-3.44,5.35-6.88,8.11-10.28 c2.17,6.28,3.35,13.04,3.35,20.06c0,16.96-6.88,32.33-17.99,43.44c-11.12,11.12-26.48,18-43.44,18c-16.96,0-32.32-6.88-43.44-18 C6.88,93.76,0,78.4,0,61.44C0,44.47,6.88,29.11,17.99,18C29.11,6.88,44.47,0,61.44,0L61.44,0L61.44,0z"
                    />
                  </g>
                </svg>
                {email}</p>}
            </p>

            <p className="terminal-question">
              {step >= 2 ? 
              (
                <>
                Awesome! And what's <span className="terminal-highlight">your name?</span>
                </>
              ) : (
                ''
              )}
              {step === 2 && (
                <div className='next-input'>
                  <span className="terminal-prompt"> >> Enter name:</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ color: '#4493f8' }}
                    className="terminal-input"
                  />
                </div>
              )}
              {step > 2 && <p className="terminal-success">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.87"
                  style={{ enableBackground: 'new 0 0 122.88 122.87' }} // Corrected style
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M32.82,51.34l14.99-0.2l1.12,0.29c3.03,1.74,5.88,3.74,8.54,5.99c1.92,1.63,3.76,3.4,5.5,5.32 c5.38-8.65,11.11-16.6,17.16-23.9c6.63-8,13.66-15.27,21.05-21.9l1.46-0.56h16.36l-3.3,3.66c-10.13,11.26-19.33,22.9-27.64,34.9 C79.74,66.97,72.31,79.37,65.7,92.13l-2.06,3.97l-1.89-4.04c-3.49-7.48-7.66-14.35-12.64-20.49c-4.98-6.14-10.77-11.59-17.52-16.22 L32.82,51.34L32.82,51.34L32.82,51.34z"
                    />
                    <path
                      className="st1"
                      d="M61.44,0c9.53,0,18.55,2.17,26.61,6.04c-3.3,2.61-6.36,5.11-9.21,7.53c-5.43-1.97-11.28-3.05-17.39-3.05 c-14.06,0-26.79,5.7-36,14.92c-9.21,9.22-14.92,21.94-14.92,36c0,14.06,5.7,26.78,14.92,36s21.94,14.92,36,14.92 c14.06,0,26.79-5.7,36-14.92c9.22-9.22,14.91-21.94,14.91-36c0-3.34-0.32-6.62-0.94-9.78c2.64-3.44,5.35-6.88,8.11-10.28 c2.17,6.28,3.35,13.04,3.35,20.06c0,16.96-6.88,32.33-17.99,43.44c-11.12,11.12-26.48,18-43.44,18c-16.96,0-32.32-6.88-43.44-18 C6.88,93.76,0,78.4,0,61.44C0,44.47,6.88,29.11,17.99,18C29.11,6.88,44.47,0,61.44,0L61.44,0L61.44,0z"
                    />
                  </g>
                </svg>
                {name}</p>}
            </p>

            <p className="terminal-question">
              {step >= 3 ? 
              (
                <>
                Perfect,<span className="terminal-highlight"> and how can we help you?</span>
                </>
              ) : (
                ''
              )}
              {step === 3 && (
                <div className='next-input'>
                  <span className="terminal-prompt"> >> Enter description:</span>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ color: '#4493f8' }}
                    className="terminal-input"
                  />
                </div>
              )}
              {step > 3 && <p className="terminal-success">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.87"
                  style={{ enableBackground: 'new 0 0 122.88 122.87' }} // Corrected style
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M32.82,51.34l14.99-0.2l1.12,0.29c3.03,1.74,5.88,3.74,8.54,5.99c1.92,1.63,3.76,3.4,5.5,5.32 c5.38-8.65,11.11-16.6,17.16-23.9c6.63-8,13.66-15.27,21.05-21.9l1.46-0.56h16.36l-3.3,3.66c-10.13,11.26-19.33,22.9-27.64,34.9 C79.74,66.97,72.31,79.37,65.7,92.13l-2.06,3.97l-1.89-4.04c-3.49-7.48-7.66-14.35-12.64-20.49c-4.98-6.14-10.77-11.59-17.52-16.22 L32.82,51.34L32.82,51.34L32.82,51.34z"
                    />
                    <path
                      className="st1"
                      d="M61.44,0c9.53,0,18.55,2.17,26.61,6.04c-3.3,2.61-6.36,5.11-9.21,7.53c-5.43-1.97-11.28-3.05-17.39-3.05 c-14.06,0-26.79,5.7-36,14.92c-9.21,9.22-14.92,21.94-14.92,36c0,14.06,5.7,26.78,14.92,36s21.94,14.92,36,14.92 c14.06,0,26.79-5.7,36-14.92c9.22-9.22,14.91-21.94,14.91-36c0-3.34-0.32-6.62-0.94-9.78c2.64-3.44,5.35-6.88,8.11-10.28 c2.17,6.28,3.35,13.04,3.35,20.06c0,16.96-6.88,32.33-17.99,43.44c-11.12,11.12-26.48,18-43.44,18c-16.96,0-32.32-6.88-43.44-18 C6.88,93.76,0,78.4,0,61.44C0,44.47,6.88,29.11,17.99,18C29.11,6.88,44.47,0,61.44,0L61.44,0L61.44,0z"
                    />
                  </g>
                </svg>
                {description}</p>}
            </p>

            {completed && (
              <>
                <div className="terminal-summary">
                  <p style={{ color: 'white' }}>Beautiful! Here's what we've got:</p>
                  <p className='' style={{ color: 'white' }}> <span className='final-terminal-summery'> email:</span> {email}</p>
                  <p style={{ color: 'white' }}><span className='final-terminal-summery'>name:</span> {name}</p>
                  <p style={{ color: 'white' }}><span className='final-terminal-summery'>description:</span> {description}</p>
                  <p style={{ color: 'white' }}>Look good?</p>
                  <div className="button-duo">
                    <button  onClick={handleRestart}>Restart</button>
                    <button onClick={() => handleFormSubmit()}>Send it!</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* </Draggable> */}

        {/* {shouldSend && (
        <SendMailjetEmail
          name={name}
          email={email}
          message={description}
        />
         )}
          */}
      </div>
    </div>
    </>
  );
};
export const Soclail_Contact_Card = () => {
  return (
    <section className="container">
      <div className="card-container">
        <div className="card-content">
          <div className="card-title">
            <span className="title">Social</span>
          </div>
          <div className="card-body">
            <div className="svg-card">
              <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64" width="30" height="30">
               <rect width="512" height="509.64" rx="115.61" ry="115.61"/>
                            <path fill="black" stroke='#4493f8' d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/>
                          </svg>
            </div>
            <div className="svg-card">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
                            <path fill="#4493f8" d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
                          </svg>
            </div>
            <div className="svg-card">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="#4493f8"  class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
            </div>
            <div className="svg-card">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="#4493f8"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13h7.5" /><path d="M9.424 7.268l4.999 -4.999" /><path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" /></svg>
            </div>
          </div>
          <div className="card-footer">
            <span className="title">Doors open, inbox ready <br />— let’s talk</span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;

