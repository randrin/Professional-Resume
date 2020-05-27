import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <section className="pt-page pt-page-1" data-id="about_me">
          <div className="section-title-block">
            <h2 className="section-title">About Me</h2>
            <h5 className="section-description">
              Artist, Thinker, Creative Doer
            </h5>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 mobile-visible subpage-block">
              <div className="my-photo-small">
                <img src="/assets/images/photo_small.jpg" alt="image" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 subpage-block">
              <div className="general-info">
                <h3>I am Web Developer/Designer @ Company.com</h3>
                <p>
                  Proin laoreet elementum ligula, ac tincidunt lorem accumsan
                  nec. Fusce eget urna ante. Donec massa velit, varius a
                  accumsan ac, tempor iaculis massa. Sed placerat justo sed
                  libero varius vulputate. Ut a mi tempus massa malesuada
                  fermentum.
                </p>
                <p>
                  Sed eleifend sed nibh nec fringilla. Donec eu cursus sem,
                  vitae tristique ante. Cras pretium rutrum egestas. Integer
                  ultrices libero sed justo vehicula, eget tincidunt tortor
                  tempus. Sed tellus nibh, lobortis ut blandit sed, convallis a
                  mauris.
                </p>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 subpage-block">
              <div className="block end">
                <ul className="info-list">
                  <li>
                    <span className="title">Name</span>
                    <span className="value">Alex Smith</span>
                  </li>
                  <li>
                    <span className="title">Age</span>
                    <span className="value">29</span>
                  </li>
                  <li>
                    <span className="title">Address</span>
                    <span className="value">88 Street - State, Town</span>
                  </li>
                  <li>
                    <span className="title">e-mail</span>
                    <span className="value">
                      <a href="mailto:email@addres.com">email@addres.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="title">Phone</span>
                    <span className="value">+0123 123 456 789</span>
                  </li>
                  <li>
                    <span className="title">Freelance</span>
                    <span className="value available">Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 subpage-block">
              <div className="block-title">
                <h3>Testimonials</h3>
              </div>
              <div className="testimonials owl-carousel">
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <p>
                        "Proin auctor pulvinar tellus, et venenatis ligula
                        pharetra eu. Duis dictum nisi sed pellentesque euismod."
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
                        "Vivamus porta dapibus tristique. Suspendisse et arcu
                        eget nisi convallis eleifend nec ac lorem."
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
                      <p className="testimonial-author">Bryan Morris</p>
                      <p className="testimonial-firm">Sun Foods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block-title">
            <h3>Services</h3>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 subpage-block">
              <div className="service-block">
                <div className="service-info">
                  <img src="/assets/images/service/copywrite.png" alt="Copywriter" />
                  <h4>Copywriter</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 subpage-block">
              <div className="service-block">
                <div className="service-info">
                  <img src="/assets/images/service/ecommerce.png" alt="E-Commerce" />
                  <h4>E-Commerce</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 subpage-block">
              <div className="service-block">
                <div className="service-info">
                  <img src="/assets/images/service/management.png" alt="Management" />
                  <h4>Management</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block-title">
            <h3>Clients</h3>
          </div>

          <div className="row">
            <div className="col-sm-4 col-md-2 subpage-block">
              <div className="client_block">
                <a href="#" target="_blank">
                  <img src="/assets/images/clients/client_1.png" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-sm-4 col-md-2 subpage-block">
              <div className="client_block">
                <a href="#" target="_blank">
                  <img src="/assets/images/clients/client_2.png" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-sm-4 col-md-2 subpage-block">
              <div className="client_block">
                <a href="#" target="_blank">
                  <img src="/assets/images/clients/client_3.png" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-sm-4 col-md-2 subpage-block">
              <div className="client_block">
                <a href="#" target="_blank">
                  <img src="/assets/images/clients/client_4.png" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-sm-4 col-md-2 subpage-block">
              <div className="client_block">
                <a href="#" target="_blank">
                  <img src="/assets/images/clients/client_5.png" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-sm-4 col-md-2 subpage-block">
              <div className="client_block">
                <a href="#" target="_blank">
                  <img src="/assets/images/clients/client_6.png" alt="image" />
                </a>
              </div>
            </div>
          </div>
          <div className="block-title">
            <h3>Fun Facts</h3>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-3 subpage-block">
              <div className="fun-fact-block gray-bg">
                <i className="pe-7s-icon pe-7s-smile"></i>
                <h4>Happy Clients</h4>
                <span className="fun-value">1,024</span>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 subpage-block">
              <div className="fun-fact-block">
                <i className="pe-7s-icon pe-7s-alarm"></i>
                <h4>Working Hours</h4>
                <span className="fun-value">6,256</span>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 subpage-block">
              <div className="fun-fact-block gray-bg">
                <i className="pe-7s-icon pe-7s-medal"></i>
                <h4>Awards Won</h4>
                <span className="fun-value">21</span>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 subpage-block">
              <div className="fun-fact-block">
                <i className="pe-7s-icon pe-7s-coffee"></i>
                <h4>Coffee Consumed</h4>
                <span className="fun-value">20,000</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
