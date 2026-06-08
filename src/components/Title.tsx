import '../styles/Title.css';

function Title() {
  return (
    <header className="title-container">
      <h1 className="title">
        <span className="title-line">Happy</span>
        <span className="title-line birthday">Birthday!</span>
      </h1>
      <div className="decorative-line">
        <span className="star">✨</span>
        <span className="line"></span>
        <span className="star">✨</span>
      </div>
    </header>
  );
}

export default Title;
