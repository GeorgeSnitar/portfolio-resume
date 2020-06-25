import React from 'react';
import style from './Work.module.css';
import Wrapper from '../Wrapper/Wrapper';
import WorkBlock from './WorkBlock/WorkBlock';
import { PageP } from '../StyledComponents/Styles';
import recipeImg from '../../assets/ReactRecipe.png';

const WorkPage = () => {
    return(
        <div className={style.workBlock}>
            <Wrapper>
                <div>
                <PageP><p>MY WORK</p></PageP>
                    <h2>RECENT WORK</h2>
                </div>
                <div className={style.blockContainer}>
                    <WorkBlock img={recipeImg}/>
                    <WorkBlock />
                    <WorkBlock />
                    <WorkBlock />
                </div>
            </Wrapper>
        </div>
    )
}

export default WorkPage;