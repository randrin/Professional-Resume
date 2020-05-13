import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <header id="site_header" className="header">
          <div className="my-photo">
            <img src="../assets/images/Randrin.png" alt="image" />
            <div className="mask"></div>
          </div>

          <div className="site-title-block">
            <a href="https://www.templateshub.net" target="_blank">
              <h1 className="site-title">Templates Hub</h1>
            </a>
            <p className="site-description">Web Designer</p>
          </div>

          <a className="menu-toggle mobile-visible">
            <i className="fa fa-bars"></i>
          </a>
        </header>
      </>
    );
  }
}
