import React from 'react';
import style from './ServicesBlocks.module.css';

const ServicesBlocks = (props) => {
    return(
        <>
          <div className={style.block} style={{borderBottom:props.bottom}}>
              <div className={style.blockFragment}><img src={props.img}/></div>
              <p>{props.text}</p>
          </div>
        </>
    )
}

export default ServicesBlocks;