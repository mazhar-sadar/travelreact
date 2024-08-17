import React from "react";
const CheckIn = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row" data-aos='fade-up'>
                    <div className="col-12 text-center mb-2">
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-secondary">Economy</button>
                            <button type="button" class="btn btn-outline-secondary">Business class</button>
                            <button type="button" class="btn btn-outline-secondary">First class</button>
                        </div>
                    </div>
                    <div className="col-1 mb-5"></div>
                    <div className="col-2 mb-5">icon
                        <h4 className="text-black">Location</h4>
                        <input type="text" className="form-control" placeholder="Where do you want to" />
                    </div>
                    <div className="col-2 mb-5">
                        icon<h4 className="text-black">Travelers</h4>
                        <input type="text" className="form-control" placeholder="Add quantity" />
                    </div>
                    <div className="col-2 mb-5">
                        icon<h4 className="text-black">Check In</h4>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-2 mb-5">
                        icon<h4 className="text-black">Check Out</h4>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-2 mb-5">
                        <button className="btn btn-primary">Search Flights</button>
                    </div>
                    <div className="col-1 mb-5"></div>
                </div>
            </div>
        </>
    )
}
export default CheckIn;