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

    console.log('searching for', searchName);
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
        <li className="menu-btn">Home</li>
        <li className="menu-btn">Work</li>
        <li className="menu-btn">Contact</li>
      </ul>
    </div>
  );
}
