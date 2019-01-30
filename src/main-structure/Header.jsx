import React from 'react';
import logo from './../main_logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <img src={logo} alt="asdf"/>
            </div>
        </header>
    );
}

export default Header;