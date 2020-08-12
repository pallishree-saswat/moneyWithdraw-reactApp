import React from "react";
import {decreament } from "../redux/actions";
import { useDispatch} from "react-redux";
import '../App.css';

const FiveKDebit = () =>{
    const dispatch = useDispatch();
    const decreaseValues = () =>{
        dispatch(decreament(5000));
    }
    return(
        <div className="App">
            <button className="btn" onClick={decreaseValues} >Widthdraw 5000</button>
        </div>
    )
}

export default FiveKDebit;