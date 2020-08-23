import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import {
  Header,
  NavBar,
  About,
  Resume,
  Blog,
  Contact,
  Portfoglio,
} from "../index";
//import { Header, NavBar, Footer } from "../../pages/index";
import MultiLanguages from "../../components/pages/inc/MultiLanguages";

export default class Home extends PureComponent {
  render() {
    return (
      <div id="page" className="page">
        {/* Header Start */}
        {/* TODO: Refactor the Header */}
        {/* <Header /> */}
        <div className="header-wrapper">
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
                {/* <span className="color_white">I am</span> */}
                <span className="cd-words-wrapper color_default">
                  <b className="is-visible">Project Manager.</b>
                  <b>Full Stack Developer.</b>
                  <b>UI/UX Designer.</b>
                </span>
              </h1>
            </div>

            <Link to="#" className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>
            </Link>
          </header>
        </div>
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
        </div>
      </div>
    );
  }
}
