import React, { Component } from 'react'


class ContactUs extends Component {

    render(){

        return(
            <div className="contactus__container">
                <div className="contactus__header">Contact Us</div>
                <div className="contactus__contact">
                    <h1 className="contactus__contact-header">
                        Send Us a Message
                    </h1>
                    
                    <input type="text" className="contactus__contact-name" placeholder="Name"/>
                    <input type="email" className="contactus__contact-email" placeholder="Email"/>
                    <textarea name="message" className="contactus__contact-message" placeholder="Send Us A Message"></textarea>
                    <button className="btn-1">
                        <span>
                            Submit
                        </span>
                            
                      
                        
                    </button>
                    
                    
                </div>

            </div>
        )
    }
}

export default ContactUs;