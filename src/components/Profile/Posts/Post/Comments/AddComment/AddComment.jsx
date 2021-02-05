import React from "react";
import s from './addcomments.module.css';
import svgs from './../../../../../../css/flaticon/icons1.svg';

const AddComment = () => {
    return(
        <div className={s.add_comment_div}>
            <div className={s.title}>Додати коментар</div>
            <div className={s.area}>
                <textarea></textarea>
                <svg onClick={() => alert("Added")} ><use href={svgs + '#plus'}/></svg>
            </div>
        </div> 
    ); 
}

export default AddComment;