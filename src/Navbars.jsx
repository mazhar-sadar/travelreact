import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Navbars = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg my-1">
                <div className="container" data-aos='fade-down-left'>
                    <h1><a className="navbar-brand" href="/"><span><i class="las la-plane-departure logo"></i></span>Travel.</a></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link " aria-current="page" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link cl" to="/">Packages</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/">Shop</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/">About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/">Pages</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/">News</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link " to="/">Contact</NavLink></li>
                        </ul>
                        <button className="btn">Contact <i class="las la-user-edit"></i></button>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbars;