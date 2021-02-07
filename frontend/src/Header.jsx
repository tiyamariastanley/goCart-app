import React from "react";
import {Navbar,Nav,Button,Form,FormControl,CardColumns,Card} from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from "./shopping-cart.png";

function Header(){

  return(
    <header>
      <Navbar fixed="top">
        <Navbar.Brand href="#home">
        <img src={logo} weign="40" height="40"/>goCart
        </Navbar.Brand>
        <div className="desktop-query">
          <input placeholder="Search for products" className="desktop-searchBar"></input>
            <a className="desktop-submit">
              <span className="desktop-iconSearch sprites-search"><SearchIcon/></span>
            </a>
        </div>
        <Nav className="ml-auto">
          <Nav.Link href="#home"><PersonIcon/></Nav.Link>
          <Nav.Link href="#features"><ShoppingCartIcon/></Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
