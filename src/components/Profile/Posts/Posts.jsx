import React from "react";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import s from './posts.module.css'

const Posts = (props) => {
    const PostsElements = props.posts.map(post => (<Post post={post}/>));
    console.log(PostsElements);
    return(
        <div className={s.posts_div}>
            <AddPost/>
            {PostsElements}
        </div>
    );
}

export default Posts;