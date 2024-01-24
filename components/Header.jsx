import React from "react"
import logo from "../src/assets/logo.png"

function Header() {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <span>my travel journal.</span>
        </header>
    )
}

export default Header