import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import CheckoutComponent from "../checkoutComponent";
import { useDispatch, useSelector } from "react-redux";
import { paymentMethod } from "../actions/cartActions";

function PaymentScreen(props){
    const userData = useSelector( state => state.userSignin);
    const {userDetails} = userData;
    if(!userDetails)
        props.history.push('/signin');

    const [option,setOption] = useState('paypal');
    const dispatch = useDispatch();

    function handleChange(e){
        setOption(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        console.log(option);
        dispatch(paymentMethod(option));
        props.history.push('/placeorder');
    }

    return(
    <div>
        <CheckoutComponent step1 step2 step3></CheckoutComponent>
        <div className="shipping">
        <h5>Payment Method</h5>
        <hr></hr>
        <form onSubmit={submitHandler}>
            <RadioGroup aria-label="payment" defaultValue="PayPal" onChange={handleChange}>
                <FormControlLabel value="PayPal" control={<Radio />} label="PayPal"/>
                <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
            </RadioGroup>
            <Button type="submit" variant="contained" color="secondary">Continue</Button>
        </form>
        </div>
    </div>
    );
}

export default PaymentScreen; 