import React, { Component } from 'react';
import Navbar from './Navbar';


class About extends Component{

    render(){
        return(
            <div className="about">
                <Navbar about />
            </div>
        )
    }
}

export default About;