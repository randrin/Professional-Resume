import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { ResumeConsumer } from "../../../context";
import { EN_LANGUAGE, FR_LANGUAGE, IT_LANGUAGE } from "../../../constants";

class MultiLanguages extends PureComponent {
  render() {
    return (
      <ResumeConsumer>
        {(value) => {
          const { selectLang, handleChangeLanguage } = value;
          return (
            <div className="header-dropdown">
              <span className="resume-selected-lang">
                {selectLang === FR_LANGUAGE ? (
                  <>
                    <img
                      alt="Flag French"
                      className="store-img-flag"
                      src="/assets/images/flags/fr.png"
                    />
                    <p>Français</p>
                  </>
                ) : selectLang === EN_LANGUAGE ? (
                  <>
                    <img
                      alt="Flag English"
                      className="store-img-flag"
                      src="/assets/images/flags/en.png"
                    />
                    <p>Anglais</p>
                  </>
                ) : (
                  <>
                    <img
                      alt="Flag Italian"
                      className="store-img-flag"
                      src="/assets/images/flags/it.png"
                    />
                    <p>Italien</p>
                  </>
                )}
              </span>
              <div className="header-menu">
                <ul>
                  <li>
                    <span
                      className="resume-selected-lang"
                      onClick={() =>
                        handleChangeLanguage(this.props.i18n, EN_LANGUAGE)
                      }
                    >
                      <img
                        alt="Flag English"
                        className="store-img-flag"
                        src="/assets/images/flags/en.png"
                      />{" "}
                      <p>Anglais</p>
                    </span>
                  </li>
                  <li>
                    <span
                      className="resume-selected-lang"
                      onClick={() =>
                        handleChangeLanguage(this.props.i18n, FR_LANGUAGE)
                      }
                    >
                      <img
                        alt="Flag French"
                        className="store-img-flag"
                        src="/assets/images/flags/fr.png"
                      />
                      <p>Français</p>
                    </span>
                  </li>
                  <li>
                    <span
                      className="resume-selected-lang"
                      onClick={() =>
                        handleChangeLanguage(this.props.i18n, IT_LANGUAGE)
                      }
                    >
                      <img
                        alt="Flag Italian"
                        className="store-img-flag"
                        src="/assets/images/flags/it.png"
                      />
                      <p>Italien</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          );
        }}
      </ResumeConsumer>
    );
  }
}
export default withTranslation()(MultiLanguages);
