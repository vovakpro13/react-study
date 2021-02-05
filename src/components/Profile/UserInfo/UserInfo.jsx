import React from "react";
import s from './userinfo.module.css';
import Hobbies from './Hobbies/Hobbies';
import Avatar from "./Avatar/Avatar";
import InfoBlocks from "./InfoBlocks/InfoBlocks";



const UserInfo = (props) => {
    return(
        <div className={s.info}>    
            <Avatar avatar={props.ui.avatar}/>
            <div className={s.about}>
                <div className={`${s.name} ${s.item} `}><b>{props.ui.name}</b></div>
                <div className={`${s.item} ${s.status}`}>{props.ui.status}</div>
                <InfoBlocks blocks={props.ui.infoblocks}/>
                <Hobbies hobbies={props.ui.hobbies}/> 
            </div>
        </div>
    );
}

export default UserInfo;