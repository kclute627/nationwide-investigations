import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from '../Components/Footer';

class Errors extends Component {
  render() {
    return (
      <div className="error__container">
        <Navbar />
        <div className="error__background">

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Errors;
