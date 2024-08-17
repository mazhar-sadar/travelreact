import React, { useEffect } from "react";
import Aos from 'aos';
import'aos/dist/aos.css';
const Footert = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <>
            <div className="container-fluid px-5 py-5 footer">
                <div className="row px-5">
                    <div className="col-12 text-center">
                        <h4 className="text-black" data-aos='slide-down'>Subscribe Newsletters & get Latest News</h4>
                        <div className="d-flex justify-content-center align-item-center my-4" data-aos='slide-down'>
                            <input type="text" className="form-control w-25" placeholder="Enter your email address" />
                            <span className="px-3"><button className="btn btn-primary">Subscribe</button></span>
                        </div>
                    </div>
                    <div className="col-3" data-aos='slide-right'>
                        <h4><i class="las la-fighter-jet logo"></i>Flight.</h4>
                        <p>Your mind should be stronger than your feelings,fly</p>
                        <span>fb</span>
                        <span>insta</span>
                        <span>you</span>
                        <span>pint</span>
                    </div>
                    <div className="col-3">
                        <p className="text-black "> <strong> OUR AGENCY</strong></p>
                        <ul className="nav d-flex flex-column" data-aos='fade-up'>
                            <li className="nav-item " > <a className="nav-link" href="/">  Services</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Insurance</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Agency</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Tourism</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Payment</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="text-black"> <strong>PARTNERS</strong></p>
                        <ul className="nav d-flex flex-column" data-aos='fade-up'>
                            <li className="nav-item " > <a className="nav-link" href="/">  Booking</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  RentalCar</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  HostelWor</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Tourism</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Payment</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="text-black"> <strong> LAST MINUTE</strong></p>
                        <ul className="nav d-flex flex-column" data-aos='fade-up'>
                            <li className="nav-item " > <a className="nav-link" href="/">  Services</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Insurance</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Agency</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Tourism</a></li>
                            <li className="nav-item " > <a className="nav-link" href="/">  Payment</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footert;