import React, { Component } from 'react';
import ServicesBox from './ServiceBox';
import auction from '../assets/icons/auction.svg';
import library from '../assets/icons/library.svg';
import mag from '../assets/icons/magnifier.svg';
import scale from "../assets/icons/balance-scale.svg"


class Services extends Component {

    render(){


        return(
            <div className="services__container">
                <div className="services__header"> Services </div>
                <div className="services__box">
                    <ServicesBox
                    icon={scale}
                    header="Process Serving"/>
                    <ServicesBox
                    icon={mag}
                    header="Investigations"/>
                    <ServicesBox
                    header="Document Retrivial"
                    icon={library}/>
                </div>

            </div>
        )
    }
}

export default Services; 