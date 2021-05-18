import React, { Component } from "react";
import "../styles/about.scss";
import me from "../images/avataaar.jpg";
import Fade from "react-reveal/Fade";

class About extends Component {
  render() {
    return (
      <div id="about-page">
        <div className="contain1">
          <Fade bottom>
            <h3 className="heading"> About Me </h3>
            <h4 className="about-me-bold"> Hello! This is Md. Jamal Uddin. </h4>
            <h4 className="about-me">
              {" "}
              I am currently working as a Software Developer at{" "}
              <a className="bold-blue" href="https://nationalpolymer.net/" target="_blank" rel="noopener noreferrer">
                National Polymer Group{" "}
              </a>
              . I enjoy developing
              complex Mobile and Web applications using modern tools and technologies including <a href=" " className="java">Java</a>, <a href=" " className="bold-brown">Kotlin</a>, <a href=" " className="android">Android</a>, <a href=" " className="bold-yellow">JavaScript</a>, <a href=" " className="bold-blue">React</a>, <a href=" " className="android">Node.js</a>, <a href=" " className="java">WordPress</a> and writing complex <a href=" " className="bold-blue">SQL</a> queries to retrieve data from <a href=" " className="oracle">Oracle</a> and <a href=" " className="java">MySQL</a> databases to represent various ways to solve business problems.
            </h4>

            <h4 className="about-me">
              {" "}
              My goal is to build{" "}
              <a className="bold-blue" href=" ">
                pixel-perfect, components based
              </a>{" "}
              and practical projects which provide a rich user experience with{" "}
              <a className="bold-white" href=" ">
                real world application.
              </a>{" "}
            </h4>
            <h4 className="about-me">
              {" "}
              <a className="bold-white" href=" ">
                {" "}
                When not in front of a computer,
              </a>{" "}
              you will probably find me reading 📚📖, hangout with 👨‍👩‍👦‍👦 and
              blogging 👨‍💻.
              <a className="bold-green" href=" ">
                {" "}
              </a>
            </h4>
          </Fade>
          </div>

        <Fade bottom>
          <img className="me" src={me} alt="Jamal"/>
        </Fade>
        </div>
    );
  }
}

export default About;
