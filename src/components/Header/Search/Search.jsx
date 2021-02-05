import React from "react";
import s from './search.module.css'
import svgs from './../../../css/flaticon/icons1.svg'

const Search = () => {
    return(
        <div className={s.search}>
            <button className={s.button}><svg id={s.search_icon}><use href={svgs + '#search'} /></svg></button>
            <input id={s.search_text} type="text" placeholder="Пошук"/>
        </div>
    );
}

export default Search;