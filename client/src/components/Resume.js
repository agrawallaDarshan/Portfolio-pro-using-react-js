import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";
import Achievements from "./Achievements";
import Roles from "./Roles";

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [project, setProject] = useState(false);
  const [achievements, setAchievements] = useState(false);
  const [roles, setRoles] = useState(false);

  return (
    <div className="container-fluid p-5 bg-resume">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3
            className="text-center"
            style={{
              fontFamily: "Staatliches",
              letterSpacing: "1.5px",
            }}
          >
            RESUME
          </h3>
          <div className="row">
            <div className="col-md-2" style={{ height: "15rem" }}>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      setEducation(true);
                      setSkills(false);
                      setProject(false);
                      setAchievements(false);
                    }}
                  >
                    Education
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      setEducation(false);
                      setSkills(true);
                      setProject(false);
                      setAchievements(false);
                    }}
                  >
                    Skills
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      setEducation(false);
                      setSkills(false);
                      setProject(true);
                      setAchievements(false);
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      setEducation(false);
                      setSkills(false);
                      setProject(false);
                      setAchievements(true);
                    }}
                  >
                    Achievements
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      setEducation(false);
                      setSkills(false);
                      setProject(false);
                      setAchievements(false);
                      setRoles(true);
                    }}
                  >
                    Roles/Involvements
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="col-md-10"
              style={{ height: "15rem", overflow: "scroll" }}
            >
              {education ? (
                <Education />
              ) : skills ? (
                <Skills />
              ) : project ? (
                <Project />
              ) : achievements ? (
                <Achievements />
              ) : roles ? (
                <Roles />
              ) : (
                <Education />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
