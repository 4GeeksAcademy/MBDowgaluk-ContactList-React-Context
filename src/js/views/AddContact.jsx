import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const AddContact = () => {

    return (
        <div className="bg-light">
            <h1 className="text-center">Add new Contact</h1>
            <form>
                <div className="m-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullName" placeholder="Full Name" />
                </div>
                <div className="m-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mail"/>
                </div>
                <div className="m-3">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPhone" aria-describedby="phone" placeholder="Enter phone"/>
                </div>
                <div className="m-3">
                    <label for="exampleInputEmail1" class="form-label">Adress</label>
                    <input type="text" className="form-control" id="exampleInputAdress" aria-describedby="adress" placeholder="Enter adress"/>
                </div>
                <div className="m-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="********"/>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-secondary color-button m-3">Submit</button>
                </div>
                <Link className="m-3 text-dark" to="/"> or get back to contacts.</Link>
            </form>
        </div>
    )
}
