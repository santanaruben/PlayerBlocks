import i18next from "i18next";
import React, { Component } from "react";
import delay from "delay";

class SwitchLanguage extends Component {
  constructor() {
    super();
    this.state = {
      english: true,
    };
    this.checkLan = this.checkLan.bind(this);
    this.changeLan = this.changeLan.bind(this);
  }

  componentDidMount = async function () {
    await delay(2000);
    this.checkLan(i18next.language);
  };

  checkLan = async function (lang) {
    if (lang === "es") {
      this.setState({
        english: false,
      });
    } else if (lang === "en") {
      this.setState({
        english: true,
      });
    } else {
      await delay(3500);
      this.checkLan(i18next.language);
    }
  };

  changeLan = () => {
    let lang = this.state.english ? "es" : "en";
    this.setState({
      english: !this.state.english,
    });
    i18next.changeLanguage(lang);
  };

  render() {
    const { english } = this.state;
    return (
      <img
        height="20px"
        title={`${english ? "Español" : "English"}`}
        src={`./img/flags/${english ? "es" : "en"}.png`}
        alt="Language Flag"
        onClick={() => this.changeLan()}
      />
    );
  }
}

export default SwitchLanguage;
