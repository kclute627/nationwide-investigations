import React , { Component } from 'react';
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactUs from './ContactUs';





class Contact extends Component{

    render(){

        return(
            <div className="contact__container">
                  <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Process Server, Chicago process Server, process serving, Illinois Process Server, Same-day Process Service"
          />
          <meta name='description' content='Contact Us if you need a process server in Illinois'/>
          <title>Process Server // Contact Us </title>
         
        </Helmet>

                <Navbar contact ="true"/>
                <ContactUs/>
                <Footer/>
            </div>
        )
    }
}

export default Contact; 