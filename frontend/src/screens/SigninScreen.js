import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { Container} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {userSignin} from "../actions/userActions";
import Loading from "../loading";

function SigninScreen(props){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const userData = useSelector( state => state.userSignin);
  const {userDetails,loading,error} = userData;
  const dispatch = useDispatch();
  const query = props.location.search ? props.location.search.split("=")[1] : "/";
  console.log(query);
  function submitHandler(e){
    e.preventDefault();
    dispatch(userSignin(email,password));
  }

  useEffect(() => {
    if(userDetails)
      props.history.push(query);
  },[props.history,query,userDetails])

  return(
  <Container className="top register">
    <h4>Login</h4>
    <hr></hr>
    <form onSubmit={submitHandler}>
      {loading && <Loading></Loading> }
      {error && <p>{error}</p>}
      <input type="email" name="email" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
      <Button type="submit" variant="contained" color="secondary">Sign in</Button>
    </form>
    <hr></hr>
    <p>New customer? <Link to={`/register?redirect=${query}`}>Register</Link></p>
  </Container>
  );
}

export default SigninScreen; 