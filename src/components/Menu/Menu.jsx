import React from "react";
import Item from "./Item/Item";
import s from  './menu.module.css';

const Menu = () => {
    return(
        <div id={s.menu}>
            <div className={s.m_photo}>
                <div className={s.text_m}>Меню</div>
                
            </div>
            <div className={s.menu_elements}>
                <Item  text='Профіль' icon='profile' href='/profile'/>
                <Item text='Повідомлення' icon='message' href='/dialogs'/>
                <Item text='Рослини' icon='pot' href='/plants'/>
                <Item text='Збережене' icon='save' href='/saves'/>
                
            </div>
            
        </div> 
    );
}

export default Menu;