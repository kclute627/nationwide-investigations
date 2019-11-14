import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';



class ProcessServing extends Component{

    render(){

        return(
            <div className="document__container">
                <Navbar services= "true"/>
                <Footer/>
            </div>
        )
    }
}


export default ProcessServing;