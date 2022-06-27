import React, { ReactElement } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";

function App(): ReactElement {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<About />
			</main>
		</div>
	);
}

export default App;
