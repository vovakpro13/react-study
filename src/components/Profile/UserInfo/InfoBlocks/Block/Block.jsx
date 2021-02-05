import React from "react";
import s from './block.module.css'

const Block = (props) => {
    return(
        <div className={s.min_info_item}><svg><use href={props.svg}/></svg>{props.text}</div>        
    );
}

export default Block;