import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";

export const Home = () => (
	<div className="text-center mt-5 bg-light">
		<div className="card m-3 bg-white">
  			<div className="row g-0">
    			<div className="col-md-4">
      			<img src="..." class="img-fluid rounded" alt="..." />
    			</div>
    			<div className="col-md-4">
      			<div className="card-body text-start">
        			<h5 className="card-title m-1">Merlina Dowgaluk</h5>
        			<p className="card-text m-1 text-secondary"><i class="fas fa-map-pin pe-1"></i>Adress</p>
					<p className="card-text m-1 text-secondary"><i class="fas fa-phone pe-1"></i>Telephone</p>
					<p className="card-text m-1 text-secondary"><i class="fas fa-envelope pe-1"></i>Adress</p>
      			</div>
    			</div>
				<div className="col-md-4 text-end">
					<i className="far fa-edit fa-lg p-2 pe-4"></i>
					<i className="fas fa-trash-alt fa-lg p-2 ps-4"></i>
    			</div>
  			</div>
		</div>
	</div>
);
