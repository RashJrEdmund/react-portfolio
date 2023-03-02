/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import MyContext from './context/MyContext';
import data from './data/projects.json';

import NabBar from './components/NabBar';
import Hero from './components/Hero';
import ProjectContainer from './components/ProjectContainer';
import ShowButton from './components/ShowButton';
import Footer from './components/Footer';

function App() {
  const [myData, setMyData] = React.useState(data);
  const [displayHidden, setDisplayHidden] = React.useState(true);
  return (
    <MyContext.Provider
      value={{ myData, setMyData, displayHidden, setDisplayHidden }}
    >
      <div className="App">
        <NabBar />
        <Hero />
        <ProjectContainer />

        <ShowButton />

        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
