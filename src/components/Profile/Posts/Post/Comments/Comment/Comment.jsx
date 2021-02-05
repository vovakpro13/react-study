import React from "react";
import s from './comment.module.css';
import svgs from './../../../../../../css/flaticon/icons1.svg';

const Comment = (props) => {
    const com = props.comment;
    return(
        <div className={s.comment_div}>
            <div className={s.user_div}>
                <div className={s.avatar}><img src={com.avatar}/></div>
                <div className={s.name}><a className={s.link_user} href="#"></a>{com.username} <i>коментує:</i></div>
                
            </div>
            
            <div className={s.comment}>
                <div className={s.comment_text}>{com.comment}</div>
                <div className={s.down_block}>
                    <i className={s.date}>Додано: {com.date}</i>
                    <button className={s.answer}>Відповісти</button>
                </div>
            </div>

            
            
            
        </div> 
    ); 
}

export default Comment;