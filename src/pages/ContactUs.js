import React from 'react';
import './ContactUs.css';
import { FaMapMarker, FaPhone, FaPaperPlane, FaGlobe } from 'react-icons/fa'; // Make sure to install react-icons if not already

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h3>Contact information</h3>
        <p>We're open for any suggestion or just to have a chat</p>
        <div className="contact-info">
          <p><FaMapMarker /> 198 West 21th Street, Suite 721 New York NY 10016</p>
          <p><FaPhone /> <a href="tel://1235235598">+ 1235 2355 98</a></p>
          <p><FaPaperPlane /> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
          <p><FaGlobe /> <a href="http://yoursite.com">yoursite.com</a></p>
        </div>
      </div>
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="first-name-container">
              <label htmlFor="input-firstname">First name:</label>
              <input type="text" id="input-firstname" placeholder="Your first name" name="firstName" required />
            </div>
            <div className="last-name-container">
              <label htmlFor="input-lastname">Last name:</label>
              <input type="text" id="input-lastname" placeholder="Your last name" name="lastName" required />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="input-email">Your email:</label>
            <input type="email" id="input-email" placeholder="Your email address" name="email" />
          </div>
          <div className="textarea-wrapper">
            <label htmlFor="input-project">Tell us more about your project goals:</label>
            <textarea id="input-project" placeholder="e.g., We'd like to rebrand & improve our marketing website and platform." name="projectDetails"></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;