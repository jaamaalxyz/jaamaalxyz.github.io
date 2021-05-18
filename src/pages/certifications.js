import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../styles/certifications.scss";
import { Column, Row } from "simple-flexbox";

class Certifications extends Component {
  render() {
    return (
      <div id="cert-page">
        <Fade bottom>
          <h3 className="heading-cert"> My Certifications </h3>
        </Fade>

        <div className="logo-container">
          <div className="about-cert">
            <Fade bottom>
              <Column className="col1" flexGrow={1}>
                <Row wrap horizontal="spaced">
                  <Column className="card" flexGrow={1} horizontal="spaced">
                    <a
                      className="cert-name"
                      href="https://www.hackerrank.com/certificates/b9a54cebc9ab"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      JavaScript (Basic)
                    </a>
                    <a className="cert-desc" href=" ">
                      -Hackerrank{" "}
                    </a>
                  </Column>

                  <Column className="card" flexGrow={1} horizontal="spaced">
                    <a
                      className="cert-name-udemy"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.udemy.com/certificate/UC-38c4ea7c-79f1-4419-bfe1-45f3a5c2e98e/"
                    >
                      The Web Developer Bootcamp by Colt Steel
                    </a>
                    <a className="cert-desc" href=" ">
                      -Udemy
                    </a>
                  </Column>
                </Row>
              </Column>
            </Fade>

            <Fade bottom>
              <Column className="col2" flexGrow={1}>
                <Row wrap horizontal="spaced">
                  <Column className="card" flexGrow={1} horizontal="spaced">
                    <a
                      className="cert-name"
                      href="https://www.freecodecamp.org/certification/jamal-pb95/javascript-algorithms-and-data-structures"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      JavaScript Algorithms and Data Structures
                    </a>
                    <a className="cert-desc" href=" ">
                      -FreeCodeCamp
                    </a>
                  </Column>

                  <Column className="card" flexGrow={1} horizontal="spaced">
                    <a
                      className="cert-name"
                      href="https://www.freecodecamp.org/certification/jamal-pb95/front-end-libraries"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Front End Libraries (React, Redux, jQuery, Bootstrap)
                    </a>
                    <a className="cert-desc" href=" ">
                      -FreeCodeCamp
                    </a>
                  </Column>
                </Row>
              </Column>
            </Fade>

            <Fade bottom>
              <Column className="col3" flexGrow={1}>
                <Row wrap horizontal="spaced">
                  <Column className="card" flexGrow={1} horizontal="spaced">
                    <a
                      className="cert-name"
                      href="https://www.freecodecamp.org/certification/jamal-pb95/responsive-web-design"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Responsive Web Design
                    </a>
                    <a className="cert-desc" href=" ">
                      -FreeCodeCamp{" "}
                    </a>
                  </Column>
                </Row>
              </Column>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Certifications;
