import React from "react";
import Plant from "./Plant/Plant";
import s from './plants.module.css';
import svgs from './../../../css/flaticon/icons1.svg';


const Plants = (props) => {
    console.log(props.plants);
    const PlantsElements = props.plants.map(plant => ( 
        <Plant id={plant.id} name={plant.name} img={plant.img} options={plant.options} />
    ));
    return(
        <div className={s.conteiner}>
            <div className={s.title}>
                <b><svg className={s.planticon}><use href={svgs + '#pot'}/></svg>Мої рослини</b>
            </div>
            <div className={s.plants}>
                {PlantsElements}
            </div>
            
        </div> 
        
    );
}

export default Plants;