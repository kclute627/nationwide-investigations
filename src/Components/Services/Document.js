import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Navbar from "../Navbar";
import court from "../../assets/court.jpg";
import Footer from "../Footer";
import man from '../../assets/man.jpg';

class Document extends Component {
  render() {
    return (
      <div className="document__container">
        <Navbar services="true" />
        <div className="document-top">
          <div className="document-top-text"></div>
        </div>
        <div className="document-middle">
          <div className="document-middle-text">
            <div className="document-middle-text-1">
              <h3 className="document-middle-text-header">
                Docuemnt Retrieval
              </h3>
              <div className="document-middle-text-1">
                Our company has several court researchers and filers located
                across the state of Illinois and Nationwide. Our researchers our
                in and out of the courthouses on a daily basis. If you need
                documents copied from (or filed) at a courthouse in Illinois
                give us a call. Our experienced staff has the ability to order
                files and make copies in a timely manner. We have built
                relationships with court clerks across the state and can
                navigate the court records to get your order processed in a
                timely manner.
              </div>
            </div>
          </div>
          <div className="document-middle-2">
            <h3 className="h3">Court filing </h3>
            <div className="document-middle-2-text">
              We offer court filing services in Cook County IL and across the
              State of Illinois. We provide filing for state and federal courts.
              Our court runners can file all your legal pleadings with the
              court. We are aware of court procedures and will even provide the
              fees for our established clients. More and more jurisdictions are
              requiring E-Filing for all documents. We can assist with E-filing
              in all Federal and Illinois Courts.
            </div>
          </div>
          <div className="document-otherservices">
            <h1>Other Services Offered </h1>
            <div className="document-otherservices-1">
              <span>COURTESY COPY DELIVERY</span>– If you need documents
              delivered to judges or opposing counsel we can handle no problem
              at all. We deliver courtesy copies on a daily basis to the federal
              court in Chicago Illinois. We have no problem with large printing
              jobs. Simply email us your courtesy copies with instructions on
              how you would like them printed and we will do the rest.
            </div>
            <div className="document-otherservices-1">
              <span>CERTIFICATE OF GOOD STANDING </span>– Our researchers travel
              to the Illinois Supreme Court in Springfield, IL on a daily basis
              to obtain Certificates of good standing. If you are interested in
              ordering a Certificate of good standing please make sure you
              provide the attorneys full name and ARDC number
            </div>
            <div className="document-otherservices-1">
              <span>SECRETARY OF STATE</span>– If
              you have business documents that need to be walked in to the
              Illinois Secretary of State to be filed we can help. We travel to
              the Illinois secretary of state on a daily basis and can get all
              of your business records filed
            </div>
          </div>
          <Fade bottom duration={2000}>
            <img src={man} alt=""/>
          </Fade>
          
        </div>





        <Footer />
      </div>
    );
  }
}

export default Document;
