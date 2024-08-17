import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Contact=()=>{
    return(
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-6">
                        <h4 className="text-center"> <span className="cstm-clr">Contact </span>Me</h4>
                        <h6 className="cstm-clr">Lets Work Together</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus nisi magni illum non ab vitae, quam quibusdam ipsum quas architecto earum et maiores iste libero, dicta distinctio impedit numquam?</p>
                        <div> <span><i class="las la-map-marker-alt pe-2 cnt-icon"></i></span>contact@gmail.com</div>
                        <div className="py-2"> <span><i class="las la-phone pe-2 cnt-icon"></i></span>123456789</div>
                        <div>
                            <span><i className="lab  la-linkedin contact-icon px-2 py-2" ></i></span>
                            <span><i className="lab  la-whatsapp contact-icon px-2 py-2" ></i></span>
                            <span><i className="lab  la-facebook contact-icon px-2 py-2" ></i></span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3"><input className="form-control" type="email" placeholder="Enter you Name"/></div>
                        <div className="mb-3"><input className="form-control" type="text" placeholder="Enter your Email"/></div>
                        <div className="mb-3"><input className="form-control" type="text" placeholder="Enter your subject"/></div>
                        <div className="mb-3"><textarea className="form-control" name="" id="" cols="30" rows="6" placeholder="Enter you Name"></textarea></div>
                        <div className="text-center"><button className="btn btn_clr ">Submit</button></div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;