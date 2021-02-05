import React from "react";
import s from './Messages.module.css';
import ava from './../../../media/ava.jpg';
import ava1 from './../../../media/ava1.jpg';
import Message from "./Message/Message";
import Send from "./Send/Send";


const Messages = (props) => {

    const mess = props.messages;
    console.log(mess);
    return(
        <div>
            <div className={s.mess}>
                <Message img={mess[0].avatar} author={mess[0].author} message={mess[0].message} time={mess[0].time}/>
                <Message img={mess[1].avatar} author={mess[1].author} message={mess[1].message} time={mess[1].time}/>
                <Message img={mess[2].avatar} author={mess[2].author} message={mess[2].message} time={mess[2].time}/>
                <Message img={mess[3].avatar} author={mess[3].author} message={mess[3].message} time={mess[3].time}/>
                <Message img={mess[4].avatar} author={mess[4].author} message={mess[4].message} time={mess[4].time}/>
                <Message img={mess[4].avatar} author={mess[4].author} message={mess[4].message} time={mess[4].time}/>
                <Message img={mess[4].avatar} author={mess[4].author} message={mess[4].message} time={mess[4].time}/>
                <Message img={mess[1].avatar} author={mess[1].author} message={mess[1].message} time={mess[1].time}/>
            </div>
            <div>
                <Send/>
            </div>
        </div>
    );
}

export default Messages;