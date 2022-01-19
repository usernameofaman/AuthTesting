import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
`
const ImageContainer = styled.div`
  width: 100%;
  background-image: url('images/backdrop.jpg');
  background-size: cover;
  height: 100vh;
  padding: 200px 30px 30px 50px;
  color: #3a3335;
`
const HeroText = styled.div`
  /* margin-top : 30%; */
  font-size: 48px;
  font-weight: 700;
  width: 500px;
`

const SelectorWrapper = styled.div`
  width: 282px;
  height: 60px;
  background-color: white;
  display: flex;
  margin-top: 20px;
`

const LocationSelector = styled.div`
  /* width: 60px; */
  padding: 10px;
  color: #868686;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #939191;
    border-left: 1px solid #939191;
    border-bottom: 1px solid #939191;

`
const Select = styled.select`
    outline: none;
    border: none;
    width: 200px;
    margin-top: 5px;
`

const DateSelector = styled.input`
outline: none;
    border: none;
    width: 130px;
    margin-top: 5px;
`

const Icon = styled.img`
    width : 40px;
    height: 40px;
    border-radius: 5px;
`

function Menu() {
  return (
    <HomeContainer>
      <ImageContainer>
        <HeroText>
          Buy courses for your online learning
        </HeroText>
        <SelectorWrapper>
          <LocationSelector>
            <span style={{ marginLeft: "4px" }}>Location</span>
            <Select  >
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
            </Select>
          </LocationSelector>
          <LocationSelector style={{ borderRight: "1px solid #939191", cursor: "pointer" }}>
            <Icon src="/images/download.png" onClick={() => window.alert("This functionality was not mentioned")} />
          </LocationSelector>
        </SelectorWrapper>
      </ImageContainer>
    </HomeContainer >

  );
}

export default Menu;




