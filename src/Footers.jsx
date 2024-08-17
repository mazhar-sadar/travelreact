import React, { useEffect } from "react";
import footvid from "./footervideo.mp4";
import Aos from 'aos';
import'aos/dist/aos.css';
const Footers = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <>
            <div className="container-fluid before_content mt-5 p-0">
                <div className="row">
                    <div className="col-12">
                        <video className="w-100 imggg" src={footvid} muted autoPlay loop typeof="video/mp4" ></video>
                        <div className="content_div ">
                            <div className="d-flex justify-content-center">
                                <div className=" px-5">
                                    <p className="text-white m-0">KEEP IN TOUCH</p>
                                    <h3 className="text-white pb-0">Travel with us</h3>
                                </div>
                                <div className=" pe-3">
                                    <input type="search" className="form-control" placeholder="Enter Email Address" name="" id="" />
                                </div>
                                <div className="">
                                    <button className="btn">Send <span><i class="lar la-paper-plane"></i></span></button>
                                </div>
                            </div>
                            <div className="row bg-white rounded rounded-3">
                                <div className="col-6 p-4" data-aos='slide-right'>
                                    <h4><a className="navbar-brand" href="/"><span><i class="las la-plane-departure logo"></i></span>Travel.</a></h4>
                                    <p>Lorem ipicabo  minus libero, cum earum eum perspiciatis animi eos aliquid odit neque maiores molestiae asperiores ad laudantium dignissimos autem minima? Vero quas aspernatur ea neque in?</p>
                                    <span><i class="lab la-facebook"></i></span>
                                    <span><i class="lab la-instagram"></i></span>
                                    <span><i class="lab la-youtube"></i></span>
                                    <span><i class="lab la-twitter"></i></span>
                                </div>
                                <div className="col-2 p-4">
                                    <p className=""> <strong> OUR AGENCY</strong></p>
                                    <ul className="nav" data-aos="fade-up">
                                        <li className="nav-item " > <a className="nav-link" href="/">  Services</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Insurance</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Agency</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Tourism</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Payment</a></li>
                                    </ul>
                                </div>
                                <div className="col-2 p-4">
                                    <p className=""> <strong>PARTNERS</strong></p>
                                    <ul className="nav" data-aos='fade-up'>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Booking</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  RentalCar</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  HostelWor</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Tourism</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Payment</a></li>
                                    </ul>
                                </div>
                                <div className="col-2 p-4">
                                    <p className=""> <strong> LAST MINUTE</strong></p>
                                    <ul className="nav" data-aos='fade-up'>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Services</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Insurance</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Agency</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Tourism</a></li>
                                        <li className="nav-item " > <a className="nav-link" href="/">  Payment</a></li>
                                    </ul>
                                </div>
                                <div className=" d-flex justify-content-between mt-3 py-3 text-white cstm-txt">
                                    <span>BEST TRAVEL WEBSITE THEME</span>
                                    <span>COPYRIGHT RESERVED-SADARTECH 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footers;