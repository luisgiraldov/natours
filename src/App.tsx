import React from 'react';
import logo from './img/logo-white.png';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <div className="heading-primary--main">outdoors</div>
            <div className="heading-primary--sub">is where life happens</div>
          </h1>
          <Link to="#" className="btn btn--white btn--animated">discover our tours</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
