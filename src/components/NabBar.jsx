import React from 'react';
import '../styles/navbar.css';
import data from '../data/projects.json';
import MyContext from '../context/MyContext';

export default function NabBar() {
  const { setMyData } = React.useContext(MyContext);

  const handleSearch = (searchName) => {
    if (searchName === '') {
      setMyData([...data]);
      return;
    }

    const holder = data.filter((piece) =>
      piece.title.toLowerCase().includes(searchName.toLowerCase())
    );
    setMyData([...holder]);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="profile-icon" />

      <form
        className="nav-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(e.target.elements.search_input.value);
          e.target.elements.search_input.value = '';
        }}
      >
        <input
          className="search-input"
          id="search_input"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Projects"
        />
        <button className="search-btn" type="submit">
          search
        </button>
      </form>

      <ul className="menu-list">
        <a className="menu-btn" href="#hero">
          <li>Home</li>
        </a>
        <a className="menu-btn" href="#project-container">
          <li className="menu-btn">Work</li>
        </a>
        <a className="menu-btn" href="#footer">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}
