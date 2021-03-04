import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../actions/userActions";
import Loading from "../loading";

function RegisterScreen(props){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cPassword,setCPassword] = useState('');
  const userData = useSelector( state => state.userRegister);
  const {userDetails,loading,error} = userData;
  const query = props.location.search ? props.location.search.split("=")[1] : "/";
  const dispatch = useDispatch();

  function registerHandler(e){
    e.preventDefault();
    if(password !== cPassword)
        alert("Password and Confirm password do not match!!");
    else
      dispatch(userRegister(name,email,password));
  }

  useEffect(() => {
    if(userDetails)
      props.history.push(query);
  },[props.history,query,userDetails])

    return(
    <Container className="top register">
      <h4>Register</h4>
      <hr></hr>
      <form onSubmit={registerHandler}>
        {loading && <Loading></Loading>}
        {error && <p>{error}</p>}
        <input type="text" name="name" placeholder="Full Name" required onChange={(e) => setName(e.target.value)}/>
        <input type="email" name="email" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" name="cpassword" placeholder="Confirm password" required onChange={(e) => setCPassword(e.target.value)}/>
        <Button type="submit" variant="contained" color="secondary">Register</Button>
      </form>
      <hr></hr>
      <p>Already have an account? <Link to={`/signin?redirect=${query}`}>Sign in</Link></p>
    </Container>
    );
}

export default RegisterScreen; 