import React, { PureComponent } from "react";
import { educations } from "../data/educations";
import { formations } from "../data/formations";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { funs } from "../data/funs";
import { clients } from "../data/clients";
import { skills } from "../data/skills";
import { experiences } from "../data/experiences";
import { EN_LANGUAGE, FR_LANGUAGE } from "../constants";

export const ResumeContext = React.createContext();

class ResumeProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectLang: localStorage.getItem("i18nextLng"),
      educations: [],
      formations: [],
      testimonials: [],
      services: [],
      experiences: [],
      funs: [],
      skills: [],
      clients: clients,
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleShowHideDescription = this.handleShowHideDescription.bind(this);
  }

  handleShowHideDescription(serviceId) {
    console.log(serviceId);
    let serviceCliked = this.state.services.find(
      (item) => item.id === serviceId
    );
    console.log(serviceCliked);
  }

  handleChangeLanguage(i, lang) {
    i.changeLanguage(lang);
    this.updateHandles(lang);
    this.setState({ selectLang: lang });
  }

  updateHandles(selectLag) {
    this.handleServices(selectLag);
    this.handleEducations(selectLag);
    this.handleFormations(selectLag);
    this.handleExperiences(selectLag);
    this.handleSkills(selectLag);
    this.handleTestimonials(selectLag);
    this.handleFuns(selectLag);
  }

  handleServices(lang) {
    this.setState({
      services:
        lang === EN_LANGUAGE
          ? services.EN
          : lang === FR_LANGUAGE
          ? services.FR
          : services.IT,
    });
  }

  handleEducations(lang) {
    this.setState({
      educations:
        lang === EN_LANGUAGE
          ? educations.EN
          : lang === FR_LANGUAGE
          ? educations.FR
          : educations.IT,
    });
  }

  handleFormations(lang) {
    this.setState({
      formations,
    });
  }

  handleExperiences(lang) {
    this.setState({
      experiences:
        lang === EN_LANGUAGE
          ? experiences.EN
          : lang === FR_LANGUAGE
          ? experiences.FR
          : experiences.IT,
    });
  }

  handleSkills(lang) {
    this.setState({
      skills:
        lang === EN_LANGUAGE
          ? skills.EN
          : lang === FR_LANGUAGE
          ? skills.FR
          : skills.IT,
    });
  }

  handleTestimonials(lang) {
    this.setState({
      testimonials:
        lang === EN_LANGUAGE
          ? testimonials.EN
          : lang === FR_LANGUAGE
          ? testimonials.FR
          : testimonials.IT,
    });
  }

  handleFuns(lang) {
    this.setState({
      funs:
        lang === EN_LANGUAGE
          ? funs.EN
          : lang === FR_LANGUAGE
          ? funs.FR
          : funs.IT,
    });
  }

  componentDidMount() {
    this.handleServices(this.state.selectLang);
    this.handleEducations(this.state.selectLang);
    this.handleFormations(this.state.selectLang);
    this.handleExperiences(this.state.selectLang);
    this.handleSkills(this.state.selectLang);
    this.handleTestimonials(this.state.selectLang);
    this.handleFuns(this.state.selectLang);
  }

  render() {
    return (
      <ResumeContext.Provider
        value={{
          ...this.state,
          handleChangeLanguage: this.handleChangeLanguage,
          handleShowHideDescription: this.handleShowHideDescription,
        }}
      >
        {this.props.children}
      </ResumeContext.Provider>
    );
  }
}

const ResumeConsumer = ResumeContext.Consumer;

export { ResumeProvider, ResumeConsumer };
