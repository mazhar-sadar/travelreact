import React from "react";
const Service = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h1 className=" text-center py-5">My <span className="cstm-clr">Services</span></h1>
                    <div className="col-4 ">
                        <div className="shdow card bg-black text-white">
                            <div className="card-body ">
                            <div><h4><i className="las la-podcast contact-icon"></i></h4></div>
                            <h4 className="cstm-clr card-title">UI/UX Design</h4>
                            <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid recusandae hic cum minima velit fugiat repellat perspiciatis sit vel quibusdam ut sed labore nulla nobis, animi adipisci! Voluptate, nostrum delectus.</p>
                            <button className="btn btn_clr rounded rounded-5">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="shdow card bg-black text-white">
                            <div className="card-body ">
                            <div><h4><i className="las la-retweet contact-icon"></i></h4></div>
                            <h4 className="cstm-clr card-title ">WEB Design</h4>
                            <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid recusandae hic cum minima velit fugiat repellat perspiciatis sit vel quibusdam ut sed labore nulla nobis, animi adipisci! Voluptate, nostrum delectus.</p>
                            <button className="btn btn_clr rounded rounded-5">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="shdow card bg-black text-white">
                            <div className="card-body ">
                            <div><h4><i className="las la-x-ray contact-icon"></i></h4></div>
                            <h4 className="cstm-clr card-title">LoGo Design</h4>
                            <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid recusandae hic cum minima velit fugiat repellat perspiciatis sit vel quibusdam ut sed labore nulla nobis, animi adipisci! Voluptate, nostrum delectus.</p>
                            <button className="btn btn_clr rounded rounded-5">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;