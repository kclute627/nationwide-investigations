import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomepageBtn extends Component {
  render() {
    return (
      <div className="homepageBtn">
        <div className="homepageBtn__left"></div>
        <div className="homepageBtn__right">
          <div className="homepageBtn__right-box">
            <div className="homepageBtn__right-header"> commitment </div>
            <div className="homepageBtn__right-text">
              Our team of dedicated process servers is committed to getting your
              assignments served in a timely manner. We have a team or process
              servers who have years of experience and know the in’s and out’s
              of how to get your papers served. We utilize the most up to date
              technology to make it easier for you to get updates.
            </div>

            <Link to='/contact'  className="homepageBtn__right-btn">
              {" "}
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageBtn;
