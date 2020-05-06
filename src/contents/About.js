import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <h1>I'm Hemanth Kumar</h1>
        <h3>
          Full Stack React Web <u>Developer</u> | QA <u>Engineer</u>
        </h3>
        <br></br>
        <p>
          I started my journey as QA Enginner where I explored manual testing
          for all leading Virtual Reality,Augumented Reality and Mixed Reality
          devices for collabration an platform. Implemented Automation for web
          dashboard using <b>WebDriverIO</b> and <b>MochaJs</b>. Web development
          is my center of interest, i always love the idea of cross-platform
          development, 1-n one code base deploy into almost any platform, which
          web technology like Javascript enables me to do. I also like creating
          Interactive UI components for better UX using <b>ReactJS</b>.
        </p>
      </div>
    );
  }
}

export default About;
