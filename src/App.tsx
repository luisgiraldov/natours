import React, { ReactElement } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Tours from "./components/tours/Tours";
import Stories from "./components/stories/Stories";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";

function App(): ReactElement {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<About />
				<Features />
				<Tours />
				<Stories />
				<Booking />
				<Footer />
			</main>
		</div>
	);
}

export default App;
