import React from 'react';
import style from './Header.module.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.textAlign}>
                <div className={style.myPhoto}></div>
                <div className={style.textAbout}>
                    <h3>Snitar George</h3>
                    <span className={style.status}><a href="#">REACT JS DEVELOPER</a> IN UKRAINE</span>
                </div>
            </div>

            <Navbar />
        </div>
    )
}

export default Header;