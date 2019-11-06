import React, { Component } from "react";
import ServicesBox from "./ServiceBox";
import auction from "../assets/icons/auction.svg";
import library from "../assets/icons/library.svg";
import mag from "../assets/icons/magnifier.svg";
import scale from "../assets/icons/balance-scale.svg";

class Services extends Component {
  render() {
    return (
      <div className="services__container">
        <div className="services__header"> Services </div>
        <div className="services__box">
          <ServicesBox
            icon={scale}
            header="Process Serving"
            text="We have a dedicated team of process servers to handle 
            jobs large and small. Our team of process servers are based in Chicago, IL, 
            but we have process servers across the entire state of Illinois. If you have legal 
            papers that need to be served give us a call today."
          />
          <ServicesBox
            icon={mag}
            header="Investigations"
            text="Our team of experienced investigators have 
            handled hundreds of cases and specialize in Criminal Defense Investigations. 
            We also conduct Employment Background Checks as well as Civil Investigations. 
            Give us a call to day to see if we can assist you with your case."
          />
          <ServicesBox header="Document Retrivial" icon={library} text="We travel to courthouses across Illinois, including Cook County, on a daily basis. If you need a copy of a case from an Illinois courthouse give us a call today. Our experienced researchers will pull the file, make the appropriate copies and scan and email the documents to you." />
        </div>
      </div>
    );
  }
}

export default Services;
