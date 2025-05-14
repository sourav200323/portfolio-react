import React, { useState, useRef, useEffect } from 'react';
// import { Draggable } from 'react-draggable';
import './contact.css';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef(null);

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
    <div className="terminal-container">
       {/* <Draggable> */}
    
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
                  <button onClick={() => alert('Sent!')}>Send it!</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* </Draggable> */}
    </div>
    </>
  );
};

export default Contact;

