import React, { useState } from "react";
import logo from "../images/logo.png";

const Contact = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const inp = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [inp]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <div className="contact-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="message-container">
        <div>
          <h2>Send Me a Message</h2>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="name">
            <div className="firstName-input">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                className="firstName"
                value={contact.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="lastName-input">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="lastName"
                value={contact.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <div className="textArea-input">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="message"
              cols="30"
              rows="10"
              value={contact.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
