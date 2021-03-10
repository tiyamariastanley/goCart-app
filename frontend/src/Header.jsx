import React, { useState } from "react";
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from "./shopping-cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { userSignout } from "./actions/userActions";
import { findProduct, listProducts } from "./actions/productActions";

function Header(){
  const cart = useSelector((state) => state.cartList);
  const { cartItems } = cart;
  const userData = useSelector( state => state.userSignin);
  const {userDetails} = userData;
  const [query,find] = useState();
  const dispatch = useDispatch();

  function searchFun(){
    console.log("inside query");
    if(query === "")
      dispatch(listProducts());
    else
      dispatch(findProduct(query));
  }

  function handleKey(e){
    console.log(e.key);
    if(e.key === "Enter")
      dispatch(findProduct(query));
    else if(query === "")
      dispatch(listProducts());
  }

  function logouthandler(){
    dispatch(userSignout());
  }

  return(
    <div className="navbar">
        <div className="navbar-brand">
          <img src={logo} weign="40" height="40" alt=""/>
          <Link to="/">goCart</Link>
        </div>
        <div className="desktop-query">
          <a className="desktop-submit"><SearchIcon onClick={searchFun}/></a>
          <input placeholder="Search for products" className="desktop-searchBar" name="query" required onChange={(e) => find(e.target.value)} onKeyDown={handleKey}></input>
        </div>
        <div className="box3">
          {
            userDetails? 
            <NavDropdown title={userDetails.name} id="nav-dropdown">
              <NavDropdown.Item eventKey="1.1" onClick={logouthandler}>Logout</NavDropdown.Item>
            </NavDropdown> :
            <Link to="/Signin">
              <PermIdentityIcon/>
            </Link>
          }
          <Link to={`/cart/`}>
            { cartItems.length>0?
              (<Badge badgeContent={cartItems.length} color="secondary"><ShoppingCartOutlinedIcon/></Badge>)
              : (<ShoppingCartOutlinedIcon/>)
            }
            
          </Link>
        </div>
    </div>
  );
}

export default Header;
