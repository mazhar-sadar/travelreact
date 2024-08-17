import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
const Navbarf = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg px-3 text-white p-0 m-0">
                <a className="navbar-brand text-white" href="--">Amazon</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <form action="">
                        <div className="d-flex">
                            <select className="form-select w-25" id="">
                                <option selected >America</option>
                                <option value="">canada</option>
                                <option value="">japan</option>
                                <option value="">uk</option>
                            </select>
                            <div className="input-group px-2">
                                <select name="" id="" className="form-select bg-secondary">
                                    <option value="">All</option>
                                    <option value="">Gadgets</option>
                                    <option value="">Books</option>
                                    <option value="">Electronics</option>
                                    <option value="">Beauty Products</option>
                                    <option value="">Mens Clothes</option>
                                    <option value="">Baby Products</option>
                                </select>
                                <input type="search" placeholder="Search Amazon" className="w-75 form-control" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="d-flex">
                    <div className="px-2">Language</div>
                    <div className="px-2"><p>Hello sign in <br /><strong>Accounts and Lists</strong></p></div>
                    <div className="px-2"><p>Return <br /> <strong>& Orders</strong></p></div>
                    <div className="px-2"><span>Icons</span> Cart</div>
                </div>
            </nav>
            <div className="after_nav text-white">
                    <ul className="navbar-nav me-auto d-flex flex-row">
                        <li className="nav-item"><NavLink className="nav-link px-2" to="/">Icon All</NavLink>  </li>
                        <li className="nav-item"><NavLink className="nav-link px-2" to="/">Today's deals</NavLink> </li>
                        <li className="nav-item"><NavLink className="nav-link px-2" to="/">Customer services</NavLink> </li>
                        <li className="nav-item"><NavLink className="nav-link px-2" to="/">Registery</NavLink> </li>
                        <li className="nav-item"><NavLink className="nav-link px-2" to="/">Gift card</NavLink>  </li>
                        <li className="nav-item"><NavLink className="nav-link px-2" to="/">Sell</NavLink> </li>
                    </ul>
                </div>
        </>
    )
}
export default Navbarf;