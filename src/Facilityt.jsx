import React from "react";
import Cardst from "./Cardst";
const Facility = () => {
    return (
        <>
            <div className="container-fluid facility px-5 my-5">
                <div className="row px-5 my-5">
                    <div className="col-12 px-5 my-5 d-flex justify-content-between align-item-center">
                        <h4 className="text-black">Travel to make memories all <br /> around the world</h4>
                        <span>
                        <button className="btn btn-primary">View All</button>
                        </span>
                    </div>
                    <div className="col-4 text-center bgg2">
                    <Cardst cIcon='<i class="lar la-calendar"></i>' cardId="01" cardTitle="Book & Relax" cardText="Lorem upti eos, dolores perspiciatis nobis dolor fugiat veniam praesentium." />
                    </div>
                    <div className="col-4 text-center bgg2">
                        <Cardst cardId="01" cardTitle="Smart Checklist" cardText="Lorem upti eos, dolores perspiciatis nobis dolor fugiat veniam praesentium." />
                    </div>
                    <div className="col-4 text-center bgg2">
                        <Cardst cardId="01" cardTitle="Save More" cardText="Lorem upti eos, dolores perspiciatis nobis dolor fugiat veniam praesentium." />   
                    </div>
                </div>
            </div>
        </>
    )
}
export default Facility;