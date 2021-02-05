import React from "react";
import Block from "./Block/Block";
import s from './infoblocks.module.css'
import svgs from './../../../../css/flaticon/icons1.svg';

const InfoBlocks = (props) => {
    const InfoBlocksElements = props.blocks.map(block => <Block svg={`${svgs}#${block.svg}`} text={block.text}/>);
    return(
        <div className={`${s.blocks_div}`}>
            <div className={s.min_info}>{InfoBlocksElements}</div>
        </div>
    );
}

export default InfoBlocks;