import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Button from 'react-bootstrap/Button';
import Button2 from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Error from "../error";

function CartScreen(props){
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const cart = useSelector( state => state.cartList);
    const {cartItems} = cart;

    function toPrice(num){
        return Number(num.toFixed(2));
    }

    cart.totalQty = cartItems.reduce((a,c) => a + c.qty ,0 );
    cart.totalMrp = toPrice(cartItems.reduce((a,c) => a + c.price * c.qty,0 ));
    cart.tax = toPrice(0.1*cart.totalMrp);
    cart.shippingPrice = toPrice(100);
    cart.totalPrice = cart.totalMrp + 100 + cart.tax;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(productId)
            dispatch(addToCart(productId,qty))
    },[dispatch,productId,qty])

    function removeItem(itemId){
        dispatch(removeFromCart(itemId))
    }

    function placeOrder(){
        props.history.push('/signin?redirect=shipping');
    }

    return(
        <div>
            {
                cartItems.length > 0 ? (
                    <div className="top cartScreen">
                    <div >
                    {
                        cartItems.map((item,index) => (
                            <div className="cartItem" key={index}>
                                <Link to={`/product/${item.pid}`}>
                                <img  alt="" src={item.image}></img></Link>
                                <div className="itemDetails">
                                <Link to={`/product/${item.pid}`}>
                                    <h6>{item.brand}</h6>
                                    <p>{item.name}</p>
                                    </Link>
                                    <div className="dropdown">
                                        <p>Qty: <select value={item.qty} onChange={(e) => {dispatch(addToCart(item.pid,Number(e.target.value)));}}>
                                            {
                                                [...Array(item.countInStock).keys()].map(num =>(        //.keys() generate array of 0 to item.countInStock
                                                    <option key={num+1} value={num+1}>{num+1}</option>
                                                ))
                                            }
                                            </select>
                                        </p>
                                    </div>
                                </div>
                                <div className="itemDetails itemPrice">
                                <h6 className="price">₹ {Number(item.qty)*Number(item.price)}</h6>
                                <Button variant="outline-secondary" size="sm" onClick={() => {removeItem(item.pid)}}>Remove</Button>
                                </div>
                            </div>
                        ))
                     
                    }  
                    </div>
                    <div className="cartPrice"> 
                        <p><b>PRICE DETAILS ({cart.totalQty} {cart.totalQty>1 ? "Items" : "Item"})</b></p>
                        <div className="orderAmount">
                            <div>
                                <p>Total MRP: </p>
                                <p>Convenience Fee: </p>
                                <p>Tax: </p>
                            </div>
                            <div className="itemPrice">
                                <p>₹ {cart.totalMrp}</p>
                                <p>₹ {cart.shippingPrice}</p>
                                <p>₹ {cart.tax}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="orderAmount">
                            <div><h6>Total Amount: </h6></div>
                            <div className="itemPrice"><h6>₹ {cart.totalPrice}</h6></div>
                        </div>
                        <Button2 className="cartButton" variant="contained" color="secondary" onClick={placeOrder}>PLACE ORDER</Button2>
                    </div>
                </div>  
                )
                :
                (
                <Error imgSrc="https://image.shutterstock.com/image-vector/dead-face-empty-paper-shopping-260nw-1126464314.jpg" heading="Hey, it feels so light!" para="There is nothing in your bag. Let's add some items."></Error>
                )
            }
        </div>
    );
}

export default CartScreen; 