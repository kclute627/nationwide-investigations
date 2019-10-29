import React, { Component } from 'react';
import Slideshow from './Slideshow';
import Dropdown from './Dropdown';




class Homepage extends Component {


    render(){

        return (
            <div className="homepage__container">
                <Slideshow/>
                <Dropdown/>

            </div>
        )
    }
}

export default Homepage;