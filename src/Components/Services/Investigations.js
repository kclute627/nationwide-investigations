import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ReactSvg from "react-svg";
import Fade from "react-reveal/Fade";
import check from "../../assets/icons/check.svg";
import investigations from '../../assets/investigation.jpg';

class Investigations extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }


  render() {
    return (
      <div className="investigations__container">
        <Navbar services="true" />
        <div className="investigations__middle">
          <div className="investigations__middle-top"></div>
          <div className="investigations__middle-box-1">
            <div className="investigations__middle-box-1-header">
              Private Investigations
            </div>
            <div className="investigations__middle-box-1-text">
              Our team of dedicated investigators come from a diverse background
              and experiences to provide your case the best chance of success.
              We also have the technology to provide you and your client updates
              at every stage of your case. We have handled hundreds of cases in
              the Criminal and Civil arenas. If you are in need of a Private
              Investigator give us a call or email today
              info@nationwide-investigations.com.
            </div>
          </div>
          <div className="investigations__middle-box-2">
            <div className="investigations__middle-box-2-header">
              Criminal Investigations
            </div>
            <div className="investigations__middle-box-2-text">
              Over the years our investigators have worked hundreds of criminal
              defense cases. We offer an extra set of eyes for your case. Our
              team of private investigators have worked on criminal cases in
              state court as well as Federal cases. During the course of an
              investigation our investigators will:
              <ul>
                <ReactSvg src={check} /> <li> Conduct Witness Interviews</li>
                <ReactSvg src={check} /> <li>Locate Witnesses</li>
                <ReactSvg src={check} /> <li>Serve Subpoenas</li>
                <ReactSvg src={check} /> <li>Conduct Background Checks</li>
                <ReactSvg src={check} /> <li>Crime Scene Photography</li>
              </ul>
            </div>
          </div>
          <div className="investigations__middle-box-3">
           
            <div className="investigations__middle-box-3-header">
              Civil Investigations
            </div>
            <div className="investigations__middle-box-3-text">
              Our dedicated and trained private investigators have handled
              hundreds of Civil Investigations in and around the Chicago, IL
              area. We primarily work with attorneys and law firms, but contact
              us today for a free quote. A sample of the civil investigations we
              preform are listed below.
              <ul>
              <ReactSvg src={check}/> <li>Locating and Interviewing Witnesses</li>
              <ReactSvg src={check} /> <li>Service of Process </li>
              <ReactSvg src={check} />  <li>Serving Subpoenas </li>
              <ReactSvg src={check} />  <li>locating Assets </li>
              <ReactSvg src={check} /> <li> Obtaining Court Records </li>
              </ul>
            </div>
            <div className="investigations__middle-box-3-header">
              Background Reports
            </div>
            <div className="investigations__middle-box-3-text">
              We offer a wide array of background services. Many of the top
              companies and law firms in the country have trusted us with their
              pre-employment background screening services. We have dedicated an
              entirely new company  <a href="http://www.nwbs-inc.com" target='blank'>Nationwide Background Screening INC</a> to
              service our pre-employment background screening clients please <a href="http://www.nwbs-inc.com" target='blank'>click here</a> for our background screening services.
             
            </div>
            <div className="investigations__middle-box-3-header">Cost</div>
            <div className="investigations__middle-box-3-text">
              Call for a detailed cost on your investigation, but generally
              speaking investigations start at $145.00 an hour. If you have a
              case that requires an investigator please call us for a free case
              evaluation. A private investigator will be able to set up a budget
              for your case and also give you an investigative timeline. We
              strive to keep you up to date on the progress of your case.
            </div>
          </div>
          <div className="investigations__middle-image">
              <Fade bottom>
                  <img src={investigations} alt=""/>
              </Fade>
              
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Investigations;
