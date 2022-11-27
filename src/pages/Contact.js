import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaTwitter, FaRegCircle } from "react-icons/fa";

const Contact = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const inp = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [inp]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>Send Me a Message</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="name"
            value={contact.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="email"
            value={contact.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={contact.message}
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
      <div>
        <img src={logo} alt="logo" />
        <span className="fa-stack fa-2x">
          <a href="https://twitter.com/clurrsstudio?s=07">
            <i className="fa-stack-2x">
              <FaRegCircle style={{ stroke: "2px" }} />
            </i>
            <i className="fa-stack-1x">
              <FaTwitter />
            </i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
