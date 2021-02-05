import React from "react";
import s from './Message.module.css';


const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.user}>
                <img src={props.img}/>
                <div>{props.author}</div>
            </div>
            <div className={s.text_time}>
                <div className={s.text}>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;