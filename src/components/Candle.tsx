import { useState } from 'react';
import '../styles/Candle.css';

interface CandleProps {
  isLit: boolean;
  onBlowOut: () => void;
  delay: number;
}

function Candle({ isLit, onBlowOut, delay }: CandleProps) {
  const [isBlowing, setIsBlowing] = useState(false);

  const handleClick = () => {
    if (isLit) {
      setIsBlowing(true);
      setTimeout(() => {
        onBlowOut();
        setIsBlowing(false);
      }, 300);
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
      {isLit && (
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
