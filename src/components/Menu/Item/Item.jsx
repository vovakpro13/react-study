import React from "react";
import { NavLink} from "react-router-dom";
import svgs from './../../../css/flaticon/icons1.svg';
import s from  './Item.module.css';

const Item = (props) => {
    return <div className={s.item_menu}>
                <NavLink activeClassName={s.active} className={s.item_a} to={props.href}>
                    <svg className={s.menu_icon}>
                        <use href={svgs + '#' + props.icon}/>
                    </svg>
                    {props.text}
                </NavLink>
            </div>;
}

export default Item;