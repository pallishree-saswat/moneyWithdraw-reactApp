import React from "react";
import { decreament} from "../redux/actions";
import {useDispatch} from "react-redux";
import '../App.css';

const TenKDebit = () =>{
    const dispatch = useDispatch();
    const decreaseValues = () =>{
        dispatch(decreament(10000));
    }
    return(
        <div className="App">
            <button className="btn" onClick={decreaseValues}>Withdraw 10,000</button>
        </div>
    )

}

export default TenKDebit;