import React from "react";
import img from './../media/menu.jpg'
import Logo from './../css/flaticon/icons1.svg'


const Menu = () => {
    return(
        <div id="menu">
            <img id="menu_img" src={img}/>
            <div className="menu-elements">
                <div className="item-menu"><a href="#"><svg className="menu-icon"><use href={Logo + '#profile'}/></svg>Профіль</a></div>
                <div className="item-menu"><a href="#"><svg className="menu-icon"><use href={Logo + '#message'}/></svg>Повідомлення</a></div>
                <div className="item-menu"><a href="#"><svg className="menu-icon"><use href={Logo + '#news'}/></svg>Новини</a></div>
                <div className="item-menu"><a href="#"><svg className="menu-icon"><use href={Logo + '#pot'}/></svg>Рослини</a></div>
                <div className="item-menu"><a href="#"><svg className="menu-icon"><use href={Logo + '#music'}/></svg>Музика</a></div>
                <div className="item-menu"><a href="#"><svg className="menu-icon"><use href={Logo + '#settings'}/></svg>Налаштування</a></div>
            </div>
            
        </div>
    );
}

export default Menu;