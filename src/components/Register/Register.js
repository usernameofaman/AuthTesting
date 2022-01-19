import React, { useState, useEffect } from "react";
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
`;
const SignInBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  width: 100%;
  font-size: 20px;
  align-self: center;
  text-align: center;
  margin-bottom: 40px;
`;
const InputContainer = styled.input`
  width: 93%;
  height: 50px;
  padding: 10px 10px 10px 20px;
  outline: none;
  border: 1.2px solid #e7e3e3;
  border-radius: 5px;
  margin-top: 10px;
`;
const SelectContainer = styled.select`
  width: 100%;
  height: 50px;
  padding: 10px 10px 10px 20px;
  outline: none;
  border: 1.2px solid #e7e3e3;
  border-radius: 5px;
  margin-top: 10px;
`;

function Register() {
  useEffect(() => {
    getBoardData();
  }, []);

  const getBoardData = async () => {
    const res = await fetch("https://www.qlsacademy.com/api/board/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setBoardData([...res]);
    setStandardData([]);
  };

  const getMediumData = async (board) => {
    const res = await fetch(
      `https://www.qlsacademy.com/api/medium/?board_id=${board}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    setMediumData([...res]);
  };
  const getStandardData = async (medium) => {
    const res = await fetch(
      `https://www.qlsacademy.com/api/standard/?medium_id=${medium}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    setStandardData([...res]);
  };

  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpState, setSignUpStage] = useState(1);
  const [boardData, setBoardData] = useState([]);
  const [mediumData, setMediumData] = useState([]);
  const [standardData, setStandardData] = useState([]);
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    if (name === "board") {
      getMediumData(value);
      setBI(value);
    }
    if (name === "medium") {
      getStandardData(value);
      setMI(value);
    }
    if(name==="standard")
      setSI(value)
  };

  const [selectedBoardId, setBI] = React.useState([]);
  const [selectedMediumId, setMI] = React.useState([]);
  const [selectedStandardId, setSI] = React.useState([]);
  console.log(user);

  const changeState = () => {
    const { email } = user;
    setSignUpStage(1);
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, password, confirmPassword } = user;
    if (!selectedBoardId.length || !selectedMediumId || !selectedStandardId) {
      window.alert("Select all fields");
      return;
    }
    if (password !== confirmPassword) {
      window.alert("Passwords don't match");
      return;
    }
    if (name === "" || password === "" || confirmPassword === "") {
      window.alert("Fill all the details");
      return;
    }
    const res = await fetch(
      "https://node-microservice-task.herokuapp.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          selectedStandardId,
          selectedMediumId,
          selectedBoardId,
        }),
      }
    ).then((res) => res.json());
    if (res.responseData && res.responseData.error)
      window.alert(res.responseData.error);
    if (res.responseData && res.responseData.status === "success") {
      setSignUpSuccess(true);
    }
  };

  return (
    <>
      {signUpSuccess ? (
        <>
          <SignInContainer>
            <SignInBox>
              <TitleText>Thank You</TitleText>
              <SubTitle
                style={{
                  color: "#adadad",
                  fontSize: "15px",
                }}
              >
                We sent an email to {user.email} <br></br>Click confirmation
                link in the email to verify the account.
              </SubTitle>
              <ButtonOrange onClick={changeState}>
                Open Email App & Confirm
              </ButtonOrange>
            </SignInBox>
          </SignInContainer>
        </>
      ) : (
        <SignInContainer>
          <SignInBox>
            <TitleText>Sign Up To Get Started</TitleText>
            <SubTitle>Enter your details below</SubTitle>
            <InputContainer
              type="name"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Student Name"
              value={user.name}
              onChange={handleInputs}
              required
            />
            <SelectContainer
              type="board"
              name="board"
              id="board"
              autoComplete="off"
              placeholder="Student Name"
              value={user.board}
              onChange={handleInputs}
              required
            >
              {boardData.map((options) => (
                <option data-id={options.name} value={options.board_id}>
                  {options.board_name}
                </option>
              ))}
            </SelectContainer>
            {true && (
              <>
                <div style={{ display: "flex", width: "100%" }}>
                  <SelectContainer
                    style={{ marginRight: "10px" }}
                    type="text"
                    name="medium"
                    id="medium"
                    autoComplete="off"
                    placeholder="First Name"
                    value={user.medium}
                    onChange={handleInputs}
                    required
                  >
                    {mediumData.map((options) => (
                      <option
                        name={options.medium_name}
                        value={options.medium_id}
                      >
                        {options.medium_name}
                      </option>
                    ))}
                  </SelectContainer>
                  <SelectContainer
                    type="text"
                    name="standard"
                    id="standard"
                    autoComplete="off"
                    placeholder="Last Name"
                    value={user.standard}
                    onChange={handleInputs}
                    required
                  >
                    {standardData.map((options) => (
                      <option>{options.standard}</option>
                    ))}
                  </SelectContainer>
                </div>
                <InputContainer
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInputs}
                  required
                />
                <InputContainer
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  value={user.confirmPassword}
                  onChange={handleInputs}
                  required
                />
              </>
            )}
            {signUpState === 0 ? (
              <ButtonOrange onClick={changeState}>Sign Up</ButtonOrange>
            ) : (
              <ButtonOrange onClick={PostData}>Sign Up</ButtonOrange>
            )}
          </SignInBox>
        </SignInContainer>
      )}
    </>
  );
}

export default Register;
