import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from '../Components/Dropdown';
import ReactSvg from 'react-svg';
import logo from "../assets/logo/logo-large.png";
import phone from "../assets/icons/mobile.svg";
import mail from "../assets/icons/mail.svg";
import down from '../assets/icons/down.svg';


class Navbar extends Component {
    state={
        hover: false,
    }

    hoverHandler = ()=> {
        if(!this.state.hover){
            this.setState({hover: true})
        }
        
    }
    hoverLeave = () => {
        if(this.state.hover){
             this.setState({hover: false})
        }
       
    }

  render() {

  const {home} = this.props;
    return (
      <div className="navbar">
        <div className="navbar__top">
            <div className="navbar__top-left">
                <ReactSvg className="navbar__logo-left-phone" src={phone}/>
                <a href="tel:3123613598" className="navbar__top-left-number">312-361-3598</a>
                <ReactSvg src={mail}/>
                <a href="mailto:info@nationwide-investigations.com" className="navbar__top-left-number">info@nationwide-investigations.com</a>

            </div>

        </div>
        <div className="navbar__bottom">
          <a
            href="wwww.nationwide-investigations.com"
            className="navbar__bottom-logo"
          >
            <img src={logo} alt="" />
          </a>
          <div className="navbar__bottom-nav">
            <ul>
              <li className="navbar__bottom-nav-list">
                <Link className = { home ? "navbar__bottom-nav-list-item highlight" : "navbar__bottom-nav-list-item" } to="/">Home</Link>
              </li>
              <li className="navbar__bottom-nav-list" onMouseEnter={this.hoverHandler } onMouseLeave={this.hoverLeave}>
                <Link className = "navbar__bottom-nav-list-item " to="/services"> Services <ReactSvg clasname="navbar__bottom-icon" src={down}/> {this.state.hover ?<Dropdown/> :null }  </Link>
                
                
              </li>
              <li className="navbar__bottom-nav-list">
                <Link className = "navbar__bottom-nav-list-item" to="/about">About</Link>
              </li>
              <li className="navbar__bottom-nav-list">
                <Link className = "navbar__bottom-nav-list-item" to="/contact">Contact Us</Link>
              </li>
            </ul>
            
          </div>
          
          
        </div>
      </div>
    );
  }
}

export default Navbar;
