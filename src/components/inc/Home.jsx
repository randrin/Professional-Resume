import React, { PureComponent } from "react";
import {
  Header,
  NavBar,
  About,
  Resume,
  Blog,
  Contact,
  Portfoglio,
  Condition,
  Privacy
} from "../index";

export default class Home extends PureComponent {
  render() {
    return (
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
            <Condition />
            <Privacy />
          </div>
        </div>
      </div>
    );
  }
}
