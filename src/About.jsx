import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import head_img from "./cvimgword.jpeg";
const About = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-6 text-center"><img className="about_img  " src={head_img} alt="loading..." /></div>
                    <div className="col-6">
                        <h1>About <span className="cstm-clr">Me</span></h1>
                        <h4>Web Developer</h4>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint inventore veniam a ipsa illo omnis laborum eveniet quibusdam error consequatur cupiditate aspernatur modi, eius, perferendis id placeat, possimus voluptas voluptatem voluptatum quasi expedita eum! Fugit, eum. Deleniti, quas amet. consectetur adipisicing elit. Ex, nesciunt rem iure ut aliquam cumque alias? Et, nam, aut dicta tempora nemo obcaecati iste natus totam ipsum sit, veritatis alias!</p>
                        <button className="rounded btn btn_clr rounded-5">More About Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;