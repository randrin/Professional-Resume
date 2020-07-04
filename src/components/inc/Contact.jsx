import React, { Component } from "react";
import { contacts } from "../../data/contacts";
import { Translation } from "react-i18next";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts,
    };
  }

  render() {
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

                  {this.state.contacts.map((contact, index) => (
                    <div key={contact.id} className="contact-info-block">
                      <div className="ci-icon">
                        <i className={`pe-7s-icon ${contact.icon}`}></i>
                      </div>
                      <div className="ci-text">
                        {this.state.contacts.length === index + 1 ? (
                          <h5>{t("CONTACT.RIGHT_FORM.AVAILABLE")}</h5>
                        ) : (
                          <h5>{contact.title}</h5>
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
                          rows="4"
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
            </>
          )}
        </Translation>
      </section>
    );
  }
}
