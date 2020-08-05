import React, { PureComponent } from "react";

export default class Portfoglio extends PureComponent {
  render() {
    return (
      <>
        <section className="pt-page pt-page-3" data-id="portfolio">
          <div className="section-title-block">
            <h2 className="section-title">Portfolio</h2>
            <h5 className="section-description">My Best Works</h5>
          </div>

          <div className="portfolio-content">
            <ul id="portfolio_filters" className="portfolio-filters">
              <li className="active">
                <a
                  className="filter btn btn-sm btn-link active"
                  data-group="all"
                >
                  All
                </a>
              </li>
              <li>
                <a className="filter btn btn-sm btn-link" data-group="media">
                  Media
                </a>
              </li>
              <li>
                <a
                  className="filter btn btn-sm btn-link"
                  data-group="illustration"
                >
                  Illustration
                </a>
              </li>
              <li>
                <a className="filter btn btn-sm btn-link" data-group="video">
                  Video
                </a>
              </li>
            </ul>

            <div
              id="portfolio_grid"
              className="portfolio-grid portfolio-masonry masonry-grid-3"
            >
              <figure className="item" data-groups='["all", "media"]'>
                <a className="ajax-page-load" href="portfolio-1.html">
                  <img src="/assets/images/portfolio/1.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Media</small>
                    <i className="fa fa-file-text-o"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all", "video"]'>
                <a
                  href="https://player.vimeo.com/video/97102654?autoplay=1"
                  title="Praesent Dolor Ex"
                  className="lightbox mfp-iframe"
                >
                  <img src="/assets/images/portfolio/2.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Video</small>
                    <i className="fa fa-video-camera"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all","illustration"]'>
                <a
                  href="/assets/images/portfolio/3.jpg"
                  className="lightbox"
                  title="Duis Eu Eros Viverra"
                >
                  <img src="/assets/images/portfolio/3.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Illustration</small>
                    <i className="fa fa-image"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all", "media"]'>
                <a className="ajax-page-load" href="portfolio-1.html">
                  <img src="/assets/images/portfolio/4.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Media</small>
                    <i className="fa fa-file-text-o"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all", "illustration"]'>
                <a
                  href="/assets/images/portfolio/5.jpg"
                  className="lightbox"
                  title="Aliquam Condimentum Magna Rhoncus"
                >
                  <img src="/assets/images/portfolio/5.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Illustration</small>
                    <i className="fa fa-image"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all", "media"]'>
                <a className="ajax-page-load" href="portfolio-1.html">
                  <img src="/assets/images/portfolio/6.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Media</small>
                    <i className="fa fa-file-text-o"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all", "video"]'>
                <a
                  href="https://player.vimeo.com/video/97102654?autoplay=1"
                  title="Nulla Facilisi"
                  className="lightbox mfp-iframe"
                >
                  <img src="/assets/images/portfolio/7.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Video</small>
                    <i className="fa fa-video-camera"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all",  "media"]'>
                <a className="ajax-page-load" href="portfolio-1.html">
                  <img src="/assets/images/portfolio/8.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Media</small>
                    <i className="fa fa-file-text-o"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all","illustration"]'>
                <a
                  href="/assets/images/portfolio/9.jpg"
                  className="lightbox"
                  title="Mauris Neque Dolor"
                >
                  <img src="/assets/images/portfolio/9.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Illustration</small>
                    <i className="fa fa-image"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all", "video"]'>
                <a
                  href="https://player.vimeo.com/video/97102654?autoplay=1"
                  title="Donec Lectus Arcu"
                  className="lightbox mfp-iframe"
                >
                  <img src="/assets/images/portfolio/10.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Video</small>
                    <i className="fa fa-video-camera"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all","illustration"]'>
                <a
                  href="/assets/images/portfolio/11.jpg"
                  className="lightbox"
                  title="Duis Eu Eros Viverra"
                >
                  <img src="/assets/images/portfolio/11.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Illustration</small>
                    <i className="fa fa-image"></i>
                  </div>
                </a>
              </figure>

              <figure className="item" data-groups='["all","media"]'>
                <a className="ajax-page-load" href="portfolio-1.html">
                  <img src="/assets/images/portfolio/12.jpg" alt="" />
                  <div>
                    <h5 className="name">Project Name</h5>
                    <small>Media</small>
                    <i className="fa fa-file-text-o"></i>
                  </div>
                </a>
              </figure>
            </div>
          </div>
        </section>
      </>
    );
  }
}
