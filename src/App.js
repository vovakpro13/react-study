import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import s from './css/app.module.css';
import './css/animations.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Plants from "./components/Plants/Plants";
import Saves from "./components/Saves/Saves";

const App = (props) =>{
    return(
        <Router>
            <div id={s.wrapper}>
                <Header/>
                <div className={s.middle_content}>
                    <Menu/>
                    <div className={s.cond}>
                        <Switch>
                            <Route exact path="/profile">
                                <Profile userInfo={props.user} posts={props.posts} plants={props.plants}/>
                            </Route>
                            <Route exact path="/dialogs">
                                <Dialogs dialogs={props.dialogs}/>
                            </Route>
                            <Route  path="/plants">
                                <Plants plants={props.plants}/>
                            </Route>
                            <Route  path="/saves"> {/* exact */}
                                <Saves/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                
            </div>
        </Router>
    );
}

export default App;