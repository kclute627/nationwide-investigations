import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import phone1 from '../assets/icons/phone.svg';
 





class Homepage extends Component {


    render(){

        return (
            <div className="homepage__container">
               
                 <div className="homepage__container-header">
                  <h1>Trusted Process Servers </h1>
                  <h4>Serving all of Illinois and Headquarted in Chicago, IL </h4>
                  <div className="phone-box">
                      <div className="phone-box-1">Serving Illinois</div>
                      
                      <a href="href=tel:3123613598" className="phone-box-3"> <ReactSVG  src={phone1} /> 312-361-3598 </a>
                  </div>
                  <Link to='/contact' className="btn-left"> <span className="span__btn-1">Get A Free Quote</span></Link>             
                  
                </div>
                
                

            </div>
        )
    }
}

export default Homepage;