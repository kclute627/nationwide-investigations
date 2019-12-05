import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal/Fade";
import Dropdown from "../Components/Dropdown";
import ReactSvg from "react-svg";
import logo from "../assets/logo/logo-large.png";
import phone from "../assets/icons/mobile.svg";
import mail from "../assets/icons/mail.svg";
import down from "../assets/icons/down.svg";

class Navbar extends Component {
  state = {
    hover: false,
    phoneClicked: false
  };

  componentWillUnmount() {}

  hoverHandler = () => {
    if (!this.state.hover) {
      this.setState({ hover: true });
    }
  };
  hoverLeave = () => {
    if (this.state.hover) {
      this.setState({ hover: false });
    }
  };

  clickHandler = () => {
    this.setState({
      phoneClicked: !this.state.phoneClicked
    });
  };

  render() {
    if (this.state.phoneClicked) {
      document.body.style.overflow = "hidden";
    }

    if (!this.state.phoneClicked) {
      document.body.style.overflow = "unset";
    }

    const phoneNav = (
      <div className="phone__nav" onClick={this.clickHandler}>
        <div
          className={
            this.state.phoneClicked
              ? "phone__nav-1 transition-3 "
              : "phone__nav-1"
          }
        ></div>
        <div
          className={
            this.state.phoneClicked
              ? "phone__nav-2 transition-1"
              : "phone__nav-2"
          }
        ></div>
        <div
          className={
            this.state.phoneClicked
              ? "phone__nav-3 transition-2"
              : "phone__nav-3"
          }
        ></div>
      </div>
    );

    const phoneMenu = (
     
        <div className="phoneMenu">
          

         
          <div className="phoneMenu-5"></div>
          <div className="phoneMenu-1">
            {" "}
            <Link to="/"> Home </Link>{" "}
          </div>
          <div className="phoneMenu-2"><Link to="/"> Services </Link></div>
          <div className="phoneMenu-3"><Link to="/about"> About Us </Link></div>
          <div className="phoneMenu-4"><Link to="/contact"> Contact Us </Link></div> 
        </div>
      
        
      
    );

    const { home, about, services, contact } = this.props;
    return (
      <div className="navbar">
        <div className="navbar__top">
          <div className="navbar__top-left">
            <ReactSvg className="navbar__logo-left-phone" src={phone} />
            <a href="tel:3123613598" className="navbar__top-left-number">
              312-361-3598
            </a>
            <ReactSvg src={mail} />
            <a
              href="mailto:info@nationwide-investigations.com"
              className="navbar__top-left-number"
            >
              info@nationwide-investigations.com
            </a>
          </div>
        </div>
        <div className="navbar__bottom">
          <Link to="/" className="navbar__bottom-logo">
            <img src={logo} alt="" />
          </Link>
          {phoneNav}
          {this.state.phoneClicked ? phoneMenu : null}
          <div className="navbar__bottom-nav">
            <ul>
              <li className="navbar__bottom-nav-list">
                <Link
                  className={
                    home
                      ? "navbar__bottom-nav-list-item highlight"
                      : "navbar__bottom-nav-list-item"
                  }
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="navbar__bottom-nav-list"
                onMouseEnter={this.hoverHandler}
                onMouseLeave={this.hoverLeave}
              >
                <Link
                  className={
                    services
                      ? "navbar__bottom-nav-list-item highlight "
                      : "navbar__bottom-nav-list-item"
                  }
                >
                  {" "}
                  Services{" "}
                  <ReactSvg clasname="navbar__bottom-icon" src={down} />{" "}
                  {this.state.hover ? <Dropdown /> : null}{" "}
                </Link>
              </li>
              <li className="navbar__bottom-nav-list">
                <Link
                  className={
                    about
                      ? "navbar__bottom-nav-list-item highlight"
                      : "navbar__bottom-nav-list-item"
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="navbar__bottom-nav-list">
                <Link
                  className={
                    contact
                      ? "navbar__bottom-nav-list-item highlight"
                      : "navbar__bottom-nav-list-item"
                  }
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
