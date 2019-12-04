import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from '../assets/logo/logo.png';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Services from "./Services";
import Members from "./Members";
import Decription from "./Decription";

import HomepageBtn from "./HomepageBtn";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Process Server, Chicago process Server, process serving, Illinois Process Server, Same-day Process Service"
          />
             <meta name="image" content={logo}/>
          <meta name='description' content='We offer Same-Day Process Service in Chicago, IL.'/>
          <title>Chicago Illinois Process Server - ASAP Rush Serve</title>
         
        </Helmet>
        <Navbar home="true" />
        <Homepage />
        <Decription />
        <HomepageBtn />
        <Services />

        <Members />
        <Footer />
      </div>
    );
  }
}

export default App;
