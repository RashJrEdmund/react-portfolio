/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import NabBar from './components/NabBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProjectContainer from './components/ProjectContainer';
import MyContext from './context/MyContext';

function App() {
  const [displayHidden, setDisplayHidden] = React.useState(true);
  return (
    <MyContext.Provider value={displayHidden}>
      <div className="App">
        <NabBar />
        <Hero />
        <ProjectContainer display={displayHidden} />

        <a
          href={displayHidden ? '#project-container' : '#route_to_nowhere'}
          className="show-more-btn"
        >
          <button
            type="button"
            onClick={() => setDisplayHidden((prev) => !prev)}
            dangerouslySetInnerHTML={{
              __html: displayHidden
                ? `
                  <span class="slide-span1"></span>
                  <span class="text-span">
                   showMore <span class="span1"> &#62; </span>
                  </span>
                 `
                : `
                  <span class="slide-span2"></span>
                  <span class="text-span">
                    <span class="span2"> &#60; </span> showLess
                  </span>
                `,
            }}
          />
        </a>

        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
