import React from 'react';
import './App.css';

const App = () => {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src="https://unavatar.io/twitter/herrera_mi46278" alt="avatar de midudev" />
        <div className="tw-followCard-info">
          <strong>Alexander Herrera Millet</strong>
          <span className="tw-followCard-infoUserName">
            @herrera_mi46278
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button"> Seguir </button>
      </aside>
    </article>
  )
}
export default App
