import React, { Component } from "react";
import Header from "../pages/site/Header";
import NavBar from "../pages/site/NavBar";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfoglio from "./Portfoglio";
import Blog from "./Blog";

export default class Home extends Component {
  render() {
    return (
      <>
        <div id="page" className="page">
          <Header />
          <div id="main" className="site-main">
            <div className="pt-wrapper pt-wrapper-scroll">
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
