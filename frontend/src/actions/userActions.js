import axios from "axios";
import { USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSignin = (email,password) => async (dispatch) => {
    console.log(email);
    dispatch( {type: USER_SIGNIN_REQUEST});
    try{    
        const {data} = await axios.post('/api/users/signin',{email,password});
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userDetails',JSON.stringify(data));
    }catch (error){
        dispatch({ type: USER_SIGNIN_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
    }
}

export const userSignout = () => async (dispatch) =>{
    localStorage.removeItem('userDetails');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shipmentDetails');
    dispatch({type:USER_SIGNOUT});
}

export const userRegister = (name,email,password) => async (dispatch) =>{
    console.log(name);
    dispatch({type: USER_SIGNIN_REQUEST});
    try{
        const {data} = await axios.post('/api/users/register',{name,email,password});
        console.log(data);
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userDetails',JSON.stringify(data));
    }catch(error){
        dispatch({ type: USER_REGISTER_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
    }
}