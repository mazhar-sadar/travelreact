import React from "react";
import Cardst from "./Cardst";
import lounge1 from './lounge1.jpg';
import lounge2 from './lounge2.jpg';
const Lounget = () => {
    return (
        <>
            <div className="container-fluid px-5 my-5 lounge">
                <div className="row my-5 px-5">
                    <div className="col-6 h-100 my-5">
                        <h4 className="text-black pb-3">Unaccompaied Minor Lounge</h4>
                        <div className="row">
                            <div className="col-6">
                                <Cardst  cardTitle="Travel requirements for Dubai" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda corrupti eos, dos." />
                                <Cardst  cardTitle="Chauffeue services at your arrival" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda corrupti eos, dol." />
                            </div>
                            <div className="col-6">
                                <Cardst  cardTitle="Multi-risk travel insurance" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda corrupti eos, dol." />
                                <Cardst  cardTitle="Multi-risk travel insurance" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda corrupti eos, dol." />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 position-relative my-5" data-aos='slide-left'>
                        <img src={lounge1} className="cImg2 w-50 " alt="Loading..." />
                        <img src={lounge2} className="cImg w-50 " alt="Loading..." />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Lounget;