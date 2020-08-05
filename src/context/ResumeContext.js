import React, { PureComponent } from "react";
import { educations } from "../data/educations";
import { funs } from "../data/funs";
import { clients } from "../data/clients";

export const ResumeContext = React.createContext();

class ResumeProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectLang: localStorage.getItem("i18nextLng"),
      educations: [],
      funs: [],
      clients: clients,
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
      funs: lang === "en" ? funs.EN : lang === "fr" ? funs.FR : funs.IT,
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
