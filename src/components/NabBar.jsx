import React from 'react';
import '../styles/navbar.css';

export default function NabBar() {
  return (
    <div className="navbar" id="navbar">
      <div className="profile-icon" />
      <ul className="menu-list">
        <li>Home</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
