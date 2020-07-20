import React, { Component } from "react";
import { educations } from "../data/educations";

export const ResumeContext = React.createContext();

class ResumeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectLang: localStorage.getItem("i18nextLng"),
      educations: [],
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage(i, lang) {
    i.changeLanguage(lang);
    this.handleEdaucation(lang);
    this.setState({ selectLang: lang });
  }

  handleEdaucation(lang) {
    this.setState({
      educations:
        lang === "en"
          ? educations.EN
          : lang === "fr"
          ? educations.FR
          : educations.IT,
    });
  }

  componentDidMount() {
    this.handleEdaucation(this.state.selectLang);
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
