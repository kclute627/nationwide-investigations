import React, { Component } from "react";
import logo from "../assets/logo/white_logo.png";
import ReactSvg from "react-svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import link from "../assets/icons/linkedin2.svg";
import insta from "../assets/icons/instagram.svg";
import copy from "../assets/icons/copyright.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__right">
          <img src={logo} alt="" className="footer__right-logo" />
          <a
            href="https://www.facebook.com/chicago.background.investigations"
            target="blank"
            className="footer__right-link"
          >
            {" "}
            <ReactSvg src={facebook} />
          </a>
          <a
            href="https://www.facebook.com/chicago.background.investigations"
            target="blank"
            className="footer__right-link-1"
          >
            {" "}
            <ReactSvg src={twitter} />
          </a>
          <a
            href="https://www.facebook.com/chicago.background.investigations"
            target="blank"
            className="footer__right-link-2"
          >
            {" "}
            <ReactSvg src={link} />
          </a>
          <a
            href="https://www.facebook.com/chicago.background.investigations"
            target="blank"
            className="footer__right-link-3"
          >
            {" "}
            <ReactSvg src={insta} />
          </a>
        </div>
        <div className="footer__left">
          <div className="footer__left-1">
            <div className="footer__left-address">Address</div>
            <div className="footer__left-address-1">116 W. Jackson</div>
            <div className="footer__left-address-1">Suite 254</div>
            <div className="footer__left-address-1">Chicago, IL 60604</div>
            <div className="footer__left-address-1">
              <a href="tel:3123613598" className="footer__left-address-2">
                312-361-3598
              </a>
            </div>
          </div>
          <div className="footer__left-2">
              <div className="footer__left-email">
                  Email Us
              </div>
              <div className="footer__left-email-1">
              <a href="mailto:info@nationwide-investigations.com" className="">info@nationwide-investigations.com</a>
              </div>
          </div>
        </div>

        <div className="footer__bottom">
            <div className="footer__bottom-text">
                <ReactSvg src={copy}/> 
                <p className=""> 2019 Nationwide Investigations - <a className="footer__bottom-link" target="blank" href="https://quizzical-mestorf-dc1cba.netlify.com">Site Designed and Powered by Small Business Websites Inc.</a>
                 <br/> IL Lic # 117-001790 </p> 
              </div>
        </div>
      </div>
    );
  }
}

export default Footer;
