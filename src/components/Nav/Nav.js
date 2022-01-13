import React from 'react'
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
    console.log()
    return (
        <>
            <Container>
                <Icon src="/images/house.jpg" />
                <ButtonsWrapper>
                    {
                        !window.location.pathname.includes("Register") &&
                        <NavLink to="/Register"><Button>Sign Up</Button></NavLink>
                    // <a href="Register"><Button>Sign Up</Button></a>
                }
                    {
                        !window.location.pathname.includes("signin") &&
                        <a href="signin"><Button>Sign In</Button></a>
                    }
                </ButtonsWrapper>
            </Container>
        </>
    )
}

export default Nav;