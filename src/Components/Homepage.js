import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import phone1 from '../assets/icons/phone.svg';
import mail from '../assets/icons/mail.svg';
import home from '../assets/icons/home.svg';
 





class Homepage extends Component {


    render(){

        return (
            <div className="homepage__container">

               
                 <div className="homepage__container-header">
                  <h1>Trusted Process Servers </h1>
                  <h4>Serving all of Illinois and Headquarted in Chicago, IL </h4>
                  
                  <Link to='/contact' className="btn-left"> <span className="span__btn-1">Get A Free Quote</span></Link>             
                  
                </div>
                <div className="phone-box">
                      <div className="phone-box-22">Process Servers</div>
                      <div className="phone-box-1">Serving Illinois</div>
                      <div className="phone-box-info">
                          
                      </div>
                      <a href="href=malto:info@nationwide-investigations.com" className="phone-box-3">EMAIL</a>
                      <div className="phone-box-5">  116 W Jackson <br/> Suite #254 <br/>Chicago, IL 60604 </div>
                      
                      <a href="href=tel:3123613598" className="phone-box-4">  312-361-3598 </a>
                      <ReactSVG  src={home} className='svg-1'/>
                      <ReactSVG  src={phone1} className='svg-2'/>
                      <ReactSVG  src={mail} className='svg-3'  />

                  </div>
                
                

            </div>
        )
    }
}

export default Homepage;