import React from "react";
import s from './avatar.module.css';

const Avatar = (props) => {
    return <div className={s.avatar}><img  src={props.avatar}/></div>;
}

export default Avatar;