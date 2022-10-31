import React from 'react';
import logo from "./../../assets/logo.svg"
import "../styles/header/Header.scss"

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header-general">
                    <img src={logo} alt=""/>
                    <div className="header-general__nav">
                        <a href="#">MAIN</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">SERVICES</a>
                        <a href="#">GALLERY</a>
                        <a href="#">CONTACTS</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;