import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";



function Menu() {
  return (
    <div className="body">
      <div className="container">
        <div className="card">
          <div className="content">
            <h1>Auth Test</h1>
            <h2>01</h2>
            <p> This is an auth Test</p>
            <NavLink className="register" exact to="/register" activeStyle={{ color: "black" }}>
              Register
      </NavLink>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h1>Auth Test</h1>
            <h2>02</h2>
            <p> This is an auth Test</p>
            <NavLink className="register" exact to="/signin" activeStyle={{ color: "red" }}>
              Login
      </NavLink>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h1>Auth Test</h1>
            <h2>02</h2>
            <p> This is Redux Demo</p>
            <NavLink className="register" exact to="/Redux" activeStyle={{ color: "red" }}>
              Redux Demo
       </NavLink>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Menu;




