import React, { Component } from "react";
import "../styles/contact.scss";
import Fade from "react-reveal/Fade";
import github from "../images/github-logo.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import medium from "../images/medium.png";
import twitter from "../images/twitter.png";

class Contact extends Component {
  render() {
    return (
      <Fade bottom>
        <div id="Contact-section">
          <h2 className="cent-line">
            {" "}
            You can find me around the web by following below social links :{" "}
          </h2>
          <div className="logos">
            <a
              href="https://github.com/jamal-pb95/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logoc" src={github} alt="github"></img>
            </a>
            <a
              href="mailto:jamal.pb95@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logoc" src={gmail} alt="gmail"></img>
            </a>
            <a
              href="https://linkedin.com/in/jamal-pb95/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logoc" src={linkedin} alt="linkedin"></img>
            </a>
            <a
              href="https://jaamaal.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logoc" src={medium} alt="medium"></img>
            </a>
            <a
              href="https://twitter.com/jamal_uddin95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logoc" src={twitter} alt="twitter"></img>
            </a>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Contact;
