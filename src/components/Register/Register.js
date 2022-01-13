import React, { useState } from "react";
import "./Register.css";
import styled from "styled-components";
import { ButtonOrange } from "../Common/Button";
// import { Container, CssBaseline } from "@material-ui/core";


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
  width: 93%;
  height: 50px;
  padding: 10px 10px 10px 20px;
  outline: none;
  border: 1.2px solid #e7e3e3;
  border-radius: 5px;
  margin-top: 10px;
`

function Register() {

  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const [signUpState, setSignUpStage] = useState(0)
  const [user, setUser] = useState({
    email: "", firstName: "", lastName: "", password: "", confirmPassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    console.log(name);
    value = e.target.value;
    setUser({ ...user, [name]: value });

  };
  console.log(user);
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    return (false)
  }

  const changeState = () => {
    const { email } = user;
    if (!ValidateEmail(email)) {
      window.alert("Invalid email")
      return
    }
    setSignUpStage(1);
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { email, firstName, lastName, password, confirmPassword } = user;
    if (!ValidateEmail(email)) {
      window.alert("Invalid email")
      return
    }
    if (password !== confirmPassword) {
      window.alert("Passwords don't match")
      return
    }
    if (email === "" || firstName === "" || lastName === "" || password === "" || confirmPassword === "") {

      window.alert("Fill all the details")
      return
    }
    const res = await fetch("https://node-microservice-task.herokuapp.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName
      }),
    }).then((res) => res.json());
    if (res.responseData && res.responseData.error)
      window.alert(res.responseData.error)
    if (res.responseData && res.responseData.status === "success") {
      setSignUpSuccess(true)
    }
  };

  return (
    <>
      {
        signUpSuccess ?
          <>
            <SignInContainer>
              <SignInBox>
                <TitleText>
                  Thank You
                </TitleText>
                <SubTitle style={{
                  color: "#adadad",
                  fontSize: "15px"
                }}>
                  We sent an email to {user.email} <br>
                  </br>Click confirmation link in the email to verify the account.
                </SubTitle>
                <ButtonOrange onClick={changeState}>
                  Open Email App & Confirm
                </ButtonOrange>
              </SignInBox>
            </SignInContainer>


          </>
          :

          <SignInContainer>
            <SignInBox>
              <TitleText>
                Sign Up To Get Started
              </TitleText>
              <SubTitle>
                Enter your details below
              </SubTitle>
              <InputContainer
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Your Email Id"
                value={user.email}
                onChange={handleInputs}
                required />
              {
                signUpState === 1 &&
                <>
                  <div style={{ display: "flex", width: "100%" }}>
                    <InputContainer
                      style={{ marginRight: "10px" }}
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="off"
                      placeholder="First Name"
                      value={user.firstName}
                      onChange={handleInputs}
                      required />
                    <InputContainer
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="off"
                      placeholder="Last Name"
                      value={user.lastName}
                      onChange={handleInputs}
                      required />
                  </div>
                  <InputContainer
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInputs}
                    required />
                  <InputContainer
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    value={user.confirmPassword}
                    onChange={handleInputs}
                    required />
                </>
              }
              {
                signUpState === 0 ?
                  <ButtonOrange onClick={changeState}>
                    Sign Up
                  </ButtonOrange>
                  :
                  <ButtonOrange onClick={PostData}>
                    Sign Up
                  </ButtonOrange>
              }
            </SignInBox>
          </SignInContainer>
      }
    </>
  );
}

export default Register;
