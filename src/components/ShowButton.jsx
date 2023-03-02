/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../styles/showButton.css';
import MyContext from '../context/MyContext';

export default function ShowButton() {
  const { displayHidden, setDisplayHidden } = React.useContext(MyContext);
  return (
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
                   show More <span class="span1"> &#62; </span>
                  </span>
                 `
            : `
                  <span class="slide-span2"></span>
                  <span class="text-span">
                    <span class="span2"> &#60; </span> show Less
                  </span>
                `,
        }}
      />
    </a>
  );
}
