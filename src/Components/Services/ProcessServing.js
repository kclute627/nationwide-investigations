import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ReactSvg from 'react-svg';
import check from '../../assets/icons/check.svg';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Members from "../Members";

class ProcessServing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="process__container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Document Retrieval, Court FIling Chicago, Courtesy Copy Delivery, Certificate of Good Standing Illinois, Chicago IL Document Retrieval"
          />
          <meta
            name="description"
            content="ASAP Same-Day Process Server Chicago, IL We serve legal documents in Illinois headquartered in Chicago IL "
          />
          <title>
            ASAP Same-Day Process Server || Chicago, IL Process Server
          </title>
        </Helmet>
        <Navbar services="true" />
        <div className="process__middle">
          <div className="process__middle-top"></div>
          <div className="process__middle-1">
            <h3 className="process__middle-1-header"> Process Serving </h3>
            <div className="process__middle-1-text">
              Our team of Process Servers have been serving legal documents in
              Illinois for the past 10 years. We have offices and process
              servers located across the state to serve your legal papers in any
              county / city in Illinois. It is no secret that deadlines matter
              our company keeps you informed from start to finish and every
              attempt in-between. Our team will provide updates on your job from
              start to finish. If papers need to be served on a rush basis our
              team of Chicago Process Servers will have no problem handling your
              request.
            </div>
          </div>
          <div className="process__middle-2">
            <h3 className="process__middle-2-header"> Types of Service </h3>
            <div className="process__middle-2-text">
            <ul>
                <ReactSvg src={check} /> <li> <span> Routine Service</span> - First attempt made within 72 hours</li>
                <ReactSvg src={check} /> <li><span>Rush Service</span> - first attempt made within 24 hours</li>
                <ReactSvg src={check} /> <li><span> ASAP Same Day Service</span> - attempted same day - please call to make sure we can accommodate</li>
                
              </ul>
            </div>
          </div>

        </div>
        <Members />
        <Footer />
      </div>
    );
  }
}

export default ProcessServing;
