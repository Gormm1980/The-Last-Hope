import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import injectContext from "./store/appContext.js";

import Footer from "./component/footer.js";
import Navbar from "./component/navbar.js";

import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Planet from "./pages/planet.js";
import People from "./pages/people.js";
import Species from "./pages/species.js";

function Layout(props) {
	return (
		<Router>
			<Navbar />

			<div className="page">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/about">
						<About />
					</Route>

					<Route path="/contact">
						<Contact />
					</Route>

					<Route path="/people/:index">
						<People />
					</Route>

					<Route path="/planet/:index">
						<Planet />
					</Route>
					<Route path="/species/:index">
						<Species />
					</Route>
				</Switch>
			</div>

			<Footer />
		</Router>
	);
}
export default injectContext(Layout);
