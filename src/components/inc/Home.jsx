import React, { Component } from "react";
import Header from "../../pages/site/Header";
import NavBar from "../../pages/site/NavBar";
import { About, Resume, Blog, Contact, Portfoglio } from "../index";
export default class Home extends Component {
  render() {
    return (
      <>
        <div id="page" className="page">
          <Header />
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
