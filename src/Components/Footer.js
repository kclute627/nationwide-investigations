import React, { Component } from 'react';
import logo from '../assets/logo/white_logo.png';
import ReactSvg from 'react-svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import link from '../assets/icons/linkedin2.svg';
import insta from '../assets/icons/instagram.svg';


class Footer extends Component{

    render(){

        return(
            <div className='footer'>
                <div className="footer__right">
                     <img src={logo} alt="" className="footer__right-logo"/>
                     <a href="https://www.facebook.com/chicago.background.investigations" target="blank" className="footer__right-link"> <ReactSvg src={facebook}/></a>
                     <a href="https://www.facebook.com/chicago.background.investigations" target="blank" className="footer__right-link-1"> <ReactSvg src={twitter}/></a>
                     <a href="https://www.facebook.com/chicago.background.investigations" target="blank" className="footer__right-link-2"> <ReactSvg src={link}/></a>
                     <a href="https://www.facebook.com/chicago.background.investigations" target="blank" className="footer__right-link-3"> <ReactSvg src={insta}/></a>
                </div>
            
               

            </div>

        )
    }
}


export default Footer; 