import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';



class Investigations extends Component{

    render(){

        return(
            <div className="investigations__container">
                <Navbar services="true"/>
                <Footer/>
            </div>
        )
    }
}


export default Investigations;