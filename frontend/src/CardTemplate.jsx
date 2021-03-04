import React from "react";
import { Link } from 'react-router-dom';

function CardTemplate(props){
    const {product} = props;
    return(
        <div className="carditem" key={product._id}>
            <Link to={`/product/${product._id}`}>
            <img src={product.img} alt=""/>
            <div className="details">
                <h6>{product.brand}</h6>
                <p>{product.name}</p>
                <h6 className="price">Rs.{product.price}</h6>
            </div>
            </Link>
        </div>

    );
}

export default CardTemplate; 