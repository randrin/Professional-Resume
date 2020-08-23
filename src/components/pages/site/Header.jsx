import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Header extends PureComponent {
  render() {
    return (
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
    );
  }
}
