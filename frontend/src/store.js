import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer} from './reducers/cartReducer';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const initialState = {
  userSignin:{
    userDetails: localStorage.getItem('userDetails')? JSON.parse(localStorage.getItem('userDetails')) : null
  },
  cartList:{
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    shipmentDetails: localStorage.getItem('shipmentDetails')? JSON.parse(localStorage.getItem('shipmentDetails')):{},
    paymentOption: localStorage.getItem('paymentOption')? JSON.parse(localStorage.getItem('paymentOption')): null
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cartList : cartReducer,
  userSignin : userSigninReducer,
  userRegister : userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;