import React from 'react';
import ReactSvg from 'react-svg';



const ServicesBox = (props) => {

    return(
        <div className="services__box-box">
            <div className="services__box-box-icon">
                <ReactSvg src={props.icon} />
            </div>
            <div className="services__box-box-header">{props.header}</div>
            <div className="services__box-box-text">{props.text}</div>

        </div>
    )

}


export default ServicesBox;