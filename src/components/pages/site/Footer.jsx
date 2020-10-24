import React, { PureComponent } from "react";
import { Translation } from "react-i18next";

export default class Footer extends PureComponent {
  render() {
    return (
      <Translation>
        {(t) => (
          <footer>
            <div className="container-fluid">
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
                    . {t("FOOTER.ALL_RIGHTS")} {t("FOOTER.VERSION")}
                    <span className="my-resume-version-number">
                      {t("FOOTER.VERSION_NUMBER")}
                    </span>
                  </span>
                </div>
                <div className="col-md-6">
                  <ul id="nav" className="site-main-menu pull-right">
                    <li className="my-resume-footer-link">
                      <a
                        href="#privacy"
                        className="pt-trigger"
                        data-animation="58"
                        data-goto="6"
                      >
                        <b>{t("FOOTER.PRIVACY")}</b>
                      </a>
                    </li>
                    <li className="my-resume-footer-link">
                      <div className="bullet"></div>
                    </li>
                    <li className="my-resume-footer-link">
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
