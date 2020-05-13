import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="site-nav mobile-menu-hide">
        <ul id="nav" className="site-main-menu">
          <li>
            <a
              className="pt-trigger"
              href="#about_me"
              data-animation="58"
              data-goto="1"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="pt-trigger"
              href="#resume"
              data-animation="59"
              data-goto="2"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="pt-trigger"
              href="#portfolio"
              data-animation="60"
              data-goto="3"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="pt-trigger"
              href="#blog"
              data-animation="61"
              data-goto="4"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="pt-trigger"
              href="#contact"
              data-animation="58"
              data-goto="5"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a className="tip social-button" href="#" title="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Google Plus">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Youtube">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="last.fm">
              <i className="fa fa-lastfm"></i>
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Dribbble">
              <i className="fa fa-dribbble"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
