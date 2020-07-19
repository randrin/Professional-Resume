import React, { Component } from "react";
import { About, Resume, Blog, Contact, Portfoglio } from "../index";
import { Header, NavBar } from "../../pages/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <div id="page" className="page">
          {/* Header Start */}
          <Header />
          {/* Header End */}
          <div id="main" className="site-main">
            <div className="pt-wrapper">
              {/* NavBar Start */}
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
      </>
    );
  }
}
