import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<Link to="/" className="nav-item">
				<span className="navbar-brand mb-0 h1"><i class="fas fa-home fa-lg m-2"></i></span>
			</Link>
			<div className="ml-auto">
				<Link to="/create-contact">
					<button className="btn btn-light m-2 color-button"><i class="far fa-address-card fa-lg pe-2"></i>Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
