import React,{useState} from 'react';
import './App.css';
import Charity from "./components/charity"
import TenKDebit from './components/TenKDebit';
import FiveKDebit from "./components/FiveKDebit"

import {useSelector} from "react-redux"
const App = () => {
 const value = useSelector((state) => state.value);
 const pic = useSelector((state) => state.pic);
 const name = useSelector((state) => state.name)
  return (
    <div className="App">
      <div className="main-box">
        <div className="total">
        <img  className="profile" src={pic} alt= ""/>
        <h2>Hii {name} </h2>
        <h1>Total amount: {value}</h1>
        </div>

<div className="debit">
    <FiveKDebit />
    <TenKDebit/>
    <Charity />
    </div>
      </div>
    
    </div>
  );
}

export default App;
