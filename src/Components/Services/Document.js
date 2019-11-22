import React, { Component } from "react";
import Navbar from "../Navbar";
import court from "../../assets/court.jpg";
import Footer from "../Footer";

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
              
          </div>
          


          
        </div>
        <Footer />
      </div>
    );
  }
}

export default Document;
