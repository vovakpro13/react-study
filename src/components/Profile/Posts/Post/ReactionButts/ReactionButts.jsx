import React from "react";
import s from './reactionbutts.module.css';
import svgs from './../../../../../css/flaticon/icons1.svg';

const ReactionButts = (props) => {
    return(
        <div className={s.buttons_div}>
            <div className={s.like_text}>
                <button className={`${s.like} ${s.butt}`}><svg><use href={svgs + "#like"}/></svg></button>
                Сподобалось: {props.likes}
            </div>
            <div className={s.butts}>
                
                <button className={`${s.comment} ${s.butt}`}><svg><use href={svgs + "#comment"}/></svg></button>
                <button className={`${s.save} ${s.butt}`}><svg><use href={svgs + "#save"}/></svg></button>
            </div>
            
        </div>
          
    ); 
}

export default ReactionButts;