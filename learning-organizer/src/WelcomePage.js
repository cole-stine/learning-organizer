import React, { useEffect } from 'react';
import './App.css'; // Make sure to have a corresponding CSS file for styling

function WelcomePage() {
  useEffect(() => {
    const letters = document.querySelectorAll('.bounce-letter');

    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="welcome-page">
      <h1>
        <span className="bounce-letter">W</span>
        <span className="bounce-letter">e</span>
        <span className="bounce-letter">l</span>
        <span className="bounce-letter">c</span>
        <span className="bounce-letter">o</span>
        <span className="bounce-letter">m</span>
        <span className="bounce-letter">e</span>
        <span className="bounce-letter">!</span>
      </h1>
    </div>
  );
}

export default WelcomePage;