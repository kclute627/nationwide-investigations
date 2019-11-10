import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Dropdown extends Component {


    render(){

        return(
            <div className="dropdown">
                
                <div className="dropdown-4"></div>
                <Link to="/processserving"className="dropdown-1">Service Of Process</Link>
                <Link  to="/document" className="dropdown-2">Document Retrieval</Link>
                <Link  to="/investigations" className="dropdown-3">Investigations</Link>

            </div>
        )
    }
}

export default Dropdown;