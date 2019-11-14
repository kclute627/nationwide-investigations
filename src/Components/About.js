import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


class About extends Component{

    render(){
        return(
            <div className="about">
                <Navbar about />
                <div className="about__container">
                    <div className="about__container-top"></div>
                    <div className="about__container-top-text">About Nationwide Investigations</div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;