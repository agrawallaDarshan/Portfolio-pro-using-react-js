import React, { useState } from "react";
import Education from "./Education";
import Project from "./Project";

const Resume = () => {
  const [project, setProject] = useState(false);
  const [education, setEducation] = useState(false);
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center">Resume</h3>
          <div className="row">
            <div className="col-md-2">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      setEducation(true);
                      setProject(false);
                    }}
                  >
                    Education
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn">Skills</button>
                </li>
                <li className="nav-item">
                  <button className="btn">Internships</button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      setEducation(false);
                      setProject(true);
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn">Internships</button>
                </li>
              </ul>
            </div>
            <div
              className="col-md-10"
              style={{ height: "15rem", overflow: "scroll" }}
            >
              {education ? <Education /> : project ? <Project /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
