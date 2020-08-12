import React from "react";
import {reset } from "../redux/actions";
import { useDispatch } from "react-redux";
import '../App.css';

const Charity = () => {
  const dispatch = useDispatch();
  const resetValue = () =>{
      dispatch(reset());
  }
  return (
      <div className="App">
          <button className="btn" onClick={resetValue}>Give all your cash to carity</button>
      </div>
  )
}

export default Charity;