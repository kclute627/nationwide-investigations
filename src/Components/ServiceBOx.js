import React from 'react';
import ReactSvg from 'react-svg';
import { Link } from "react-router-dom";


const ServicesBox = (props) => {

    return(
        <div className="services__box-box">
            <div className="services__box-box-icon">
                <ReactSvg src={props.icon} />
            </div>
            <div className="services__box-box-header">{props.header}</div>
            <div className="services__box-box-text">{props.text}</div>
            <Link to={props.btnPath} className="services__box-box-btn"><button className="services__box-box-btn-1">{props.btnText}</button></Link>

        </div>
    )

}


export default ServicesBox;