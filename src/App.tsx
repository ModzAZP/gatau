import { useState, useEffect } from 'react';
import BirthdayCake from './components/BirthdayCake';
import Confetti from './components/Confetti';
import MusicToggle from './components/MusicToggle';
import Title from './components/Title';
import Message from './components/Message';
import './styles/App.css';

function App() {
  const [candlesLit, setCandlesLit] = useState(5);
  const [allBlownOut, setAllBlownOut] = useState(false);
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    if (candlesLit === 0 && !allBlownOut) {
      setAllBlownOut(true);
      setTimeout(() => setShowWish(true), 500);
    }
  }, [candlesLit, allBlownOut]);

  const blowOutCandle = () => {
    if (candlesLit > 0) {
      setCandlesLit(prev => prev - 1);
    }
  };

  const resetCandles = () => {
    setCandlesLit(5);
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
        
        <BirthdayCake 
          candlesLit={candlesLit} 
          onBlowOut={blowOutCandle}
          allBlownOut={allBlownOut}
        />
        
        <Message showWish={showWish} />
        
        {allBlownOut && (
          <button className="reset-btn" onClick={resetCandles}>
            🎂 Light Candles Again
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
