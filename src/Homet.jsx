import React, { useEffect } from "react";
import plane from "./headvid.mp4";
// import plane3 from "./headplane33.jpg";
import Aos from 'aos';
import'aos/dist/aos.css';
const Homet = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <>
            <div className="headImg_div w-100 text-center my-5">
                {/* <img className=" headImg" src={plane} alt="Loading..." /> */}
                <h1 className="text-black">Create Ever-lasting <br />Memories With Us</h1>
                <video src={plane} muted autoPlay loop className=" headImg"  alt="Loading..." data-aos='slide-right'></video>
                {/* <img className=" headImg2" src={plane3} alt="Loading" /> */}
            </div>
        </>
    )
}
export default Homet;