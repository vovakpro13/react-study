import React from "react";
import s from './plant.module.css'
import Option from './Option/Option';
import { NavLink } from "react-router-dom";


const Plant = (props) => {
    console.log(props);
    const OptionsElements = props.options.map(opt => (<Option option={opt.option} text={opt.value}/>));
    return(
        <div className={s.conteiner}>
            <div className={s.image}><img src={props.img}/></div> 
            <div className={s.name}>{props.name}</div>

            <div className={s.desc}>                
                {OptionsElements}
            </div>
            <NavLink className={s.butt} to={`plants/${props.id}`}>Переглянути</NavLink>          
        </div>
        
    );
}

export default Plant;