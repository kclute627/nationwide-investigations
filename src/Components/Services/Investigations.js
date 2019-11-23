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
                   <div className="investigations__middle-box-1">
                       <div className="investigations__middle-box-1-header">Private Investigations</div>

                   </div>
                   <div className="investigations__middle-box-2">
                       <div className="investigations__middle-box-2-header">Criminal Investigations</div>
                   </div>
                </div>

                <Footer />
            </div>
        )
    }
}


export default Investigations;