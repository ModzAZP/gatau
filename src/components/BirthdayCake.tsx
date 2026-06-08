import Candle from './Candle';
import '../styles/BirthdayCake.css';

interface BirthdayCakeProps {
  candlesLit: number;
  onBlowOut: () => void;
  allBlownOut: boolean;
}

function BirthdayCake({ candlesLit, onBlowOut, allBlownOut }: BirthdayCakeProps) {
  return (
    <div className="cake-wrapper">
      <div className="candles-container">
        {[...Array(5)].map((_, i) => (
          <Candle 
            key={i}
            isLit={i < candlesLit}
            onBlowOut={onBlowOut}
            delay={i * 0.1}
          />
        ))}
      </div>
      
      <div className="cake">
        <div className="cake-layer layer-top">
          <div className="frosting frosting-top"></div>
          <div className="drip drip-1"></div>
          <div className="drip drip-2"></div>
          <div className="drip drip-3"></div>
          <div className="drip drip-4"></div>
        </div>
        
        <div className="cake-layer layer-middle">
          <div className="frosting frosting-middle"></div>
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
          <div className="decoration decoration-3"></div>
        </div>
        
        <div className="cake-layer layer-bottom">
          <div className="frosting frosting-bottom"></div>
          <div className="stripe stripe-1"></div>
          <div className="stripe stripe-2"></div>
          <div className="stripe stripe-3"></div>
          <div className="stripe stripe-4"></div>
        </div>
        
        <div className="plate"></div>
      </div>
      
      {allBlownOut && (
        <div className="smoke-container">
          <div className="smoke smoke-1"></div>
          <div className="smoke smoke-2"></div>
          <div className="smoke smoke-3"></div>
        </div>
      )}
    </div>
  );
}

export default BirthdayCake;
