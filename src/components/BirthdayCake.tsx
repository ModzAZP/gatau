import Candle from './Candle';
import '../styles/BirthdayCake.css';

// UBAH: Sesuaikan tipe data props
interface BirthdayCakeProps {
  candles: boolean[]; 
  onBlowOut: (index: number) => void; 
}

function BirthdayCake({ candles, onBlowOut }: BirthdayCakeProps) {
  return (
    <div className="cake-wrapper">
      <div className="candles-container">
        {/* UBAH: Looping langsung dari array state candles */}
        {candles.map((isLit, i) => (
          <Candle 
            key={i}
            isLit={isLit}
            onBlowOut={() => onBlowOut(i)} // Mengirimkan info lilin indeks mana yang diklik
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
    </div>
  );
}

export default BirthdayCake;
