import React, { Component } from "react";
import Header from "../pages/Site/Header";
import NavBar from "../pages/Site/NavBar";
import About from "./About";

export default class Home extends Component {
  render() {
    return (
      <>
        <div id="page" className="page">
          <Header />
          <div id="main" className="site-main">
            <div className="pt-wrapper">
              <NavBar />
              <div className="subpages">
                <About />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
