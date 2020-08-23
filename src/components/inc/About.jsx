import React, { PureComponent } from "react";
import { ResumeConsumer } from "../../context";
import { Translation } from "react-i18next";
import Footer from "../../components/pages/site/Footer";


export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ResumeConsumer>
        {(value) => {
          const { clients, funs } = value;
          return (
            <section className="pt-page pt-page-1" data-id="about_me">
              <Translation>
                {(t) => (
                  <>
                    <div className="section-title-block">
                      <h2 className="section-title">{t("ABOUT.TITLE")}</h2>
                      <h5 className="section-description">
                        Project Manager, Full Stack Developer, UI/UX Designer
                      </h5>
                    </div>

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
                          <h3>{t("ABOUT.POSITION")}</h3>
                          <p className="about-description">
                            {t("ABOUT.DESCRIPTION_1")}
                          </p>
                          <p className="about-description">
                            {t("ABOUT.DESCRIPTION_2")}
                          </p>
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 subpage-block">
                        <div className="block end">
                          <ul className="info-list">
                            <li>
                              <span className="title">{t("ABOUT.NAME")}</span>
                              <span className="value">Randrin Nzeukang</span>
                            </li>
                            <li>
                              <span className="title">{t("ABOUT.YEAR")}</span>
                              <span className="value">32</span>
                            </li>
                            <li>
                              <span className="title">
                                {t("ABOUT.ADRESSE")}
                              </span>
                              <span className="value">
                                Via Santa Maria, 31/7, 27029 Vigevano
                              </span>
                            </li>
                            <li>
                              <span className="title">{t("ABOUT.EMAIL")}</span>
                              <span className="value">
                                <a href="mailto:nzeukangrandrin@gmail.com">
                                  nzeukangrandrin@gmail.com
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="title">{t("ABOUT.PHONE")}</span>
                              <span className="value">+39 32 9618 7465</span>
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

                      <div className="col-sm-6 col-md-6 subpage-block">
                        <div className="block-title">
                          <h3>{t("ABOUT.TESTIMONIALS")}</h3>
                        </div>
                        <div className="testimonials owl-carousel">
                          <div className="testimonial-item">
                            <div className="testimonial-content">
                              <div className="testimonial-text">
                                <p>
                                  "Proin auctor pulvinar tellus, et venenatis
                                  ligula pharetra eu. Duis dictum nisi sed
                                  pellentesque euismod."
                                </p>
                              </div>
                            </div>
                            <div className="testimonial-credits">
                              <div className="testimonial-picture">
                                <img
                                  src="/assets/images/testimonials/testimonial_photo_1.png"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-author-info">
                                <p className="testimonial-author">John Doe</p>
                                <p className="testimonial-firm">Apple Inc.</p>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-item">
                            <div className="testimonial-content">
                              <div className="testimonial-text">
                                <p>
                                  "Vivamus porta dapibus tristique. Suspendisse
                                  et arcu eget nisi convallis eleifend nec ac
                                  lorem."
                                </p>
                              </div>
                            </div>
                            <div className="testimonial-credits">
                              <div className="testimonial-picture">
                                <img
                                  src="/assets/images/testimonials/testimonila_photo_2.png"
                                  alt=""
                                />
                              </div>
                              <div className="testimonial-author-info">
                                <p className="testimonial-author">
                                  Bryan Morris
                                </p>
                                <p className="testimonial-firm">Sun Foods</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block-title">
                      <h3>{t("ABOUT.SERVICES")}</h3>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 col-md-3 subpage-block">
                        <div className="service-block">
                          <div className="service-info">
                            <img
                              src="/assets/images/service/web_design.png"
                              alt="Responsive Design"
                            />
                            <h4>Web Design</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3 subpage-block">
                        <div className="service-block">
                          <div className="service-info">
                            <img
                              src="/assets/images/service/copywrite.png"
                              alt="Copywriter"
                            />
                            <h4>Copywriter</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3 subpage-block">
                        <div className="service-block">
                          <div className="service-info">
                            <img
                              src="/assets/images/service/ecommerce.png"
                              alt="E-Commerce"
                            />
                            <h4>E-Commerce</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3 subpage-block">
                        <div className="service-block">
                          <div className="service-info">
                            <img
                              src="/assets/images/service/management.png"
                              alt="Management"
                            />
                            <h4>Management</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block-title">
                      <h3>{t("ABOUT.CONFIANCE")}</h3>
                    </div>

                    <div className="row">
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

                    <div className="row">
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
