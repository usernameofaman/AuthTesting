import React from 'react';
import "./custom.css"
import {useSelector, useDispatch } from 'react-redux'
import { incNumber , decNumber } from "./Actions"
import plus from "./Images/plus.png"
import minus from "./Images/minus.png"
import Cart from "./Images/cart.png"



const ReduxUI = () => {
    const myState = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    return (
        <>
            <div className="quantity">
                <div className="cart-containter">
                 <img id="cart" src={Cart} alt="" />
                 <input id="count" type="text" className="quantity_input" value={ myState } />
                </div>
            <h1>Welcome To Redux</h1>
            <p>This is a simple example of Redux showing cart number of items</p>
                <div className="buttons">
                <h3>Oneplus 7T Pro</h3>
                <a href="#profile" onClick={ () => dispatch(decNumber()) } className="quantity_minus"><img src={minus} alt=""/></a>
                <a href="#Nothing/" onClick={ () => dispatch(incNumber()) }  className="quantity_minus"><img src={plus} alt=""/></a>
                </div>
            </div>
        </>
    )
};

export default ReduxUI;
