import React from "react";
import { Link } from "react-router-dom";
import Button2 from '@material-ui/core/Button';
import CheckoutComponent from "../checkoutComponent";
import { useSelector } from "react-redux";

function PlaceOrder(props){
    const userData = useSelector( state => state.userSignin);
    const {userDetails} = userData;
    if(!userDetails)
        props.history.push('/signin');

    const productId = props.match.params.id;
    //const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const cart = useSelector( state => state.cartList);
    console.log(cart);
    const {cartItems} = cart;
    const shipment = useSelector( state => state.cartList);
    const {shipmentDetails} = shipment;

    function toPrice(num){
        return Number(num.toFixed(2));
    }

    cart.totalQty = cartItems.reduce((a,c) => a + c.qty ,0 );
    cart.totalMrp = toPrice(cartItems.reduce((a,c) => a + c.price * c.qty,0 ));
    cart.tax = toPrice(0.1*cart.totalMrp);
    cart.shippingPrice = toPrice(100);
    cart.totalPrice = cart.totalMrp + 100 + cart.tax;

    function placeOrder(e){
        e.preventDefault();
        props.history.push(`/order/${productId}`);
    }

    return(
    <div>
        <CheckoutComponent step1 step2 step3 step4></CheckoutComponent>
        <h5 style={{marginLeft:"8rem"}}>Review your order</h5>
        <div className="placeOrder">
            <div>
                <div className="orderDetails">
                        <div className="itemDetails">
                                <h6>Shipping Address</h6>
                                <p>{shipmentDetails.name}</p>
                                <p>{shipmentDetails.address}</p>
                                <p>{shipmentDetails.city}, {shipmentDetails.pin}</p>
                                <p>Phone: {shipmentDetails.phoneno}</p>
                        </div>
                        <div className="itemDetails itemPrice">
                            <h6>Payment Method</h6>
                            <p>{shipment.paymentOption}</p>
                        </div>
                </div>
                <div className="summary">
                    <div>
                    {
                        cartItems.map((item,index) => (
                        <div className="cartItem">
                            <Link to={`/product/${item.pid}`}>
                                <img  alt="" src={item.image}></img>
                            </Link>
                            <div className="itemDetails">
                                <Link to={`/product/${item.pid}`}>
                                    <h6>{item.brand}</h6>
                                    <p>{item.name}</p>
                                </Link>
                            </div>
                            <div className="itemDetails itemPrice">
                                <h6 className="price">{item.qty} x {item.price} = ₹ {Number(item.qty)*Number(item.price)}</h6>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="cartPrice"> 
                <p><b>ORDER SUMMARY ({cart.totalQty} {cart.totalQty>1 ? "Items" : "Item"})</b></p>
                <div className="orderAmount">
                    <div>
                        <p>Total MRP: </p>
                        <p>Convenience Fee: </p>
                        <p>Tax: </p>
                    </div>
                    <div className="itemPrice">
                        <p>₹ {cart.totalMrp}</p>
                        <p>₹ 100.00</p>
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
    </div>
    );
}

export default PlaceOrder; 