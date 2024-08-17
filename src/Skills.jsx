import React from "react";
import { Circle, Line } from "rc-progress";
const Skills = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <h1 className="text-center pb-3">My <span className="cstm-clr">Skills</span></h1>
                    <div className="col-6">
                        <h5 className="text-decoration-underline text-center">Technical Skills</h5>
                        <div className="ps-5 py-3">
                            <div className="mt-4">HTML</div>
                            <div className="line1">
                                <Line percent={70} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                            <div className="mt-4">CSS</div>
                            <div className="line1"><Line percent={70} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                            <div className="mt-4">BOOTSTRAP</div>
                            <div className="line1"><Line percent={70} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                            <div className="mt-4">JAVASCRIPT</div>
                            <div className="line1"><Line percent={50} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                            <div className="mt-4">JQUERY</div>
                            <div className="line1"><Line percent={50} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                            <div className="mt-4">REACT</div>
                            <div className="line1"><Line percent={60} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                            <div className="mt-4">ADOBE XD</div>
                            <div className="line1"><Line percent={80} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                            <div className="mt-4">Canva</div>
                            <div className="line1"><Line percent={80} strokeColor="#0ef" strokeWidth={2} trailColor="white" trailWidth={2} strokeLinecap="round" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h5 className="text-decoration-underline text-center">Professional Skills</h5>
                        <div className="d-flex justify-content-between">
                            <div>
                                <div className="circle1 mx-5 my-5 ">
                                    <div className="px-4 ">Creativity</div>
                                    <Circle percent={70} strokeColor="#0ef" strokeWidth={6} trailColor="white" trailWidth={6} strokeLinecap="round" />
                                    <div className="circle1-perct">70%</div>
                                </div>
                                <div className=" circle1 mx-5 my-5">
                                    <span className="  mb-4" >Communication</span>
                                    <Circle percent={80} strokeColor="#0ef" strokeWidth={6} trailColor="white" trailWidth={6} strokeLinecap="round" />
                                    <div className="circle1-perct">80%</div>
                                </div>
                            </div>
                            <div>
                                <div className="circle1 mx-5 my-5">
                                    <span className="  mb-4">Problem Solving</span>
                                    <Circle percent={90} strokeColor="#0ef" strokeWidth={6} trailColor="white" trailWidth={6} strokeLinecap="round" />
                                    <div className="circle1-perct">90%</div>

                                </div>
                                <div className="circle1 mx-5 my-5">
                                    <span className="px-4 mb-4">Team work</span>
                                    <Circle percent={80} strokeColor="#0ef" strokeWidth={6} trailColor="white" trailWidth={6} strokeLinecap="round" />
                                    <div className="circle1-perct">80%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;





// import React from "react";
// import { Circle } from "rc-progress";

// const Skills = () => {
//   return (
//     <div className="circle1 mx-5 my-5">
//       <span className="px-4 mb-4">Creativity</span>
//       <Circle
//         percent={70}
//         strokeColor="#0ef"
//         strokeWidth={6}
//         trailColor="white"
//         trailWidth={6}
//         strokeLinecap="round"
//       >
//         <div className="circle-inner">
//           <span className="circle-text">70%</span>
//         </div>
//       </Circle>
//     </div>
//   );
// };

// export default Skills;


// import React from "react";
// import { Circle } from "rc-progress";

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <div className="circle-wrapper">
//         <Circle
//           percent={70}
//           strokeColor="#0ef"
//           strokeWidth={6}
//           trailColor="white"
//           trailWidth={6}
//           strokeLinecap="round"
//         />
//         <div className="circle-text">70%</div>
//       </div>
//       <div className="skill-name">Creativity</div>
//     </div>
//   );
// };

// export default Skills;

