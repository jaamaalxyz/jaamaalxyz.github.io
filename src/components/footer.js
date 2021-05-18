import React, { Component } from "react";
import "../styles/footer.scss";
import Flip from "react-reveal/Flip";

class Footer extends Component {
  render() {
    return (
      <div className="cont">
        <Flip cascade>
          <h4 className="intro1">
            {" "}
            © 2020 - Build <span className="bold-red">❤</span> by{" "}
            <a className="bold-blue" href="https://reactjs.org/">
              React ⚛
            </a>{" "}
            and Deployed on{" "}
            <a className="bold-blue" href="https://www.netlify.com/">
              Netlify
            </a>
          </h4>
          <h4 className="intro1">
            Developed by{" "}
            <a className="bold-blue" href="/">
              Md. Jamal Uddin
            </a>{" "}
          </h4>
        </Flip>
      </div>
    );
  }
}

export default Footer;
