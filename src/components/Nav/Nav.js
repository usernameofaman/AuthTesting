import React, { useState, useEffect } from 'react'
import "./Nav.css"
import styled from 'styled-components';
import { Button } from '../Common/Button'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    width : 100%;
    height : 60px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    position: absolute;
    padding: 10px 0 0 0 ;
`

const Icon = styled.img`
    width : 40px;
    height: 40px;
    margin-left: 50px;
    border-radius: 5px;
`

const ButtonsWrapper = styled.div`
    width: 300px;
    padding: 10px;
    justify-content: space-between;
    display: flex;
    margin-right: 30px;
`

function Nav() {
    const [url, setUrl] = useState("")
    useEffect(() => {
        getURL()
    }, [url])

    const getURL = () =>{
        let urlCurrent = window.location.href
        setUrl(urlCurrent);
        console.log(urlCurrent)
        if (urlCurrent.split("/").length && urlCurrent.split("/").length === 3) {
            urlCurrent = urlCurrent.split("/")[2];
            // getUser(urlCurrent)
        }
    }

    const getUser = async (email) => {
        const res = await fetch(`https://node-microservice-task.herokuapp.com/userDetails/?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => res.json());
        console.log(res)
    }
    return (
        <>
            <Container>
                <NavLink to="/Home"><Icon onClick={() => setUrl("home")} src="/images/house.jpg" /></NavLink>
                <ButtonsWrapper>
                    {
                        !url.includes("Register") &&
                        <NavLink to="/Register"><Button onClick={() => setUrl("Register")}>Sign Up</Button></NavLink>
                    }
                    {
                        !url.includes("signin") &&
                        <NavLink to="/signin"><Button onClick={() => setUrl("signin")}>Sign In</Button></NavLink>
                    }
                </ButtonsWrapper>
            </Container>
        </>
    )
}

export default Nav;