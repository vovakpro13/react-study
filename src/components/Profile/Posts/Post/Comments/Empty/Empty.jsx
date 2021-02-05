import React from 'react';
import s from  './Empty.module.css';

const Empty = (props) =>{
    return <div className={s.empty}>{props.emptyText}</div>;
}
export default Empty;