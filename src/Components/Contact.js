import React , { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactUs from './ContactUs';





class Contact extends Component{

    render(){

        return(
            <div className="contact__container">

                <Navbar contact ="true"/>
                <ContactUs/>
                <Footer/>
            </div>
        )
    }
}

export default Contact; 