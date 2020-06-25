import React from 'react';
import style from './WorkBlock.module.css';

const WorkBlock = (props) => {
    return (
        <>
            <div className={style.block}>
                <a href={props.url}><img className={style.blockImage}src={props.img} /></a>
            </div>
        </>
    )
}

export default WorkBlock;