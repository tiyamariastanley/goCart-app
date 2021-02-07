import React from "react";

function CardTemplate(props){
    return(
        <div className="carditem">
            <img src={props.img} />
            <div className="details">
                <h6>{props.brand}</h6>
                <p>{props.name}</p>
                <p className="price">Rs.{props.price}</p>
            </div>
        </div>
    )
}

export default CardTemplate; 