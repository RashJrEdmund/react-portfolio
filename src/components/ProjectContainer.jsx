import React from 'react';
import '../styles/projectContainer.css';
import data from '../data/projects.json';

export default function ProjectContainer() {
  return (
    <div className="project-container" id="project-container">
      <header className="project-header">Past Projects Below</header>
      <div className="container">
        {data.map((piece) => {
          return (
            <a href={piece.link} target="_blank" rel="noreferrer">
              <div className="project">
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
