import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import naaps from "../assets/naaps.png";
import ilaaps from "../assets/ilaaps.png";

class Members extends Component {
  render() {
    return (
      <div className="members__container">
        <div className="members__header">Affiliations</div>

        <div className="members__img">
          <Fade left delay={500}>
            <a href="https://napps.org/" className="b">
              <img
                src={naaps}
                alt="National Association of Private Process servers"
                className="members__img-1 a"
              />
            </a>
          </Fade>

          <Fade left delay={500}>
            <a href="http://ilapps.com/">
              <img src={ilaaps} alt="" className="members__img-2" />
            </a>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Members;
