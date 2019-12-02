import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Members from '../Members';



class ProcessServing extends Component{

    render(){

        return(
            <div className="document__container">
                <Navbar services= "true"/>
                <Members/>
                <Footer/>
            </div>
        )
    }
}


export default ProcessServing;