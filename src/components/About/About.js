import React from 'react';
import style from './About.module.css';
import Wrapper from '../Wrapper/Wrapper';
import { PageP } from '../StyledComponents/Styles';


const AboutPage = () => {
  return (
    <div className={style.aboutBlock}>
      <Wrapper>
        <div className={style.aboutText}>
         <PageP><span>ABOUT ME</span></PageP>
          <h2>WHO AM I?</h2>
          <p><strong>Hi! I'm George Snitar, from little town Khust. </strong>
           I'm 21 years old. I spend all of my free time by computer almost last two years.
            I had started to learn code when I was 19. I am Front-end developer and I can help you to create fast and well built site.</p>
          <p>I understood one thing that you have to constantly evolve and improve your skills.
            If not, you are 'die' in this innovation's world.</p>
        </div>
        <div className={style.aboutSoftware}>
          <img src={require('../../images/js.png')} />
          <h3>Software</h3>
        </div>
      </Wrapper>
    </div>
  )
}

export default AboutPage;