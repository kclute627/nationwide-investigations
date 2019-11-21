import React from "react";
import {Link} from 'react-router-dom';

const Description = () => {
  return (
    <div className="decription">
      <h1 className="decription-header">
        Chicago's Process Serving Company
      </h1>
      <div className="decription-text">
        Since 2012 Kyle W. Clutter and his team of process servers have been
        covering the Chicago, IL area. In addition to serving papers in 
        Chicago Kyle and his team cover the entire state of Illinois. Jobs
        large or small are no problem for Nationwide Investigations. If you need
        a process server on a Rush, Next-Day or Routine basis please <Link to='/contact'>Contact Us.</Link>
      </div>
    </div>
  );
};

export default Description;
