import styled from "styled-components";

const Button = styled.div`
    width : 100%;
    border-radius: 8px;
    background-color: white;
    height: 40px;
    line-height: 40px;
    margin: 0 10px 0 10px;
    text-align: center;
    font-weight: 700;
    color: #939191;
    cursor: pointer;
`
const ButtonOrange = styled.div`
    width : 93.5%;
    border-radius: 8px;
    background-color: #eb5e55;
    height: 40px;
    line-height: 40px;
    padding: 10px 10px 10px 20px;
    text-align: center;
    font-weight: 700;
    color: white;
    margin-top: 10px;
    cursor: pointer;
`

export {
    Button,
    ButtonOrange
}