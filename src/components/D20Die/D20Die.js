import React, { useState, useEffect } from 'react';
import './D20Die.css';

const D20Die = ({ onRollComplete }) => {
  const [isRolling, setIsRolling] = useState(true);
  const [finalNumber, setFinalNumber] = useState(null);
  const [rollClass, setRollClass] = useState('rolling');
  
  useEffect(() => {
    // Generate random number immediately but don't show it yet
    const rolledNumber = Math.floor(Math.random() * 20) + 1;
    
    // Start rolling animation, then settle after 3 seconds
    const timer = setTimeout(() => {
      setFinalNumber(rolledNumber);
      setIsRolling(false);
      setRollClass('settled');
      
      // Call completion callback after another second
      setTimeout(() => {
        if (onRollComplete) onRollComplete(rolledNumber);
      }, 1000);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onRollComplete]);

  return (
    <div className="d20-container">
      <div className={`d20-die ${rollClass}`}>
        <div className="d20-face d20-face-front">
          <div className="face-content">{!isRolling ? finalNumber : '?'}</div>
        </div>
        <div className="d20-face d20-face-back">
          <div className="face-content">D20</div>
        </div>
        <div className="d20-face d20-face-right">
          <div className="face-content">⚔️</div>
        </div>
        <div className="d20-face d20-face-left">
          <div className="face-content">🏰</div>
        </div>
        <div className="d20-face d20-face-top">
          <div className="face-content">🔮</div>
        </div>
        <div className="d20-face d20-face-bottom">
          <div className="face-content">⭐</div>
        </div>
      </div>
      
      {!isRolling && finalNumber && (
        <div className="roll-result">
          <div className="result-number">{finalNumber}</div>
          <div className="result-text">Rolled!</div>
        </div>
      )}
    </div>
  );
};

export default D20Die;