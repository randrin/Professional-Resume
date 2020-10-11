import React, { Component } from "react";
import { Translation } from "react-i18next";
import Footer from "../../components/pages/site/Footer";

export default class Privacy extends Component {
  render() {
    return (
      <section className="pt-page pt-page-1" data-id="condition">
        <Translation>
          {(t) => (
            <div>
              <div className="section-title-block">
                <h2 className="section-title">{t("ABOUT.TITLE")}</h2>
                <h5 className="section-description">
                  Project Manager, Full Stack Developer, UI/UX Designer
                </h5>
              </div>
              <Footer />
            </div>
          )}
        </Translation>
      </section>
    );
  }
}
