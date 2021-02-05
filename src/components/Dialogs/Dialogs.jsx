import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import svgs from './../../css/flaticon/icons1.svg';
import { useRouteMatch, useParams, BrowserRouter, Switch, Route } from "react-router-dom";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

    const {path,url} = useRouteMatch();
    
    const Routers = [];

    const Dialogs = props.dialogs.map(dialog => {
        Routers.push(<Route path={`${url}/${dialog.id}`}><Messages messages={dialog.messages}/></Route>);
        return <Dialog url={url} id={dialog.id} img={dialog.img} dialog={dialog.dialog}  />;  
     });
    


    return(
        <BrowserRouter>
            <div className={s.con}>
                <div>

                    <div className={s.dialogs_div}>
                        <div className={s.title_d}>Діалоги</div>
                        <div className={s.dialogs}>{Dialogs}</div>
                    </div>

                    <div className={s.messages}>
                        <div className={s.title}>
                            Повідомлення
                        </div>
                        <Switch>
                            <Route exact path={url}>
                                <div className={s.non}>
                                    <div className={s.first}><b>Приємного спілкування!</b></div> 
                                    <div className={s.second}>Оберіть співрозмовника</div>
                                    <svg><use href={svgs + '#arrow'}/></svg>
                                </div>
                            </Route>
                            {Routers}
                        </Switch>
                    </div>

                </div>
                
                <svg><use href={svgs + '#dial_pot'}/></svg>

            </div>
        </BrowserRouter>
        
    );
}

export default Dialogs;