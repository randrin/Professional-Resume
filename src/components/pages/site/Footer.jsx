import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
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
                      className="my-resume-copyright"
                    >
                      <b>kazouGroup Srl</b>
                    </a>
                    . {t("FOOTER.ALL_RIGHTS")}
                  </span>
                </div>
                <div className="col-md-6">
                  <Link to="/privacy">
                    <b>{t("FOOTER.PRIVACY")}</b>
                  </Link>
                  .
                  <Link to="/condition">
                    <b>{t("FOOTER.CONDITION")}</b>
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        )}
      </Translation>
    );
  }
}
