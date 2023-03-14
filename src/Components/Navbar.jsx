import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default class Navbar extends React.Component {

	render() {

		return (
			<nav>
				<div className="links">
					<NavLink className="navlink" to="/">Home</NavLink>
					<NavLink className="navlink" to="/projects">Projects</NavLink>
					<NavLink className="navlink" to="/contact">Contact</NavLink>
				</div>

        <ThemeSwitcher />
				
			</nav>
		);
	}
}