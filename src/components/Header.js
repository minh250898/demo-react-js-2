import React from "react"
import logo from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" width={"50px"} className="header-image" />
            <h2 className="header-title">Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}
