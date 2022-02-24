import React, { PureComponent } from "react";
import { ResumeConsumer } from "../../context/ResumeContext";
import { Translation } from "react-i18next";
import { Testimonials, Footer } from "../index";
import ShowMoreText from "react-show-more-text";
import { myResume } from "../../data/myResume";
import { EN_LANGUAGE, FR_LANGUAGE } from "../../constants";

export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false,
    };
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  render() {
    return (
      <ResumeConsumer>
        {(value) => {
          const { clients, funs, services } = value;
          return (
            <section className="pt-page pt-page-1" data-id="about_me">
              <Translation>
                {(t) => (
                  <div className="section-title-block">
                    <h2 className="section-title">{t("ABOUT.TITLE")}</h2>
                    <h5 className="section-description">
                      {myResume.profession}
                    </h5>
                  </div>
                )}
              </Translation>
              <Translation>
                {(t) => (
                  <>
                    <div className="row">
                      <div className="col-sm-12 col-md-12 mobile-visible subpage-block">
                        <div className="my-photo-small">
                          <img
                            src="../assets/images/Randrin.png"
                            alt="Profil Randrin"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 subpage-block">
                        <div className="general-info">
                          <div className="my-resume-about-title">
                            <h3>{t("ABOUT.POSITION")}</h3>
                            <span className="my-resume-about-subtitle my-resume-tooltip">
                              <i className="fa fa-info-circle"></i>
                              <span className="my-resume-tooltiptext">
                                {t("ABOUT.DESCRIPTION_SOCIETY")}
                              </span>
                            </span>
                          </div>
                          <p className="about-description">
                            {t("ABOUT.DESCRIPTION_1")}
                          </p>
                          <p className="about-description">
                            {t("ABOUT.DESCRIPTION_2")}
                          </p>
                        </div>
                      </div>

                      <div className="col-sm-5 col-md-5 subpage-block">
                        <div className="block end">
                          <ul className="info-list">
                            <li>
                              <span className="title">{t("ABOUT.NAME")}</span>
                              <span className="value">{myResume.fullName}</span>
                            </li>
                            <li>
                              <span className="title">{t("ABOUT.YEAR")}</span>
                              <span className="value">{myResume.yearOld}</span>
                            </li>
                            <li>
                              <span className="title">
                                {t("ABOUT.ADRESSE")}
                              </span>
                              <span className="value">
                                {myResume.residence}
                              </span>
                            </li>
                            <li>
                              <span className="title">{t("ABOUT.EMAIL")}</span>
                              <span className="value">
                                <a href="mailto:nzeukangrandrin@gmail.com">
                                  {myResume.email}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="title">{t("ABOUT.PHONE")}</span>
                              <span className="value">
                                {myResume.phonesNumber}
                              </span>
                            </li>
                            <li>
                              <span className="title">
                                {t("ABOUT.DISPONIBILITY_REQUEST")}
                              </span>
                              <span className="value available">
                                {t("ABOUT.DISPONIBILITY_RESPONSE")}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Translation>

              <Translation>
                {(t) => (
                  <>
                    <div className="block-title">
                      <h3>
                        {localStorage.getItem("i18nextLng") === EN_LANGUAGE ? (
                          <span>{t("TESTIMONIAL.TITLE")}</span>
                        ) : localStorage.getItem("i18nextLng") === FR_LANGUAGE ? (
                          <span>{t("TESTIMONIAL.TITLE")}</span>
                        ) : (
                          <span>{t("TESTIMONIAL.TITLE")}</span>
                        )}
                      </h3>
                    </div>
                  </>
                )}
              </Translation>
              <Testimonials />

              <Translation>
                {(t) => (
                  <>
                    <div className="block-title">
                      <h3>{t("ABOUT.SERVICES")}</h3>
                    </div>

                    <div className="row my-resume-margin-items">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="col-sm-6 col-md-3 subpage-block"
                        >
                          <div className="service-block">
                            <div className="service-info">
                              <img src={service.image} alt={service.title} />
                              <h4>{service.title}</h4>
                              <ShowMoreText
                                lines={4}
                                more={t("ABOUT.SHOW_MORE")}
                                less={t("ABOUT.SHOW_LESS")}
                                anchorClass=""
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={0}
                              >
                                {service.description}
                              </ShowMoreText>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="block-title">
                      <h3>{t("ABOUT.CONFIANCE")}</h3>
                    </div>

                    <div className="row my-resume-margin-items">
                      {clients.map((client) => (
                        <div
                          key={client.id}
                          className="col-sm-4 col-md-2 subpage-block"
                        >
                          <div className="client_block">
                            <a
                              href={client.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img src={client.url} alt={client.name} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="block-title">
                      <h3>{t("ABOUT.FUN")}</h3>
                    </div>

                    <div className="row my-resume-margin-items">
                      {funs.map((fun) => (
                        <div
                          key={fun.id}
                          className="col-sm-6 col-md-3 subpage-block"
                        >
                          <div className={`fun-fact-block ${fun.color}`}>
                            <i className={`pe-7s-icon ${fun.icon}`}></i>
                            <h4>{fun.name}</h4>
                            <span className="fun-value">{fun.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Footer />
                  </>
                )}
              </Translation>
            </section>
          );
        }}
      </ResumeConsumer>
    );
  }
}
