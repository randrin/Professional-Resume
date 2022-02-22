import React, { PureComponent } from "react";
import { contacts } from "../../data/contacts";
import { Translation } from "react-i18next";
import Footer from "../../components/pages/site/Footer";
export default class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts,
    };
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    const { contacts } = this.state;
    return (
      <section className="pt-page pt-page-5" data-id="contact_me">
        <Translation>
          {(t) => (
            <>
              <div className="section-title-block">
                <h2 className="section-title">{t("CONTACT.TITLE")}</h2>
                <h5 className="section-description">
                  {t("CONTACT.RIGHT_FORM.TITLE")}
                </h5>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-6 subpage-block">
                  <div className="block-title">
                    <h3>{t("CONTACT.RIGHT_FORM.TITLE")}</h3>
                  </div>
                  <p>{t("CONTACT.RIGHT_FORM.DESCRIPTION")}</p>

                  {contacts.map((contact, index) => (
                    <div key={contact.id} className="contact-info-block">
                      <div className="ci-icon">
                        <i
                          className={`pe-7s-icon my-resume-contact-icons ${contact.icon}`}
                        ></i>
                      </div>
                      <div className="ci-text">
                        {contacts.length === index + 1 ? (
                          <h5>{t("CONTACT.RIGHT_FORM.AVAILABLE")}</h5>
                        ) : (
                          <>
                            {contact.titles.map((title, index) => (
                              <h5 key={index}>{title}</h5>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-sm-6 col-md-6 subpage-block">
                  <div className="block-title">
                    <h3>{t("CONTACT.LEFT_FORM.TITLE")}</h3>
                  </div>
                  <form
                    id="contact-form"
                    method="POST"
                    action="https://formspree.io/nzeukangrandrin@gmail.com"
                  >
                    <div className="messages"></div>

                    <div className="controls">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder={t("CONTACT.LEFT_FORM.FULLNAME")}
                          required="required"
                          data-error="Name is required."
                        />
                        <div className="form-control-border"></div>
                        <i className="form-control-icon fa fa-user"></i>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder={t("CONTACT.LEFT_FORM.EMAIL")}
                          required="required"
                          data-error="Valid email is required."
                        />
                        <div className="form-control-border"></div>
                        <i className="form-control-icon fa fa-envelope"></i>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder={t("CONTACT.LEFT_FORM.MESSAGE")}
                          rows="8"
                          required="required"
                          data-error="Please, leave me a message."
                        ></textarea>
                        <div className="form-control-border"></div>
                        <i className="form-control-icon fa fa-comment"></i>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div
                        className="g-recaptcha"
                        data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                        data-callback="correctCaptcha"
                      ></div>

                      <input
                        type="submit"
                        className="button btn-send"
                        value={t("CONTACT.LEFT_FORM.BUTTON")}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <hr className="my-resume-border-top-orange-sunglow my-resume-margin-40" />
              <div className="row my-resume-contact-map">
                <div className="col-md-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.763151565006!2d1.3254863153650234!3d43.61147287912269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb0354cc817e7%3A0x576ec62d09e2401a!2s11%20All.%20du%20Val%20d&#39;Aran%2C%2031770%20Colomiers!5e0!3m2!1sfr!2sfr!4v1645565143244!5m2!1sfr!2sfr"
                    frameBorder="0"
                    allowFullScreen=""
                    title="My Location Tracker"
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
                <div className="col-md-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.052049805842!2d8.853803615424575!3d45.30737417909942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786e3332d540729%3A0x2120a2de5bc4aa54!2sVia%20Santa%20Maria%2C%2031%2C%2027029%20Vigevano%20PV%2C%20Italie!5e0!3m2!1sfr!2sfr!4v1645565281650!5m2!1sfr!2sfr"
                    frameBorder="0"
                    allowFullScreen=""
                    title="My Location Tracker"
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
              <Footer />
            </>
          )}
        </Translation>
      </section>
    );
  }
}
