import React, { Component } from "react";
import { Link } from "react-router-dom";
import { About, Resume, Blog, Contact, Portfoglio } from "../index";
import { Header, NavBar, Footer } from "../../pages/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <div id="page" className="page">
          {/* Header Start */}
          {/* TODO: Refactor the Header */}
          <header id="site_header" className="header banner_water_effect">
            <div className="my-photo">
              <img src="../assets/images/Randrin.png" alt="Profil Randrin" />
              <div className="mask"></div>
            </div>

            <div className="site-title-block">
              <Link to="/">
                <h1 className="site-title">Randrin Nzeukang</h1>
              </Link>
              <h1 className="cd-headline clip is-full-width text-uppercase">
                <span className="color_white">I am a</span>
                <span className="cd-words-wrapper color_default">
                  <b className="is-visible">UI/UX Designer.</b>
                  <b>Developer.</b>
                  <b>Freelancer.</b>
                </span>
              </h1>
            </div>

            <Link to="#" className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>
            </Link>
          </header>
          {/* Header End */}
          <div id="main" className="site-main">
            <div className="pt-wrapper">
              {/* NavBar Start */}
              {/* TODO: Refactor the NavBar */}
              <NavBar />
              {/* NavBar End */}
            </div>
            <div className="subpages">
              <About />
              <Resume />
              <Portfoglio />
              <Blog />
              <Contact />
            </div>
            {/* Footer Start */}
            {/* TODO: Refactor the Footer */}
            {/* <Footer /> */}
            {/* Footer End */}
          </div>
        </div>
      </>
    );
  }
}
