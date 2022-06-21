import React from 'react';
import logo from './img/logo-white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <div className="heading-primary-main">outdoors</div>
            <div className="heading-primary-sub">is where life happens</div>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
