import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faDribbble, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './footerStyles.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-about">
          <h5>About Company</h5>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>
          <div className="social-links">
            <button className="icon-button"><i className="fab fa-facebook-f"></i></button>
            <button className="icon-button"><i className="fab fa-dribbble"></i></button>
            <button className="icon-button"><i className="fab fa-twitter"></i></button>
            <button className="icon-button"><i className="fab fa-google-plus-g"></i></button>
          </div>
        </div>
        <div className="footer-search">
          <h5>Search </h5>
          <input type="text" placeholder="Search" />
          <ul className="contact-info">
            <li><i className="fas fa-home"></i> patra, Greece</li>
            <li><i className="fas fa-envelope"></i> Alex@heroniq.com </li>
            <li><i className="fas fa-phone"></i> 6971111111</li>
          </ul>
        </div>
        <div className="footer-hours">
          <h5>Opening Hours</h5>
          <table>
            <tbody>
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Footer;