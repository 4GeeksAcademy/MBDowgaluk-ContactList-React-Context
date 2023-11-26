import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-secondary mb-2">
			<Link to="/" className="nav-item">
				<span className="navbar-brand mb-0 h1"><i class="fas fa-home fa-lg m-2"></i></span>
			</Link>
			<div className="ml-auto">
				<button type="button" className="btn btn-warning m-2 " onClick={actions.getContacts}>Actualizar</button>
				<button type="button" className="btn btn-light m-2 color-button" onClick={actions.deleteAgenda}><i class="fas fa-user-times fa-lg pe-2"></i>Delete all contacts</button>
				<Link to="/create-contact">
					<button className="btn btn-light m-2 color-button"><i class="far fa-address-card fa-lg pe-2"></i>Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};

/*<button type="button" className="btn btn-light m-2 color-button" onClick={actions.createFirstContactandAgenda}><i class="far fa-address-book fa-lg pe-2"></i>Create new agenda</button>*/
