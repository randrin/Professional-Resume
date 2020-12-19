import React, { PureComponent } from "react";
import { ResumeConsumer } from "../../context";
import { Translation } from "react-i18next";
import Footer from "../../components/pages/site/Footer";
import ShowMoreText from "react-show-more-text";
import ReactModal from "react-modal";
import { experiences } from "../../data/experiences";

ReactModal.setAppElement("#my_resume");
export default class Resume extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectLang: localStorage.getItem("i18nextLng"),
      isOpenModal: false,
      clientWorks: [],
      experiences: experiences,
      experienceModal: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  openModal(id) {
    this.checkExperiences();
    this.setState({
      experienceModal: this.state.clientWorks.filter(
        (experience) => experience.id === id
      ),
      isOpenModal: true,
    });
  }

  afterOpenModal() {
    console.log("afterOpenModal");
    this.checkExperiences();
  }

  closeModal() {
    this.setState({
      isOpenModal: false,
    });
    this.checkExperiences();
  }

  checkExperiences() {
    this.setState({
      clientWorks:
      localStorage.getItem("i18nextLng") === "en"
          ? this.state.experiences.EN
          : localStorage.getItem("i18nextLng") === "fr"
          ? this.state.experiences.FR
          : this.state.experiences.IT,
    });
  }

  componentDidMount() {
    this.checkExperiences();
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
    const { isOpenModal, experienceModal } = this.state;
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
                            <div
                              key={experience.id}
                              className="timeline-event te-primary"
                            >
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
                                lines={3}
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
                              <div className="my-resume-open-modal">
                                <button
                                  onClick={() => this.openModal(experience.id)}
                                >
                                  <i className="fa fa-chevron-right"></i>{" "}
                                  {t("MODAL.OPEN_MODAL")}
                                </button>
                              </div>
                              <div id={experience.id}>
                                <ReactModal
                                  isOpen={isOpenModal}
                                  onAfterOpen={this.afterOpenModal}
                                  onRequestClose={this.closeModal}
                                  style={customStyles}
                                  contentLabel="Example Modal"
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <img
                                          className="my-resume-logo-modal"
                                          src="/assets/images/logo-name.png"
                                          alt="Randrin Logo"
                                        />
                                      </div>
                                      <div className="col-md-6 text-center">
                                        {experienceModal[0] && (
                                          <h2 className="my-resume-color-orange">
                                            {experienceModal[0].jobTitle} <span className="my-resume-color-black">{t("MODAL.IN_MODAL")} {experienceModal[0].society}</span>
                                          </h2>
                                        )}
                                      </div>
                                      <div className="col-md-3">
                                        <div className="my-resume-close-modal">
                                          <button onClick={this.closeModal}>
                                            <i className="fa fa-remove"></i>{" "}
                                            {t("MODAL.CLOSE_MODAL")}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                  {experienceModal[0] && (
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="text-justify">
                                            {
                                              experienceModal[0]
                                                .societyDescription
                                            }
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="my-resume-modal-description">
                                            {t("MODAL.DESCRIPTION_MODAL")}
                                          </div>
                                          <div className="text-justify">
                                            {experienceModal[0].jobDescription}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="my-resume-modal-responsability">
                                            {t("MODAL.RESPONSABILITY_MODAL")}
                                          </div>
                                          <ul className="text-justify">
                                            {experienceModal[0].responsabilities.map(
                                              (responsability, index) => (
                                                <li key={index}>
                                                  {responsability.task}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="my-resume-modal-technical">
                                            {t("MODAL.TECHNICAL_MODAL")}
                                          </div>
                                          <div className="text-justify my-resume-margin-items">
                                            {experienceModal[0].tools
                                              .split(",")
                                              .map((tool, index) => (
                                                <span
                                                  key={index}
                                                  className="badge my-resume-badge-danger"
                                                >
                                                  {tool}
                                                </span>
                                              ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </ReactModal>
                              </div>
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
                            className="button pt-trigger my-resume-margin-cta"
                            href="#contact_me"
                            data-animation="58"
                            data-goto="5"
                          >
                            <i className="fa fa-download"></i> {t("RESUME.DOWNLOAD_CV")}
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
