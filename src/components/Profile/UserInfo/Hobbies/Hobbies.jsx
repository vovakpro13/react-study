import React from "react";
import Hobbie from "./Hobbie/Hobbie";
import s from './hobbies.module.css'

const Hobbies = (props) => {
    const HobbiesElements = props.hobbies.map(hobbie => (<Hobbie hobbie={hobbie}/>));
    return(
         <div className={s.hobbies_div}>
            <div>Захоплення</div>
             <div className={s.hobbies}>{HobbiesElements}</div>      
          </div>        
    );
}

export default Hobbies;