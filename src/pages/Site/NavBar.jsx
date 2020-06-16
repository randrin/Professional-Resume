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
              href="#contact_me"
              data-animation="58"
              data-goto="5"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a
              className="tip social-button"
              href="https://github.com/randrin"
              target="_blank"
              title="Github"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="tip social-button"
              href="https://bitbucket.org/randrin/?visibility=all"
              target="_blank"
              title="Bitbucket"
            >
              <i className="fa fa-bitbucket"></i>
            </a>
          </li>
          <li>
            <a
              className="tip social-button"
              href="https://twitter.com/NzeukangRandrin"
              target="_blank"
              title="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              className="tip social-button"
              href="https://www.facebook.com/decotino"
              target="_blank"
              title="Facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              className="tip social-button"
              href="#"
              target="_blank"
              title="Google Plus"
            >
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a
              className="tip social-button"
              href="https://www.youtube.com/channel/UCugdTE_t5-1bGV_-kqaq0Vg"
              target="_blank"
              title="Youtube"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
