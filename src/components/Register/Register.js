import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
// import { Container, CssBaseline } from "@material-ui/core";

function Register() {

  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    console.log(name);
    value = e.target.value;
    setUser({ ...user, [name]: value });
    
  };
  console.log(user);

  const PostData = async (e) => {
    e.preventDefault();
    const { name,email,phone,password,cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    }).then((res) => res.json());

    window.alert(res.error)
    if(res.status === "success"){
    history.push("/signin");
    }
  };

  return (
    <div id="register">
      <div>
        <form className="FormBody" method="POST">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Enter Your Full Name"
            value={user.name}
            onChange={handleInputs}
            required
          />

          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter Your Email Id"
            value={user.email}
            onChange={handleInputs}
            required
          />
          <input
            type="number"
            name="phone"
            id="phone"
            autoComplete="off"
            placeholder="Enter Your Mobile Number"
            value={user.phone}
            onChange={handleInputs}
            required
            max="10"
            min="10"
          />

          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Password  "
            value={user.password}
            onChange={handleInputs}
            required
          />
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            autoComplete="off"
            placeholder="Enter Password Again "
            value={user.cpassword}
            onChange={handleInputs}
            required
          />
          <button id="signup" name="signup" onClick={PostData}>
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
