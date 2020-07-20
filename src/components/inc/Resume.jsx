import React, { Component } from "react";
import { ResumeConsumer } from "../../context";
import { Translation } from "react-i18next";
export default class Resume extends Component {
  render() {
    return (
      <ResumeConsumer>
        {(value) => {
          const { educations } = value;
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
                          <h3>Experience</h3>
                        </div>
                        <div className="timeline">
                          <div className="timeline-event te-primary">
                            <h5 className="event-date">Dec 2012 - Current</h5>
                            <h4 className="event-name">Frontend-developer</h4>
                            <span className="event-description">
                              Web Agency
                            </span>
                            <p>
                              Mauris magna sapien, pharetra consectetur
                              fringilla vitae, interdum sed tortor.
                            </p>
                          </div>
                          <div className="timeline-event te-primary">
                            <h5 className="event-date">Dec 2011 - Nov 2012</h5>
                            <h4 className="event-name">Web Designer</h4>
                            <span className="event-description">
                              Apple Inc.
                            </span>
                            <p>
                              Mauris magna sapien, pharetra consectetur
                              fringilla vitae, interdum sed tortor.
                            </p>
                          </div>
                          <div className="timeline-event te-primary">
                            <h5 className="event-date">Jan 2010 - Dec 2011</h5>
                            <h4 className="event-name">Graphic Designer</h4>
                            <span className="event-description">
                              Web Agency
                            </span>
                            <p>
                              Mauris magna sapien, pharetra consectetur
                              fringilla vitae, interdum sed tortor.
                            </p>
                          </div>
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
                          <a className="button" target="_blank" href="#">
                            Download CV
                          </a>
                        </div>
                      </div>
                    </div>
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
