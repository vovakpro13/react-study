import React from "react";
import s from './addpost.module.css';
import svgs from './../../../../css/flaticon/icons1.svg';


const AddPost = () => {
    return(
        <div className={s.add_post_div}>
            <div className={s.add_title}><strong>Новий запис</strong></div>
            <div className={s.div_text}>
                <textarea className={s.text} placeholder="Є щось цікаве?"></textarea>
                <svg className={s.add_button} onClick={() => alert("Added")} ><use href={svgs + '#plus'}/></svg>
                
            </div>
        </div>
    );
} 

export default AddPost;