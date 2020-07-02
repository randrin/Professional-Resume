import React, { Component } from "react";
import { About, Resume, Blog, Contact, Portfoglio } from "../index";
import { Translation } from "react-i18next";
import MultiLanguages from "../../pages/inc/MultiLanguages";
export default class Home extends Component {
  render() {
    return (
      <>
        <div id="page" className="page">
          {/* Header Start */}
          <header id="site_header" className="header banner_water_effect">
            <div className="my-photo">
              <img src="../assets/images/Randrin.png" alt="image" />
              <div className="mask"></div>
            </div>

            <div className="site-title-block">
              <a href="https://www.templateshub.net" target="_blank">
                <h1 className="site-title">Randrin Nzeukang</h1>
              </a>
              <h1 className="cd-headline clip is-full-width text-uppercase">
                <span className="color_white">I am a</span>
                <span className="cd-words-wrapper color_default">
                  <b className="is-visible">UI/UX Designer.</b>
                  <b>Developer.</b>
                  <b>Freelancer.</b>
                </span>
              </h1>
            </div>

            <a className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>
            </a>
          </header>
          {/* Header End */}
          <div id="main" className="site-main">
            <div className="pt-wrapper">
              {/* NavBar Start */}
              <Translation>
                {(t) => (
                  <>
                    <div className="site-nav mobile-menu-hide">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-6">
                            <ul id="nav" className="site-main-menu">
                              <li>
                                <a
                                  className="pt-trigger"
                                  href="#about_me"
                                  data-animation="58"
                                  data-goto="1"
                                >
                                  {t("ABOUT.TITLE")}
                                </a>
                              </li>
                              <li>
                                <a
                                  className="pt-trigger"
                                  href="#resume"
                                  data-animation="59"
                                  data-goto="2"
                                >
                                  {t("RESUME.TITLE")}
                                </a>
                              </li>
                              <li>
                                <a
                                  className="pt-trigger"
                                  href="#portfolio"
                                  data-animation="60"
                                  data-goto="3"
                                >
                                  {t("PORTFOLIO.TITLE")}
                                </a>
                              </li>
                              <li className="resume-blog">
                                <a
                                  className="pt-trigger"
                                  href="#blog"
                                  data-animation="61"
                                  data-goto="4"
                                >
                                  {t("BLOG.TITLE")}
                                </a>
                              </li>
                              <li>
                                <a
                                  className="pt-trigger"
                                  href="#contact_me"
                                  data-animation="58"
                                  data-goto="5"
                                >
                                  {t("CONTACT.TITLE")}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 socials-links-multilanguages">
                            <ul className="social-links">
                              <li>
                                <a
                                  className="tip social-button"
                                  href="https://github.com/randrin"
                                  target="_blank"
                                  title="Github"
                                >
                                  <i className="fa fa-github"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="tip social-button"
                                  href="https://bitbucket.org/randrin/?visibility=all"
                                  target="_blank"
                                  title="Bitbucket"
                                >
                                  <i className="fa fa-bitbucket"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="tip social-button"
                                  href="https://twitter.com/NzeukangRandrin"
                                  target="_blank"
                                  title="Twitter"
                                >
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="tip social-button"
                                  href="https://www.facebook.com/decotino"
                                  target="_blank"
                                  title="Facebook"
                                >
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="tip social-button"
                                  href="#"
                                  target="_blank"
                                  title="Google Plus"
                                >
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="tip social-button"
                                  href="https://www.youtube.com/channel/UCugdTE_t5-1bGV_-kqaq0Vg"
                                  target="_blank"
                                  title="Youtube"
                                >
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="site-multilanguages">
                              <MultiLanguages />
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Translation>
              {/* NavBar End */}
            </div>
            <div className="subpages">
              <About />
              <Resume />
              <Portfoglio />
              <Blog />
              <Contact />
            </div>
          </div>
        </div>
      </>
    );
  }
}
