import React, { Component } from "react";
import "../styles/navbar.scss";

import Fade from "react-reveal/Fade";
import LogoWhite from "../images/letter_j_white.png";
import LogoBlack from "../images/letter_j_black.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: LogoBlack,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: LogoWhite,
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: LogoBlack,
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <Fade left>
            <a href="#top" className="logo">
              <div>
                <img
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                  src={this.state.imgSrc}
                  alt="logo"
                  style={{ height: "45px" }}
                />
              </div>{" "}
            </a>
          </Fade>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <Fade right>
              <li>
                {" "}
                <a className="ind" href="#about-page">
                  {" "}
                  About Me{" "}
                </a>{" "}
              </li>
              {/* <li>
                {" "}
                <a className="ind" href="#skill-top">
                  {" "}
                  Skills
                </a>{" "}
              </li> */}
              <li>
                {" "}
                <a className="ind" href="https://github.com/jamal-pb95" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Portfolio
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="ind" href="https://jaamaal.medium.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  Blog
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="ind" href="#Contact-section">
                  {" "}
                  Contact Me
                </a>{" "}
              </li>
              <button
                className="resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  {" "}
                  <a className="res" href=" " rel="noopener noreferrer">
                    {" "}
                    Resume
                  </a>{" "}
                </li>
              </button>
            </Fade>
          </ul>
        </header>
      </div>
    );
  }
}

export default Navbar;
