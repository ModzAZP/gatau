import '../styles/Message.css';

interface MessageProps {
  showWish: boolean;
}

function Message({ showWish }: MessageProps) {
  return (
    <div className={`message-container ${showWish ? 'visible' : ''}`}>
      <div className="message-card">
        <p className="message-text">
          🌟 May all your dreams come true! 🌟
        </p>
        <p className="message-subtext">
          Wishing you a year filled with love, happiness, and endless joy!
        </p>
        <div className="message-hearts">
          <span>💕</span>
          <span>🎂</span>
          <span>💕</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
