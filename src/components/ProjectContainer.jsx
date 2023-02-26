import React from 'react';
import '../styles/projectContainer.css';

export default function ProjectContainer() {
  return (
    <div className="project-container" id="project-container">
      <header className="project-header">Below are a few of my projects</header>
      <div className="container">
        <div className="project">project 1</div>
        <div className="project">project 2</div>
        <div className="project">project 3</div>
        <div className="project">project 4</div>
        <div className="project">project 5</div>
        <div className="project">project 6</div>
      </div>
    </div>
  );
}
