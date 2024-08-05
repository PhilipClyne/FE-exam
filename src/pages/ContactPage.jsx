// src/components/ContactPage.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="container contact-page mt-5">
      <h1 className="text-center">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact-info">
            <h2>Our Office</h2>
            <p>
              1234 Main St,
              <br />
              Anytown, USA
            </p>
            <h2>Phone</h2>
            <p>(123) 456-7890</p>
            <h2>Email</h2>
            <p>info@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
