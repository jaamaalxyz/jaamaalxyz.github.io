import React, { Component } from "react";
import "../styles/App.scss";
import Head from "./head.js";
import Navbar from "./navbar.js";
import avatar from "../images/muslim.svg";
import About from "../pages/about.js";
// import Skills from "../pages/skills.js";
import Footer from "../components/footer.js";
import Contact from "../pages/contact.js";
import Fade from "react-reveal/Fade";
import Certifications from "../pages/certifications.js";

class App extends Component {
  render() {
    return (
      <div id="top" className="App">
        <Head />
        <Navbar />
        <article className="contain">
          <Fade bottom>
            <h4 className="intro">
              {" "}
              <span className="animate-hand" role="img" aria-label="hand-wave">
                👋
              </span>{" "}
              Hi, my name is{" "}
            </h4>
            <Fade bottom cascade>
              <h2 className="name">Md. Jamal Uddin.</h2>
            </Fade>
            <h2 className="aftername">
              {" "}
              I build amazing mobile and web applications.
            </h2>
            <h4 className="desc">
              <p>I'm a Software Developer based in Dahka, Bangladesh. I mainly build mobile and web applications and writing complex SQL queries for managing databases to show visual representations of data for various ways to solve business problems.</p>
              <p>See my portfolio{" "}
              <a
                className="highlight-link"
                href="#portfolio"
                rel="noopener noreferrer"
              >
                here
              </a>
              👨‍💻</p>
            </h4>
            <p>
              <button
                className="arrow-link"
                rel="noopener noreferrer"
              >
                <a className="mail" href="#Contact-section">
                  Get in touch
                </a>
              </button>
            </p>
          </Fade>
        </article>
        <Fade bottom>
          <img className="myavatar" src={avatar} alt="Avatar" />
        </Fade>
        <About />
        {/* <Skills /> */}
        <Certifications />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
