import React, { ReactElement, useRef } from "react";
import "./App.scss";
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Tours from "./components/tours/Tours";
import Stories from "./components/stories/Stories";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";

function App(): ReactElement {

	const headerRef = useRef<HTMLElement>(null);
	const aboutRef = useRef<HTMLElement>(null);
	const featuresRef = useRef<HTMLElement>(null);
	const toursRef = useRef<HTMLElement>(null);
	const storiesRef = useRef<HTMLElement>(null);
	const bookingRef = useRef<HTMLElement>(null);

	const pageRefs = {
		headerRef,
		aboutRef,
		featuresRef,
		toursRef,
		storiesRef,
		bookingRef
	}

	return (
		<div className="App">
			<Navigation pageRefs={pageRefs} />
			<Header ref={headerRef} />
			<main className="main">
				<About ref={aboutRef} />
				<Features ref={featuresRef} />
				<Tours ref={toursRef} />
				<Stories ref={storiesRef} />
				<Booking ref={bookingRef} />
				<Footer />
			</main>
		</div>
	);
}

export default App;
