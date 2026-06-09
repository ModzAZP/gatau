import { useState, useEffect } from 'react';
import '../styles/Candle.css';

interface CandleProps {
  isLit: boolean;
  onBlowOut: () => void;
  delay: number;
}

function Candle({ isLit, onBlowOut, delay }: CandleProps) {
  const [isBlowing, setIsBlowing] = useState(false);

  useEffect(() => {
    if (isLit) {
      setIsBlowing(false);
    }
  }, [isLit]);

  const handleClick = () => {
    if (isLit && !isBlowing) {
      setIsBlowing(true);
      onBlowOut(); 
    }
  };

  return (
    <div 
      className={`candle ${isLit ? 'lit' : 'out'} ${isBlowing ? 'blowing' : ''}`}
      onClick={handleClick}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="candle-stick">
        <div className="candle-stripe"></div>
        <div className="wick"></div>
      </div>
      
      {(isLit || isBlowing) && (
        <div className="flame-container">
          <div className="flame">
            <div className="flame-inner"></div>
          </div>
          <div className="glow"></div>
        </div>
      )}
    </div>
  );
}

export default Candle;
