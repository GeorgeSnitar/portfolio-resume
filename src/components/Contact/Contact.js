import React from 'react';
import style from './Contact.module.css';
import Wrapper from '../Wrapper/Wrapper'

const ContactPage = () => {
    return (
        <div className={style.contact}>
            <div className={style.contactBox}>
                <div className={style.contactBlock}>
                    <a href='https://www.linkedin.com/in/george-snitar-56563618a/'><img src={require('../../images/linkedin.png')} /></a>  <p>George Snitar</p>
                </div>
                <div className={style.contactBlock}>
                    <a href='https://www.instagram.com/george_snitar/'><img src={require('../../images/insta.png')} /></a> <p>george_snitar</p>
                </div>
                <div className={style.contactBlock}>
                    <a href=''><img src={require('../../images/gmail.png')} /></a> <p>foxintel229u@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;