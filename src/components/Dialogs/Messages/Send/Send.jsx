import React from "react";
import s from './Send.module.css';
import svgs from './../../../../css/flaticon/icons1.svg';

const Send = (props) => {
    return(
        <div className={s.send}>
           <textarea ></textarea>
           <div className={s.butt} onClick={() => alert('sended')}><svg><use href={svgs + '#send'}/></svg></div>
        </div>
    );
}

export default Send;