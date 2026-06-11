import '../styles/Message.css';

interface MessageProps {
  showWish: boolean;
}

function Message({ showWish }: MessageProps) {
  return (
    <div className={`message-container ${showWish ? 'visible' : ''}`}>
      <div className="message-card">
        <p className="message-text">
          May All Your Dreams Come True!
        </p>
        <p className="message-subtext">
          Wishing You A Year Filled With Love, Happiness, And Endless Joy!
        </p>
        <div className="message-hearts">
        </div>
      </div>
    </div>
  );
}

export default Message;
