import React, { Component } from "react";
import Iframe from 'react-iframe';


const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactUs extends Component {
  state = {
    name: "",
    last: "",
    email: "",
    message: "",
    phone: '',
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    this.setState({
      name: "",
      email: "",
      message: "",
      last: '',
      phone: '',
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="contactus__container">
        <div className="contactus__header">Contact</div>
        <form className="contactus__contact" onSubmit={this.submitHandler}>
          <div className="contactus__contact-1">
            <input
              type="text"
              className="contactus__contact-name"
              placeholder="First Name"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
            <input
              type="text"
              className="contactus__contact-name-2"
              placeholder="Last Name"
              name="last"
              value={this.state.last}
              onChange={this.changeHandler}
            />
          </div>
          <div className="contactus__contact-2">
            <input
              type="email"
              className="contactus__contact-email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
            <input
              type="tel"
              className="contactus__contact-phone"
              placeholder="Phone Number"
              name="phone"
              value={this.state.phone}
              onChange={this.changeHandler}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>

          <textarea
            name="message"
            className="contactus__contact-message"
            placeholder="Send Us A Message"
            value={this.state.message}
            onChange={this.changeHandler}
          ></textarea>
          <button type="submit" className="btn-1">
            <span className="span__btn">Submit</span>
          </button>
          <input type="hidden" name="form-name" value="contact" />
        </form>

        <div className="contactus__left">
          <Iframe url="https://maps.google.com/maps?q=116%20w%20jackson&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
         
        </div>
      </div>
    );
  }
}

export default ContactUs;
