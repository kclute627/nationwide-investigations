import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import people from "../../assets/people.png";
import ReactSvg from "react-svg";
import check from "../../assets/icons/check.svg";
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
                <ReactSvg src={check} />{" "}
                <li>
                  {" "}
                  <span> Routine Service</span> - First attempt made within 72
                  hours
                </li>
                <ReactSvg src={check} />{" "}
                <li>
                  <span>Rush Service</span> - first attempt made within 24 hours
                </li>
                <ReactSvg src={check} />{" "}
                <li>
                  <span> ASAP Same Day Service</span> - attempted same day -
                  please call to make sure we can accommodate
                </li>
              </ul>
            </div>
          </div>
          <div className="process__middle-3">
            <h3 className="process__middle-3-header"> Other Services </h3>
            <div className="process__middle-3-text">
              <div className="process__middle-3-text-1">
                <span> Skip Trace </span> - If you have a witness or defendant
                you cannot locate, we have trained skip-tracers who will be able
                to track down the individual. We use the latest technology as
                well as good old fashion investigation to locate the target.
              </div>
              <div className="process__middle-3-text-1">
                <span> Court Filing / E-filing </span> - If your company has
                documents that need to be filed at a local courthouse give us a
                call. We have intimate knowledge of all the courthouses in
                Illinois and will be able to get your pleadings filed.
              </div>
              <div className="process__middle-3-text-1">
                <span> Nationwide Process Serving </span> - We work with many
                process servers from California to New York and no matter where
                your papers need to be served we can get them done. If you have
                documents that need to be served outside of Illinois give us a
                call. We can assign to our many process servers across the
                country to ensure your papers are served.
              </div>
            </div>
          </div>
          <div className="process__middle-4">
            <h3 className="process__middle-4-header"> Price </h3>
            <div className="process__middle-4-text">
              Call for a detailed cost on your paper, but generally speaking
              papers in the Chicago area start at $59.00 and go up. We have
              agents across the state of Illinois and can handle service of
              process across the state of Illinois. If you have a paper outside
              of the Chicago Metro area please call us for a detailed price
              quote.
            </div>
          </div>
          <div className="process__middle-img">
            <Fade bottom delay={700}>
              <img src={people} alt="Chicago Process Servers" />
            </Fade>
          </div>
        </div>
        <Members />
        <Footer />
      </div>
    );
  }
}

export default ProcessServing;
