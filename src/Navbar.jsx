import React from "react";
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    return(
        <>
        <nav className="navbar navbr  navbar-expand-lg">
                <div className="d-flex container">
                    <a href="-" className="navbar-brand ee" >Portfolio.</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="px-4 navs-clr text-decoration-none" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="px-4 navs-clr text-decoration-none" to="/About">About</NavLink></li>
                            <li className="nav-item"><NavLink className="px-4 navs-clr text-decoration-none" to="/Skills">Skills</NavLink></li>
                            <li className="nav-item"><NavLink className="px-4 navs-clr text-decoration-none" to="/Contact">Contact</NavLink></li>
                            <li className="nav-item"><NavLink className="px-4 navs-clr text-decoration-none" to="/Service">Services</NavLink></li>
                            <li className="nav-item"><NavLink className="px-4 navs-clr text-decoration-none" to="/Projects">Projects</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;