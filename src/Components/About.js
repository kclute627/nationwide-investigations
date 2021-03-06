import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Fade from "react-reveal/Fade";
import Navbar from "./Navbar";
import Footer from "./Footer";
import meeting from "../assets/meeting-7.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Document Retrieval, Court FIling Chicago, Courtesy Copy Delivery, Certificate of Good Standing Illinois, Chicago IL Document Retrieval"
          />
          <meta name='description' content='About Us Nationwide Investigations Inc Chicago IL Process Server'/>
          <title>About US || Nationwide Investigations Inc || Chicago Process Server</title>
         
        </Helmet>
        <Navbar about />
        <div className="about__container">
          <div className="about__container-top">
            <div className="about__container-top-text">About Us</div>
          </div>
          <div className="about__container-middle">
            <div className="about__container-middle-text">
              <div className="about__container-middle-text-1">
                We are a fully licensed and insured private investigation
                company headquartered in Chicago, IL. We offer a wide variety of
                services including process serving, private investigations, and
                court document retrieval. We opened in 2012 and since then have
                grown into one of Chicago’s most premier private investigation
                firms.
              </div>

              <div className="about__container-middle-text-2">
                Our process servers have served thousands of court documents
                since we have opened. We not only serve process in Chicago, IL,
                but cover the entire state of Illinois. We have process servers
                located across Illinois. If you need a criminal investigator,
                documents copied from a courthouse or legal documents served
                contact us.{" "}
              </div>

            </div>
            <div className="about__container-middle-right">
              <Fade left>
                <img src={meeting} alt=""/>
              </Fade>
              

            </div>
            <Link to='/contact' className=" about__btn">Get A Free Quote</Link>   
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
