import React, { PureComponent } from "react";
import { Translation } from "react-i18next";

export default class Footer extends PureComponent {
  render() {
    return (
      <Translation>
        {(t) => (
          <footer>
            <div className="container">
              <div className="row my-resume-footer">
                <div className="col-md-6">
                  <span>
                    Copyright © 2020
                    {new Date().getFullYear() > 2020
                      ? new Date().getFullYear()
                      : ""}
                    . {t("FOOTER.REALIZED")}
                    <a
                      href="https://www.kazougroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="my-resume-copyright"
                    >
                      <b>kazouGroup Srl</b>
                    </a>
                    . {t("FOOTER.ALL_RIGHTS")}
                  </span>
                </div>
                <div className="col-md-6">
                  <ul id="nav" className="site-main-menu">
                    <li>
                      <a
                        href="#privacy"
                        className="pt-trigger"
                        data-animation="58"
                        data-goto="6"
                      >
                        <b>{t("FOOTER.PRIVACY")}</b>
                      </a>
                    </li>
                    <li>
                      <div className="bullet"></div>
                    </li>
                    <li>
                      <a
                        href="#condition"
                        className="pt-trigger"
                        data-animation="58"
                        data-goto="7"
                      >
                        <b>{t("FOOTER.CONDITION")}</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        )}
      </Translation>
    );
  }
}
