import React from "react";
import travl1 from './travl1.jpg';
import travl2 from './travl2.jpg';
import travl3 from './travl3.jpg';
import travl4 from './travl4.jpg';
import user from './user.jpg';
const Travelerst = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row px-5 py-2 my-5 ">
                    <div className="col-12 text-black" data-aos='slide-right'><h4>Top travelers of this month!</h4></div>
                    <div className="col-3  d-flex flex-row position-relative justify-content-center align-item-center">
                        <img src={travl2} className="travelImg w-100 p-4" alt="Loading..."  data-aos='fade-down'/>
                        <img src={user} alt="Loading"className="user "   data-aos='fade-up'/>
                    </div>
                    <div className="col-3  d-flex flex-row  position-relative justify-content-center align-item-center">
                        <img src={travl1} className="travelImg w-100 p-4" alt="Loading..." data-aos='fade-down' />
                        <img src={user} alt="Loading"className="user "  data-aos='fade-up'/>
                    </div>
                    <div className="col-3  d-flex flex-row position-relative justify-content-center align-item-center">
                        <img src={travl3} className="travelImg w-100 p-4" alt="Loading..." data-aos='fade-down' />
                        <img src={user} alt="Loading" className="user " data-aos='fade-up'/>
                    </div>
                    <div className="col-3 d-flex flex-row position-relative justify-content-center align-item-center">
                        <img src={travl4} className="travelImg w-100 p-4" alt="Loading..." data-aos='fade-down' />
                        <img src={user} alt="Loading" className="user " data-aos='fade-up'/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Travelerst;