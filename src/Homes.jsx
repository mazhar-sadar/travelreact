import React from "react";
import headvideo from "./headvideo.mp4";
const Homes = () => {
    return (
        <>
            <div className="container-fluid before_content  p-0">
                <div className="row">
                    <div className="col-12">
                        {/* <img  src={img1} alt="Loading..." /> */}
                        <video className="w-100 imggg" src={headvideo} muted autoPlay loop type="video/mp4" ></video>
                        <div className="content_div">
                            <p className="text-white  m-0" data-aos='slide-right'>OUR PACKAGES</p>
                            <h3 className="text-white pb-3" data-aos='slide-right'>Search your <span className="cstm_clr">Holidays</span></h3>
                            <div className="row bg-white searchDiv rounded-3 p-4" data-aos='fade-up'>
                                <div className="col-4">
                                    <label htmlFor="destination" className="form-label">Search your Destination:</label>
                                    <input id="destination" type="search" className="form-control" placeholder="Enter name here..." />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="date" className="form-label">Enter your Date:</label>
                                    <input id="date" type="date" className="form-control" />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="price" className="form-label">Max price:</label>
                                    <input id="price" type="range" className="form-range" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homes;