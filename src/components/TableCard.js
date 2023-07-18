import React from "react";
import "./TableCard.css";
import photo1 from '../images/x-10601.svg';
import photo2 from '../images/x-10602.svg';
import photo3 from '../images/x-10603.svg';

function TableCard() {
    const data = [
        { imageSrc: photo2, title: "Une Crepe Fromage", description: "One layer crepe filled with Cheddar Cheese Filling" },
        { imageSrc: photo3, title: "Une Crepe Lardon", description: "One layer crepe filled with cream cheese and bacon bits" },
        { imageSrc: photo1, title: "Un Crepe Sal de Mar", description: "One layer crepe filled with sea salted caramel" },
    ];
    
    return (
        <div className="tablecard">
            {data.map(({ imageSrc, title, description }, index) => (
    <div className={index === data.length - 1 ? "section last-section" : "section"} key={index}>
        <img className="images" src={imageSrc} alt={title} />
        <div className="content">
            <h1 className="title">{title}</h1>
            <p className="img-description">{description}</p>
            <button className={index === data.length - 1 ? "button-blue last-button" : "button-blue"}>+Add</button>
        </div>
    </div>
))}

        </div>
    );
}

export default TableCard;
