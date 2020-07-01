import React, { Component } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import About from "../../components/About";
import Resume from "../../components/Resume";
import Contact from "../../components/Contact";
import Portfoglio from "../../components/Portfoglio";
import Blog from "../../components/Blog";

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
