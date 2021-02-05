import React from "react";
import s from './post.module.css';
import ava from './../../../../media/ava1.jpg';
import svgs from './../../../../css/flaticon/icons1.svg';
import ReactionButts from "./ReactionButts/ReactionButts";
import Comments from "./Comments/Comments";

const Post = (props) => {
    const post = props.post;
    return(
        <div className={s.post_div}>
            <img className={s.mini_ava} src={post.avatar}/>
            <div className={s.body_post}>
                <div className={s.name}>{post.author}</div>
                <div className={s.date}><i>Опубліковано: {post.date}</i></div>
                <div className={s.theme}><b>Тема:</b> {post.theme}</div>
                <div className={s.text}>{post.text}</div>
                <ReactionButts likes={post.likes}/>
                <Comments comments={post.comments}/>
            </div>
        </div> 
    ); 
}

export default Post;