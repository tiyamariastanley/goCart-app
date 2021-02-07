import React from "react";
import CardTemplate from "./CardTemplate";
import products from "./data";

function Main(props){
    return(
        <main className="main">
            {
                products.map((product,index) => (
                <CardTemplate key={index} id={index} brand={product.brand} name={product.name} img={product.img} price={product.price} ></CardTemplate>
                ))
            }
        </main>
    );
}

export default Main; 