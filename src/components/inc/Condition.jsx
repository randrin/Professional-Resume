import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class Condition extends Component {
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
            </div>
          )}
        </Translation>
      </section>
    );
  }
}
