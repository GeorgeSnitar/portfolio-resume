import React from "react";
import style from './styles/app.module.css';

import { Route, withRouter, BrowserRouter, Switch } from 'react-router-dom';
import Layout from "./components/Layout/layout";
import Header from './components/Header/Header';

import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ServicesPage from './components/Services/Services';
import WorkPage from './components/Work/Work';
import ContactPage from './components/Contact/Contact';

const App = () =>{

    return (
      <Layout>
        <BrowserRouter>
          <div className={style.appWrapper}>
            <Header />
            <div className={style.appWrapperContent}>
              <Switch>
                <Route exact path='/' component={HomePage} /> 
                <Route path='/about' render={() => <AboutPage />} /> 
                <Route path='/services' render={() => <ServicesPage />} /> 
                <Route path='/work' render={() => <WorkPage />} /> 
                <Route path='/contact' render={() => <ContactPage />} /> 
              </Switch>  
            </div>
          </div>
        </BrowserRouter>
     </Layout>
    )
  }


export default App
