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
                        <div className="col-md-12 text-center my-resume-error-404">
                          <img
                            src="/assets/images/404-not-found.png"
                            alt="404 Error"
                          />
                          <h3>{t("ERROR_404.DESCRIPTION")}</h3>
                          <a
                            className="button pt-trigger my-resume-margin-cta my-resume-back"
                            href="#resume"
                            data-animation="58"
                            data-goto="5"
                          >
                            <i className="fa fa-chevron-left"></i>{" "}
                            {t("ERROR_404.BUTTON")}
                          </a>
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
