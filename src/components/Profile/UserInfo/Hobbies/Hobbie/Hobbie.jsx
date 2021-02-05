import React from "react";
import s from './hobbie.module.css'

const Hobbie = (props) => {
    return <div className={s.hobbie}>{props.hobbie}</div>;
}

export default Hobbie;