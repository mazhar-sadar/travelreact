import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";
import head_img from "./cvimgword.jpeg";
const Header = () => {
    return (
        <>
        <header>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-6 mt-5">
                        <h4>Hello,It's Me</h4>
                        <h1>Mazhar Hussain</h1>
                        <p className="ps-4">i'm a  web Designer with extensive skills to create and Websites Designes, and many more....</p>
                    </div>
                    <div className="col-6 text-center  ">
                        <img className="head_img  " src={head_img} alt="loading..." />
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}
export default Header;