import React from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const router = useRouter()
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 footer-list">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <a href="mailto:malik78479@gmail.com">malik78479@gmail.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />{' '}
                <a href="tel:+923434551589">(+92) 3434551589</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 footer-list">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://twitter.com/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
