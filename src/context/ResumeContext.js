import React, { PureComponent } from "react";
import { educations } from "../data/educations";
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
      funs: [],
      clients: clients,
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage(i, lang) {
    i.changeLanguage(lang);
    this.handleEducation(lang);
    this.handleTestimonial(lang);
    this.handleFun(lang);
    this.setState({ selectLang: lang });
  }

  handleEducation(lang) {
    this.setState({
      educations:
        lang === "en"
          ? educations.EN
          : lang === "fr"
          ? educations.FR
          : educations.IT,
    });
  }

  handleTestimonial(lang) {
    this.setState({
      testimonials:
        lang === "en"
          ? testimonials.EN
          : lang === "fr"
          ? testimonials.FR
          : testimonials.IT,
    });
  }

  handleFun(lang) {
    this.setState({
      funs: lang === "en" ? funs.EN : lang === "fr" ? funs.FR : funs.IT,
    });
  }
  componentDidMount() {
    this.handleEducation(this.state.selectLang);
    this.handleTestimonial(this.state.selectLang);
    this.handleFun(this.state.selectLang);
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
