import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import './css/profile.css';
import './css/animations.css';

const App = () =>{
    return(
        <div id="wrapper">
            <Header/>
            <div className="middle-content">
                <Menu/>
                <Profile/>
            </div>
            
        </div>
    );
}

export default App;