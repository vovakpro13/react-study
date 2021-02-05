import React from "react";
import logo from './../../media/plant.svg'
import s from './header.module.css'
import Search from "./Search/Search";

const Header = () => {
    return(
        <header className={s.header}>
            <div className={s.logoheader}>
                <img id={s.logo} src={logo}/>
                <span id={s.nog}><b>NOG</b> - network of gardeners </span>
            </div>
            <Search/>
        </header>
    );
}

export default Header;