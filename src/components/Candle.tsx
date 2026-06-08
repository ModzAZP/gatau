import { useState, useEffect } from 'react';
import '../styles/Candle.css';

interface CandleProps {
  isLit: boolean;
  onBlowOut: () => void;
  delay: number;
}

function Candle({ isLit, onBlowOut, delay }: CandleProps) {
  const [isBlowing, setIsBlowing] = useState(false);

  // PERBAIKAN: Sinkronisasi status blowing jika lilin di-reset dari luar (tombol reset)
  useEffect(() => {
    if (isLit) {
      setIsBlowing(false);
    }
  }, [isLit]);

  const handleClick = () => {
    // Jika lilin masih menyala dan sedang tidak dalam proses ditiup
    if (isLit && !isBlowing) {
      setIsBlowing(true);
      
      // Jalankan fungsi padam dari parent (App.tsx) SEGERA agar indeks tidak tertukar
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
      {/* PERBAIKAN: Api tetap dirender saat isBlowing=true 
        agar animasi 'blow-out' di CSS sempat berjalan dengan mulus 
      */}
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
