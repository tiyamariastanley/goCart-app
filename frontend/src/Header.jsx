import React from "react";
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from "./shopping-cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { userSignout } from "./actions/userActions";
import lodash from 'lodash';
var _ = lodash;

function Header(){
  const cart = useSelector((state) => state.cartList);
  const { cartItems } = cart;
  const userData = useSelector( state => state.userSignin);
  const {userDetails} = userData;
  const dispatch = useDispatch();

  function logouthandler(){
    dispatch(userSignout());
  }

  return(
    <div fixed="top" className="navbar">
        <div className="navbar-brand">
        <img src={logo} weign="40" height="40" alt=""/>
        <Link to="/">goCart</Link>
        </div>
        <div className="desktop-query">
          <input placeholder="Search for products" className="desktop-searchBar"></input>
            <a className="desktop-submit">
              <span className="desktop-iconSearch sprites-search"><SearchIcon/></span>
            </a>
        </div>
        <div className="">
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