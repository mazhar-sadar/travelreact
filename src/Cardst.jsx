import React from "react";
const Cardst = (props) => {
    return (
        <>
            <div className="card border-0" data-aos='fade-up'>
                <div className="card-body bgg">
                    <span className="badge text-bg-primary mb-4">{props.cardId}</span>
                    {/* <div>{props.cIcon}</div> */}
                    <h5 className="card-title text-black">{props.cardTitle}</h5>
                    <p>{props.cardText}</p>
                </div>
            </div>
        </>
    )
}
export default Cardst;

