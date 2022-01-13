import React, { useState , useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ButtonOrange } from "../Common/Button";

import "./Login.css";

const SignInContainer = styled.div`
padding-top: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SignInBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
`
const TitleText = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  margin-bottom: 10px;
`
const SubTitle = styled.div`
  width: 100%;
  font-size: 20px;
  align-self: center;
  text-align: center;
  margin-bottom: 40px;
`
const InputContainer = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 10px 10px 20px;
  outline: none;
  border: 1.2px solid #e7e3e3;
  border-radius: 5px;
  margin-top: 10px;
`

function Login() {
  const history = useHistory();
  useEffect(() => {
    
  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();
    if(email==="")
      window.alert("Enter credentials")
    const res = await fetch("https://node-microservice-task.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());



    if (res.responseData && res.responseData.status === "ok") {
      window.alert("Login Sucessfull");
      history.push(`/home/${email}`);
    } else {
      window.alert(res.responseData.error || "Unable to login")
    }
  };
  return (
    <>
      <SignInContainer>
        <SignInBox>
          <TitleText>
            Sign In To Get Started
          </TitleText>
          <SubTitle>
            Enter your details below
          </SubTitle>
          <InputContainer
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />
          <InputContainer
            type="password"
            name="email"
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password" />
          <ButtonOrange onClick={LoginUser}>
            Sign In
          </ButtonOrange>
        </SignInBox>
      </SignInContainer>
    </>
  );
}

export default Login;
