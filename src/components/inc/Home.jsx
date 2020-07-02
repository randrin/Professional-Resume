import React, { Component } from "react";
import NavBar from "../../pages/site/NavBar";
import { About, Resume, Blog, Contact, Portfoglio } from "../index";
export default class Home extends Component {
  render() {
    return (
      <>
        <div id="page" className="page">
          {/* Header Start */}
          <header id="site_header" className="header banner_water_effect">
            <div className="my-photo">
              <img src="../assets/images/Randrin.png" alt="image" />
              <div className="mask"></div>
            </div>

            <div className="site-title-block">
              <a href="https://www.templateshub.net" target="_blank">
                <h1 className="site-title">Randrin Nzeukang</h1>
              </a>
              <h1 className="cd-headline clip is-full-width text-uppercase">
                <span className="color_white">I am a</span>
                <span className="cd-words-wrapper color_default">
                  <b className="is-visible">UI/UX Designer.</b>
                  <b>Developer.</b>
                  <b>Freelancer.</b>
                </span>
              </h1>
            </div>

            <a className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>
            </a>
          </header>
          {/* Header End */}
          <div id="main" className="site-main">
            <div className="pt-wrapper">
              <NavBar />
            </div>
            <div className="subpages">
              <About />
              <Resume />
              <Portfoglio />
              <Blog />
              <Contact />
            </div>
          </div>
        </div>
      </>
    );
  }
}
