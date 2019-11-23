import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';



class Investigations extends Component{

    render(){

        return(
            <div className="investigations__container">
                <Navbar services="true" />
                <div className="investigations__middle">
                    <div className="investigations__middle-top">
                        
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}


export default Investigations;