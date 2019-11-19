import React , { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';





class Contact extends Component{

    render(){

        return(
            <div className="contact__container">
                <Navbar contact ="true"/>
                <Footer/>
            </div>
        )
    }
}

export default Contact; 