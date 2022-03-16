import React, { PureComponent } from "react";
import { Header, NavBar, Footer } from "..";
import { Translation } from "react-i18next";

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
            <section className="pt-page pt-page-current">
              <Translation>
                {(t) => (
                  <>
                    <div className="section-title-block">
                      <h2 className="section-title">{t("ERROR_404.TITLE")}</h2>
                      <h5 className="section-description">
                        {t("ERROR_404.SUB_TITLE")}
                      </h5>
                    </div>
                    <div className="container subpages-wrapper subpages">
                      <div className="row">
                        <div className="col-md-12">
                          <h1>Erro404 Page</h1>
                        </div>
                      </div>
                      <Footer />
                    </div>
                  </>
                )}
              </Translation>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
