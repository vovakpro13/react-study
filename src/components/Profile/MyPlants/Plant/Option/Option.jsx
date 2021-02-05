import React from "react";
import s from './option.module.css'



const Option = (props) => {
    return(<div className={s.option}><b>{props.option}</b> {props.text}</div>);
}

export default Option;