import React from "react";
import s from './comments.module.css';
import AddComment from "./AddComment/AddComment";
import Comment from "./Comment/Comment";
import Empty from "./Empty/Empty";

const Comments = (props) => {
    let CommentsElements = props.comments.map(comment => (<Comment comment={comment}/>));
    if (!(Array.isArray(CommentsElements) && CommentsElements.length)) {
        CommentsElements = <Empty emptyText='Станьте першим, хто прокоментує пост!'/>;
    }
    return(
        <div className={s.comments_div}>
            <div className={s.title}>Коментарі</div>
            <AddComment />
            {CommentsElements}
        </div> 
    ); 
}

export default Comments;