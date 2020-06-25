import React from 'react';
import style from './Navbar.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component{
       constructor(props){
           super(props)

           this.state = {
               value:true
           }
       }

    toggleMethod=()=>{
        this.setState(state => ({
            value: !state.value
        }))
    }   

    render(){
    return (
        <nav className={style.navBar}>
        <button onClick={this.toggleMethod}><img src={require('../../images/buttonImg.png')}/></button>
          <div  className={this.state.value ? style.none : style.navToggle} id={style.linkStyle}>
            <div>
                <NavLink to="/">HOME</NavLink>
            </div>
            <div>
                <NavLink to="/about">ABOUT</NavLink>
            </div>
            <div>
                <NavLink to="/services">SERVICES</NavLink>
            </div>
            <div>
                <NavLink to="/work">WORK</NavLink>
            </div>
            <div>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>
          </div>  
          
        </nav>
    )
    } 
}

export default Navbar;