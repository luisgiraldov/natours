import React, { ReactElement } from "react";
import "./App.scss";
import Header from "./components/header/Header";

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
