import React, { Component } from 'react';
import ServicesBox from './ServicesBox';


class Services extends Component {

    render(){


        return(
            <div className="services__container">
                <div className="services__header"> Services </div>
                <div className="services__box">
                    <ServicesBox/>
                    <ServicesBox/>
                    <ServicesBox/>
                </div>

            </div>
        )
    }
}

export default Services; 