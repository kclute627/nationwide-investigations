import React, { Component } from 'react';
import naaps from "../assets/naaps.png";
import ilaaps from "../assets/ilaaps.png";
import adsi from "../assets/adsi.png";

class Members extends Component {

    render(){

        return(
            <div className="members__container">
                <div className="members__header">
                Affiliations
                </div>
                <div className="members__img">
                    <a href="https://napps.org/">
                        <img src={naaps} alt="National Association of Private Process servers" className="members__img-1"/>
                    </a>
                    <a href="http://ilapps.com/">
                        <img src={ilaaps} alt="" className="members__img-2"/>
                    </a>
                    
                   
                </div>

            </div>
        )
    }
}



export default Members;