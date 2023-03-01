import React from 'react';
import '../styles/navbar.css';

export default function NabBar() {
  return (
    <div className="navbar" id="navbar">
      <div className="profile-icon" />

      <form
        className="nav-form"
        onSubmit={(e) => {
          e.preventDefault();
          e.target.elements.search_input.value = '';
        }}
      >
        <input
          className="search-input"
          id="search_input"
          type="text"
          placeholder="Search Projects"
        />
        <button className="search-btn" type="submit">
          search
        </button>
      </form>

      <ul className="menu-list">
        <li className="menu-btn">Home</li>
        <li className="menu-btn">Work</li>
        <li className="menu-btn">Contact</li>
      </ul>
    </div>
  );
}
