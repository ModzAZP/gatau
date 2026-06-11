import { useState, useEffect } from 'react';
import BirthdayCake from './components/BirthdayCake';
import Confetti from './components/Confetti';
import MusicToggle from './components/MusicToggle';
import Title from './components/Title';
import Message from './components/Message';
import './styles/App.css';

function App() {
  // 1. UBAH: State berupa array boolean [true, true, true, true, true]
  const [candles, setCandles] = useState<boolean[]>([true, true, true, true, true]);
  const [allBlownOut, setAllBlownOut] = useState(false);
  const [showWish, setShowWish] = useState(false);

  // 2. Hitung berapa banyak lilin yang masih menyala (true)
  const activeCandlesCount = candles.filter(isLit => isLit).length;

  useEffect(() => {
    // Jika jumlah lilin yang menyala sudah 0
    if (activeCandlesCount === 0 && !allBlownOut) {
      setAllBlownOut(true);
      setTimeout(() => setShowWish(true), 500);
    }
  }, [activeCandlesCount, allBlownOut]);

  // 3. UBAH: Matikan lilin spesifik berdasarkan indeks yang diklik
  const blowOutCandle = (indexToBlow: number) => {
    setCandles(prevCandles => 
      prevCandles.map((isLit, i) => (i === indexToBlow ? false : isLit))
    );
  };

  // 4. UBAH: Reset semua lilin kembali ke true
  const resetCandles = () => {
    setCandles([true, true, true, true, true]);
    setAllBlownOut(false);
    setShowWish(false);
  };

  return (
    <div className="app">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <Confetti active={allBlownOut} />
      
      <MusicToggle />
      
      <main className="container">
        <Title />
        
        {/* OPER PROPS BARU KE BIRTHDAYCAKE */}
        <BirthdayCake 
          candles={candles} 
          onBlowOut={blowOutCandle}
          allBlownOut={allBlownOut}
        />
        
        <Message showWish={showWish} />
        
        {allBlownOut && (
          <button className="reset-btn" onClick={resetCandles}>
            Light Candles Again
          </button>
        )}
        
        {!allBlownOut && (
          <p className="instruction">Click the candles to blow them out!</p>
        )}
      </main>
    </div>
  );
}

export default App;
