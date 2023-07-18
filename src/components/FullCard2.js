import React from "react";
import "./FullCard2.css";
import carousel4 from '../images/CAROUSEL-04.png';


function FullCard2() {
    return (
        <div className="fullcard2">
            <img className="image2" src={carousel4} alt="description" />
            <div className="bottom-half">
                <p className="textbox">
                20 layers of crepe filled with vanilla cream
                </p>
            </div>
        </div>
    );
}

export default FullCard2;
