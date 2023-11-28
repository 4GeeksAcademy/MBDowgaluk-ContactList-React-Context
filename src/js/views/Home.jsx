import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleDelete = (id) => {
		actions.deleteContact(id)
	};

	const handleActualice = (id) => {
		actions.getcurrentId(id);
		navigate('/update-contact')
	}

	return (
	<div className="text-center mt-5 m-4">
			  {store.user.map((item, index) => {
                return <div className="row g-0 border rounded m-2">
						<div className="col-md-4">
						  <img src="https://picsum.photos/id/237/200" className="img-fluid rounded-circle m-1" alt="..." />
						</div>
						<div className="col-md-4">
						  <div className="card-body text-start">
							<h5 className="card-title m-1">{item.full_name}</h5>
							<p className="card-text m-1 text-secondary"><i class="fas fa-map-pin pe-1"></i>{item.address}</p>
							<p className="card-text m-1 text-secondary"><i class="fas fa-phone pe-1"></i>{item.phone}</p>
							<p className="card-text m-1 text-secondary"><i class="fas fa-envelope pe-1"></i>{item.email}</p>
						  </div>
						</div>
						<div className="col-md-4 text-end mt-2">
							<span type="button" onClick={()=>{handleActualice(item.id)}} className="border-0 text-dark bg-white"><i className="far fa-edit fa-lg p-2 pe-4"></i></span>
							<span type="button" onClick={()=>{handleDelete(item.id)}} className="border-0 text-dark bg-white"><i className="fas fa-trash-alt fa-lg p-2 ps-4"></i></span>
						</div>
						
				  		</div>
                    })}
			<span className="list-group-item bg-light text-end fw-lighter">
                        {store.user.length === 0 ? "No contacts, add one please" : store.user.length + " contacts."}
            </span>
	</div>
	
)}
