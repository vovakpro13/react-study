import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialog.module.css'


const Dialog = (props) => {
    return (
        <NavLink to={props.url + '/' + props.id} className={s.dialog} activeClassName={s.active} >
            <img src={props.img}/>
            <div>{props.dialog} </div>
        </NavLink>
    );
} 

export default Dialog;