import React from "react";
import logo from './../media/plant.svg'
import './../css/header.css'

const Header = () => {
    return(
        <header>
            <div className="logo-header">
                <img id="logo" src={logo}/>
                <span id="nog"><b>NOG</b> - network of gardeners </span>
            </div>
            <div className="search">
                <input type="text" value="fffF"/>
            </div>
        </header>
    );
}

export default Header;