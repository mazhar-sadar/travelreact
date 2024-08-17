import React from "react";
import Cardst from "./Cardst";
import mImg from "./ct1.jpg";
import mImg2 from "./ct2.jpg";
import mImg3 from "./ct3.jpg";
const Travelt = () => {
    return (
        <>
            <div className="container-fluid bgg px-5">
                <div className="row px-5">
                    <div className="col-12 text-center my-5">
                        <h6 className="text-uppercase"> travel support</h6>
                        <h4 className="text-black">Plan you travel with confidence</h4>
                        <p className="">Find help with booking and travel plans,see what tom expect along the journey</p>
                    </div>
                    <div className="col-6">
                        <Cardst cardId="01" cardTitle="Travel requirements for Dubai" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda corrupti eos, dolores perspiciatis nobis dolor fugiat veniam praesentium aut libero, cum odio rem voluptates." />
                        <Cardst cardId="02" cardTitle="Chauffeue services at your arrival" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda corrupti eos, dolores perspiciatis nobis dolor fugiat veniam praesentium aut libero, cum odio rem voluptates." />
                        <Cardst cardId="03" cardTitle="Multi-risk travel insurance" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda corrupti eos, dolores perspiciatis nobis dolor fugiat veniam praesentium aut libero, cum odio rem voluptates." />
                    </div>
                    <div className="col-6">
                        <div className="position-relative" data-aos='slide-left'>
                            <img src={mImg} className="w-50  cImg" alt="" />
                            <img src={mImg2} className="w-50  cImg2" alt="" />
                            <img src={mImg3} className="w-25  cImg3" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Travelt;