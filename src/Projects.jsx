import React from "react";
import po_img from "./app.png";
import ptw_img from "./apps.jpg";
import pth_img from "./logo.jpg";
import pf_img from "./websit.jpg";
const Projects =()=>{
return(
    <>
    <div className="container py-5">
        <div className="row">
            <h1 className="text-center pb-3">My <span className="cstm-clr">Projects</span></h1>
            <div className="col-3 "><img  className="project_img " src={po_img} alt="loading..." /></div>
            <div className="col-3 "><img  className="project_img "  src={ptw_img} alt="loading..." /></div>
            <div className="col-3 "><img  className="project_img " src={pth_img} alt="loading..." /></div>
            <div className="col-3 "><img  className="project_img " src={pf_img} alt="loading..." /></div>
        </div>
    </div>
    </>
)
}
export default Projects;