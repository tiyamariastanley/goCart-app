import { ADD_SHIPMENT_DETAILS, CART_ADD_ITEM, CART_REMOVE_ITEM, PAYMENT_METHOD } from "../constants/cartConstant";

export const cartReducer = (state = {cartItems:[]},action) => {
    switch (action.type){
        case CART_ADD_ITEM:
            const newitem = action.payload;
            const existItem = state.cartItems.find(x => x.pid === newitem.pid);
            if(existItem){
                return {
                    ...state,cartItems: state.cartItems.map((x)=>
                        (x.pid === existItem.pid)? newitem : x)
                }
            } else {
               return {
                    ...state,cartItems:[...state.cartItems,newitem]  
               };
            }
        case CART_REMOVE_ITEM:
            const deleteItemId = action.payload;
            console.log(deleteItemId);
            return{
                ...state,cartItems: state.cartItems.filter(x => 
                    { return x.pid !== deleteItemId})
            }
        case ADD_SHIPMENT_DETAILS:
                return {
                    ...state,shipmentDetails:action.payload 
                };
        case PAYMENT_METHOD:
            console.log(action.payload);
            return {
                ...state,paymentOption:action.payload 
            };

        default:
            return state;
    }
};