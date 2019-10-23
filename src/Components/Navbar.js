import React, { Component } from 'react';
import logo from '../assets/logo/logo-large.png'

class Navbar extends Component {

    render(){


        return(
            <div className="navbar">
                <div className="navbar__top">

                </div>
                <div className="navbar__bottom">
                    <a href="wwww.nationwide-investigations.com" className="navbar__bottom-logo">
                        <img src={logo} alt=""/>
                    </a>
                    <div className="navbar__bottom-nav">
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}



export default Navbar;