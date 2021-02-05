import React from "react";
import s from './profile.module.css'
import Plants from "./MyPlants/Plants";
import Posts from "./Posts/Posts";
import UserInfo from "./UserInfo/UserInfo";


const Profile = (props) => {
    return(
        <div className={s.con}>
            <div id={s.user}>
                <UserInfo ui={props.userInfo}/>
                <Posts posts={props.posts}/>
            </div>
            <Plants plants={props.plants}/>
        </div>
    );
}

export default Profile;