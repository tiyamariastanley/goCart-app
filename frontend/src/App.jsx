import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./data";

function App() {
  return (
    <div className="grid-container"> 
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </div>
  );
}

export default App;
