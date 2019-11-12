import React , { Component } from 'react';
import Navbar from './Navbar';





class Contact extends Component{

    render(){

        return(
            <div className="contact__container">
                <Navbar contact ="true"/>
            </div>
        )
    }
}

export default Contact; 