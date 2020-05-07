import React from "react";
import ecom from "../img/Ecom.PNG";
import invite from "../img/Invite.PNG";

const ecomlist = [
  "ReactJS",
  "Redux Sagas",
  "Firebase",
  "ExpressJs",
  "Nodejs",
  "Heroku",
];
const invitelist = [
  "ReactJS",
  "ContextAPI",
  "MongoDB",
  "ExpressJs",
  "Nodejs",
  "Heroku",
];

const Projects = () => {
  return (
    <div className="proj">
      <h1 className="projectHeading">Projects</h1>
      <div className=" projectContainer">
        <div className="item1">
          <div className="imageContainer">
            <img src={ecom} className="background-image" alt="No pic"></img>
          </div>
          <div className="contentContainer">
            <h1 className="subtopics">Ecommerce Site</h1>
            <ul className="listStyle">
              {ecomlist.map((value) => {
                return <li className="listItem">{value}</li>;
              })}
            </ul>
            <a
              className="nones"
              href="https://ecom-live.herokuapp.com/"
              target="_blank"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="item1">
          <div className="imageContainer">
            <img src={invite} className="background-image" alt="No pic"></img>
          </div>
          <div className="contentContainer">
            <h1 className="subtopics">Party Invite Site</h1>
            <ul className="listStyle">
              {invitelist.map((value) => {
                return <li className="listItem">{value}</li>;
              })}
            </ul>
            <a
              className="nones"
              href="https://shielded-reaches-07712.herokuapp.com/"
              target="_blank"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
