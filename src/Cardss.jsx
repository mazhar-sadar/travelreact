import React from "react";
const Cardss = (props) => {
    return (
        <>
            <div className="card shadow-lg border-0">
                <img src={props.imgsrc} className="card-img w-100 h-50 " alt="Loading" />
                <div className="card-body">
                    <h4 className="card-title p-0 m-0">{props.cardTitle}</h4>
                    <p><span>location</span>{props.location}</p>
                    <hr className="p-1 m-0" />
                    <div className="d-flex justify-content-between p-0 m-0">
                        <span>{props.name1} <br />{props.name2}</span>
                        <span><h4>{props.price}</h4></span>
                    </div>
                    <hr className="p-0 m-0" />
                    <p className="p-0 m-0 card-text">{props.cardText}</p>
                    <button className="btn my-2">DETAILS <span><i class="las la-clipboard-list"></i></span></button>
                </div>
            </div>
        </>
    )
}
export default Cardss;