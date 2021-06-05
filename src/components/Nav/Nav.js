import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <>
        <div className="navbar">
            <div className="items">
                <ul className="items-box">
                    <a href="/"><li>HOME</li></a>
                    <a href="/Redux"><li>DEMO</li></a>
                    <a href="signin"><li>LOGIN</li></a>
                    <a href="/Register"><li>REGISTER</li></a>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav;