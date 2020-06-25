import React from 'react';
import style from './Home.module.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: true
        }
       
    }
    toggleClick = () => {
        this.setState(state=> ({
            value: !state.value
        }))
    }

    componentDidMount(){
       this.toggleClick();

       this.interval = setInterval(this.toggleClick, 4000)
    } 

    componentWillUnmount(){
       this.toggleClick();
       this.clear = clearInterval(this.interval)

    }
   

    render() {
        return (
            <div className={style.homePage}>
                <ul className={style.backImage}>
                    {this.state.value ? <li id={style.first}></li> : <li id={style.second}></li>}
                </ul>
                <div className={style.homeButton}>
                    <button onClick={this.toggleClick}></button><br />
                    <button onClick={this.toggleClick}></button>
                </div>
            </div>
        )
    }
}

export default HomePage;