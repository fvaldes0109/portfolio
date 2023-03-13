import React from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {

	render() {

		return (
			<nav>
				<div className="links">
					<NavLink className="navlink" to="/" exact>Home</NavLink>
					<NavLink className="navlink" to="/projects">Projects</NavLink>
					<NavLink className="navlink" to="/contact">Contact</NavLink>
				</div>

				<div className="theme-switch">
					<span>Dark Theme</span>
					<img src="https://img.icons8.com/ios/30/000000/sun--v1.png" alt="sun" />
				</div>
			</nav>
		);
	}
}