import React from "react";
import Cardss from "./Cardss";
// import card1 from "./beecccch1.jpg";
// import card2 from "./beecccch2.jpg";
import card3 from "./beecccch3.jpg";
const Mians = () => {
    return (
        <>
            <div className="container">
                <div className="row px-5" data-aos='zoom-in-up'>
                    <h3 className=" py-4 text-center">Most visited <span className="cstm_clr">Destinantions</span></h3>
                    <div className="col-4">
                        <Cardss imgsrc={card3} cardTitle="Machu Pichu" location="Peru" name1="CULTURAL" name2="Relax" price="$500" cardText="Lorem ipsum dolor sit amet,i vitae rem, errorriaesciuntluptatem laudantium harum inventore cum ipsa?" />
                    </div>
                    <div className="col-4">
                        <Cardss imgsrc={card3} cardTitle="Bora Bora" location="New Zealand" name1="CULTURAL" name2="Relax" price="$700" cardText="Lorem ipsum dolor sit amet,i vitae rem, errorriaesciuntluptatem laudantium harum inventore cum ipsa?" />
                    </div>
                    <div className="col-4">
                        <Cardss imgsrc={card3} cardTitle="Great Barrier Reef" location="Austrailia" name1="CULTURAL" name2="Relax" price="$1000" cardText="Lorem ipsum dolor sit amet,i vitae rem, errorriaesciuntluptatem laudantium harum inventore cum ipsa?" />
                    </div>
                    {/* <div className="col-3">
                        <Cardss imgsrc={card3} cardTitle="Great Barrier Reef" location="Austrailia" name1="CULTURAL" name2="Relax" price="$1000" cardText="Lorem ipsum dolor sit amet,i vitae rem, errorriaesciuntluptatem laudantium harum inventore cum ipsa?" />
                    </div> */}
                </div>
            </div>

        </>
    )
}
export default Mians;