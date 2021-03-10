import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import CheckoutComponent from "../checkoutComponent";
import { useDispatch, useSelector } from "react-redux";
import {shipmentAddress} from "../actions/cartActions";

function ShippingScreen(props){
    const userData = useSelector( state => state.userSignin);
    const {userDetails} = userData;
    if(!userDetails)
    props.history.push('/signin');

    const shipment = useSelector( state => state.cartList);
    const {shipmentDetails} = shipment;
    console.log(shipmentDetails);
    const [name,setName] = useState(shipmentDetails.name);
    const [address,setAddress] = useState(shipmentDetails.address);
    const [city,setCity] = useState(shipmentDetails.city);
    const [pin,setPin] = useState(shipmentDetails.pin);
    const [phoneno,setPhoneNo] = useState(shipmentDetails.phoneno);
    const dispatch = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        dispatch(shipmentAddress({name,address,city,pin,phoneno}));
        props.history.push('/payment');
    }

    return(
    <div>
        <CheckoutComponent step1 step2></CheckoutComponent>
        <div className="shipping">
            <h5>Shipping Address</h5>
            <hr></hr>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="Enter Full Name*" value={name} required onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="address" placeholder="Enter Address*" value={address} required onChange={(e) => setAddress(e.target.value)}/>
                <input type="text" name="city" placeholder="Enter City*" value={city} required onChange={(e) => setCity(e.target.value)}/>
                <input type="text" name="pin" placeholder="Enter Postal Code*" value={pin} required onChange={(e) => setPin(e.target.value)}/>
                <input type="text" name="phoneno" placeholder="Enter Phone No*" value={phoneno} required onChange={(e) => setPhoneNo(e.target.value)}/>
                <Button type="submit" variant="contained" color="secondary">Continue</Button>
            </form>
        </div>
    </div>
    );
}

export default ShippingScreen; 