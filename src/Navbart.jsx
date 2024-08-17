import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Navbart = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container" data-aos='slide-left'>
                    <h1><a className="navbar-brand" href="/"><i class="las la-fighter-jet logo"></i>Flight.</a></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item px-3"><NavLink className="nav-link " aria-current="page" to="/">Home</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link cl" to="/">About</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link " to="/">Offers</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link " to="/">Seats</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link " to="/">Destinations</NavLink></li>
                        </ul>
                        <button className="btn btn-primary mx-3">Contact</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbart;