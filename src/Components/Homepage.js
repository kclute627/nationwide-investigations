import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class Homepage extends Component {


    render(){

        return (
            <div className="homepage__container">
                 <div className="homepage__container-header">
                  <h1>Trusted Process Servers </h1>
                  <h4>Serving all of Illinois and Headquarted in Chicago, IL </h4>
                  <Link to='/contact' className="btn-left"> <span className="span__btn-1">Get A Free Quote</span></Link>             
                  
                </div>
                
                

            </div>
        )
    }
}

export default Homepage;