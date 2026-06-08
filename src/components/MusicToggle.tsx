import { useState, useRef, useEffect } from 'react';
import '../styles/MusicToggle.css';

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  const playBirthdayMelody = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    
    const ctx = audioContextRef.current;
    const gainNode = ctx.createGain();
    gainNode.connect(ctx.destination);
    gainNode.gain.value = 0.1;
    gainNodeRef.current = gainNode;

    // Birthday song notes (simplified)
    const notes = [
      { freq: 264, duration: 0.3 },  // C
      { freq: 264, duration: 0.3 },  // C
      { freq: 297, duration: 0.6 },  // D
      { freq: 264, duration: 0.6 },  // C
      { freq: 352, duration: 0.6 },  // F
      { freq: 330, duration: 1.2 },  // E
      { freq: 264, duration: 0.3 },  // C
      { freq: 264, duration: 0.3 },  // C
      { freq: 297, duration: 0.6 },  // D
      { freq: 264, duration: 0.6 },  // C
      { freq: 396, duration: 0.6 },  // G
      { freq: 352, duration: 1.2 },  // F
    ];

    let noteIndex = 0;
    let startTime = ctx.currentTime;

    const playNote = () => {
      if (noteIndex >= notes.length) {
        noteIndex = 0;
        startTime = ctx.currentTime;
      }

      const note = notes[noteIndex];
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = note.freq;
      osc.connect(gainNode);
      osc.start(startTime);
      osc.stop(startTime + note.duration);
      
      startTime += note.duration;
      noteIndex++;
    };

    playNote();
    intervalRef.current = window.setInterval(playNote, 400);
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      playBirthdayMelody();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <button 
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      <span className="music-icon">
        {isPlaying ? '🔊' : '🔇'}
      </span>
      <span className="music-label">
        {isPlaying ? 'Music On' : 'Music Off'}
      </span>
    </button>
  );
}

export default MusicToggle;
