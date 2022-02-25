import React, { PureComponent } from "react";
import { Header, NavBar, Footer } from "..";

export default class Error404 extends PureComponent {
  render() {
    return (
      <div id="page" className="page-wrapper page">
        <Header />
        <div id="main" className="site-main">
          <div className="pt-wrapper">
            <NavBar />
          </div>
          <div className="subpages-wrapper subpages">
            <h1>Erro404 Page</h1>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
