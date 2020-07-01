import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className="pt-page pt-page-5" data-id="contact_me">
          <div className="section-title-block">
            <h2 className="section-title">Contact</h2>
            <h5 className="section-description">Get in Touch</h5>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-6 subpage-block">
              <div className="block-title">
                <h3>Get in Touch</h3>
              </div>
              <p>
                Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae
                tristique ante. Cras pretium rutrum egestas. Integer ultrices
                libero sed justo vehicula, eget tincidunt tortor tempus.
              </p>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="pe-7s-icon pe-7s-map-marker"></i>
                </div>
                <div className="ci-text">
                  <h5>Los Angeles, USA</h5>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="pe-7s-icon pe-7s-mail"></i>
                </div>
                <div className="ci-text">
                  <h5>
                    <a href="" className="" data-cfemail="">
                      [email&#160;protected]
                    </a>
                  </h5>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="pe-7s-icon pe-7s-call"></i>
                </div>
                <div className="ci-text">
                  <h5>+123 654 78900</h5>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="pe-7s-icon pe-7s-check"></i>
                </div>
                <div className="ci-text">
                  <h5>Freelance Available</h5>
                </div>
              </div>
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
        </section>
      </>
    );
  }
}
