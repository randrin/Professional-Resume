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
                  {t("CONTACT.FORM.TITLE")}
                </h5>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-6 subpage-block">
                  <div className="block-title">
                    <h3>{t("CONTACT.FORM.TITLE")}</h3>
                  </div>
                  <p>{t("CONTACT.FORM.DESCRIPTION")}</p>

                  {this.state.contacts.map((contact) => (
                    <div key={contact.id} className="contact-info-block">
                      <div className="ci-icon">
                        <i className={`pe-7s-icon ${contact.icon}`}></i>
                      </div>
                      <div className="ci-text">
                        <h5>{contact.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-sm-6 col-md-6 subpage-block">
                  <div className="block-title">
                    <h3>Contact Form</h3>
                  </div>
                  <form id="contact-form" method="post" action="#">
                    <div className="messages"></div>

                    <div className="controls">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
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
                          placeholder="Email Address"
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
                          placeholder="Message for me"
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
                        value="Send message"
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
