import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';




class Document extends Component{

    render(){

        return(
            <div className="document__container">
                <Navbar services="true"/>
                <Footer/>
            </div>
        )
    }
}


export default Document;