import React from 'react';
import style from './Services.module.css';
import ServicesBlocks from './ServicesBlocks/ServicesBlocks';
import Wrapper from '../Wrapper/Wrapper';
import { PageP } from '../StyledComponents/Styles';


const ServicesPage = () => {
    return(
        <div className={style.servicesBlock}>
              <Wrapper>
                <div className={style.servicesText}>
                  <PageP><p>WHAT I DO?</p></PageP>
                  <h2>HERE ARE SOME OF MY<br /> EXPERTISE</h2>
                </div>
                <div className={style.servicesPosts}> 
                     <ServicesBlocks text={'ReactJs/Redux SPA'}       img={require('../../images/react.png')} />
                     <ServicesBlocks text={'JAMstack static site'}    img={require('../../images/jam.png')} />
                     <ServicesBlocks text={'HTML/CSS/JS landing page'}img={require('../../images/html.png')} />
                </div>
                </Wrapper>
        </div>
    )
}

export default ServicesPage;