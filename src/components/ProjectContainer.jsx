import React from 'react';
import '../styles/projectContainer.css';
import MyContext from '../context/MyContext';

export default function ProjectContainer() {
  const { myData, displayHidden } = React.useContext(MyContext);
  return (
    <div className="project-container" id="project-container">
      <header className="project-header">Past Projects Below</header>
      <div className="container">
        {myData.map((piece, index) => {
          return (
            <a
              href={piece.link}
              target="_blank"
              rel="noreferrer"
              key={piece.title}
            >
              <div
                className={
                  index > 5 && displayHidden
                    ? 'project hidden-project'
                    : 'project'
                }
              >
                <div
                  className="image-holder"
                  style={{ backgroundImage: `url('${piece.img}')` }}
                />
                <p>
                  <span>&#60;</span>
                  {piece.title}
                  <span>/&#62;</span>
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
