import axios from "axios"
import { ADD_SHIPMENT_DETAILS, CART_ADD_ITEM, CART_REMOVE_ITEM, PAYMENT_METHOD } from "../constants/cartConstant";

export const addToCart = (productId,qty) => async (dispatch,getState) =>{
        const {data} = await axios.get(`/api/products/${productId}`);
        dispatch({
            type: CART_ADD_ITEM ,
            payload: {
                pid : data._id,
                name : data.name,
                brand : data.brand,
                price : data.price,
                image : data.img,
                countInStock : data.countInStock,
                qty
            }
        });
        localStorage.setItem('cartItems',JSON.stringify(getState().cartList.cartItems));
    };

export const removeFromCart = (productId) => async (dispatch,getState) =>{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cartList.cartItems));
};

export const shipmentAddress = (data) => async (dispatch) =>{
    dispatch({
        type: ADD_SHIPMENT_DETAILS,
        payload : data
    });
    localStorage.setItem('shipmentDetails',JSON.stringify(data));
}

export const paymentMethod = (option) => async (dispatch) =>{
    dispatch({
        type: PAYMENT_METHOD,
        payload : option
    });
    localStorage.setItem('paymentOption',JSON.stringify(option));
}