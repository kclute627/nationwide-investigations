import React, { Component } from 'react';
import Navbar from '../Navbar';




class Document extends Component{

    render(){

        return(
            <div className="document__container">
                <Navbar services="true"/>
            </div>
        )
    }
}


export default Document;