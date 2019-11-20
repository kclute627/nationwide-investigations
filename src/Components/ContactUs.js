import React, { Component } from "react";


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    message: ""
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
      message: ""
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="contactus__container">
        <div className="contactus__header">Contact Us</div>
        <form
          
          className="contactus__contact"
          
          onSubmit={this.submitHandler}
        >
          <h1 className="contactus__contact-header">Send Us a Message</h1>

          <input
            type="text"
            className="contactus__contact-name"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="email"
            className="contactus__contact-email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <textarea
            name="message"
            className="contactus__contact-message"
            placeholder="Send Us A Message"
            value={this.state.message}
            onChange={this.changeHandler}
          ></textarea>
          <button type='submit' className="btn-1">
            <span className="span__btn">Submit</span>
          </button>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </div>
    );
  }
}

export default ContactUs;
