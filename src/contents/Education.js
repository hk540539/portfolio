import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="B.Tech Electronics and Communication Engineering"
          where="Sree Rama Engineering College"
          from="August 2013"
          to="April 2017"
        />
        <Widecard
          title="Schooling"
          where="Kendriya Vidyalaya"
          from="2001"
          to="2011"
        />
      </div>
    );
  }
}

export default Education;
