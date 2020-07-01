import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
