import React, { PureComponent } from "react";
import { ResumeConsumer } from "../../context";
import { Translation } from "react-i18next";
import Footer from "../../components/pages/site/Footer";
import ShowMoreText from "react-show-more-text";
import Modal from "react-modal";
export default class Resume extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  openModal() {
    this.setState({
      isOpenModal: true,
    });
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({
      isOpenModal: false,
    });
  }

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "62%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    return (
      <ResumeConsumer>
        {(value) => {
          const { educations, experiences } = value;
          return (
            <section className="pt-page pt-page-2" data-id="resume">
              <Translation>
                {(t) => (
                  <>
                    <div className="section-title-block">
                      <h2 className="section-title">{t("RESUME.TITLE")}</h2>
                      <h5 className="section-description">
                        {t("RESUME.YEAR_WORK")}
                      </h5>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 col-md-4 subpage-block">
                        <div className="block-title">
                          <h3>{t("RESUME.EDUCATION.TITLE")}</h3>
                        </div>
                        <div className="timeline">
                          {educations.map((education) => (
                            <div
                              key={education.id}
                              className="timeline-event te-primary"
                            >
                              <h5 className="event-date">{education.year}</h5>
                              <h4 className="event-name">
                                {education.specialization}
                              </h4>
                              <p>{education.university}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-4 subpage-block">
                        <div className="block-title">
                          <h3>{t("RESUME.EXPERTISE.TITLE")}</h3>
                        </div>
                        <div className="timeline">
                          {experiences.map((experience) => (
                            <div className="timeline-event te-primary">
                              <h5 className="event-date">
                                <span>{experience.jobStart}</span> -{" "}
                                <span>{experience.jobEnd}</span>
                              </h5>
                              <h4 className="event-name">
                                {experience.jobTitle}
                              </h4>
                              <span className="event-description">
                                {experience.society}
                              </span>
                              <ShowMoreText
                                lines={5}
                                more={t("ABOUT.SHOW_MORE")}
                                less={t("ABOUT.SHOW_LESS")}
                                anchorClass="text-justify"
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={0}
                              >
                                <p className="text-justify">
                                  {experience.jobDescription}
                                </p>
                              </ShowMoreText>
                              <button className="my-3" onClick={this.openModal}>
                                <i className="fa fa-chevron-right"></i>{" "}
                                {t("MODAL.OPEN_MODAL")}
                              </button>
                              <Modal
                                isOpen={this.state.isOpenModal}
                                onAfterOpen={this.afterOpenModal}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                              >
                                <button onClick={this.closeModal}>close</button>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div>{experience.societyDescription}</div>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-4 subpage-block">
                        <div className="block-title">
                          <h3>Design Skills</h3>
                        </div>
                        <div className="skills-info">
                          <h4>Web Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-1"></div>
                          </div>

                          <h4>Graphic Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-2"></div>
                          </div>

                          <h4>Print Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-3"></div>
                          </div>
                        </div>

                        <div className="block-title">
                          <h3>Coding Skills</h3>
                        </div>
                        <div className="skills-info">
                          <h4>HML5</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-4"></div>
                          </div>

                          <h4>CSS3</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-5"></div>
                          </div>

                          <h4>jQuery</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-6"></div>
                          </div>

                          <h4>Wordpress</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-7"></div>
                          </div>

                          <h4>PHP</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-8"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <div className="download-cv-block">
                          <a
                            className="button pt-trigger"
                            href="#contact_me"
                            data-animation="58"
                            data-goto="5"
                          >
                            Download CV
                          </a>
                        </div>
                      </div>
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
