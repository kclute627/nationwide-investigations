import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <div className="about">
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
            </div>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
