import React, { PureComponent } from "react";
import { educations } from "../data/educations";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { funs } from "../data/funs";
import { clients } from "../data/clients";

export const ResumeContext = React.createContext();

class ResumeProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectLang: localStorage.getItem("i18nextLng"),
      educations: [],
      testimonials: [],
      services: [],
      funs: [],
      clients: clients,
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage(i, lang) {
    i.changeLanguage(lang);
    this.updateHandles(lang);
    this.setState({ selectLang: lang });
  }

  updateHandles(selectLag) {
    this.handleServices(selectLag);
    this.handleEducations(selectLag);
    this.handleTestimonials(selectLag);
    this.handleFuns(selectLag);
  }

  handleServices(lang) {
    this.setState({
      services:
        lang === "en" ? services.EN : lang === "fr" ? services.FR : services.IT,
    });
  }

  handleEducations(lang) {
    this.setState({
      educations:
        lang === "en"
          ? educations.EN
          : lang === "fr"
          ? educations.FR
          : educations.IT,
    });
  }

  handleTestimonials(lang) {
    this.setState({
      testimonials:
        lang === "en"
          ? testimonials.EN
          : lang === "fr"
          ? testimonials.FR
          : testimonials.IT,
    });
  }

  handleFuns(lang) {
    this.setState({
      funs: lang === "en" ? funs.EN : lang === "fr" ? funs.FR : funs.IT,
    });
  }
  componentDidMount() {
    this.handleServices(this.state.selectLang);
    this.handleEducations(this.state.selectLang);
    this.handleTestimonials(this.state.selectLang);
    this.handleFuns(this.state.selectLang);
  }

  render() {
    return (
      <ResumeContext.Provider
        value={{
          ...this.state,
          handleChangeLanguage: this.handleChangeLanguage,
        }}
      >
        {this.props.children}
      </ResumeContext.Provider>
    );
  }
}

const ResumeConsumer = ResumeContext.Consumer;

export { ResumeProvider, ResumeConsumer };
