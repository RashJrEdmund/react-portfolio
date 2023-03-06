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
              className={
                index > 5 && displayHidden
                  ? 'project hidden-project'
                  : 'project'
              }
              id={index === 5 ? 'route_to_project' : index}
            >
              <div className="sub_project">
                <div
                  className="image-holder"
                  style={{ backgroundImage: `url('${piece.img}')` }}
                />
                <p className="project_title">
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
