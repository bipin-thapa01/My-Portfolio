"use client";

import "./Skills.css";

export default function Skills(){
  let skillCount = 6;
  for(let i=1; i<=6; i++){
    let percent = document.getElementById(`skill-${i}-head-percent`);
    document.getElementById(`color-bar-${i}`).style.width = `${parseInt(percent)}%`;
  }

  return(
    <div id="skills-container">
      <div id="skills-title-container">
        <h2 id="skills-title">Skills</h2>
        <div>
          My current skills set are given below
        </div>
      </div>
      <div id="skills-body-container">
        <div id="body-1">
          <div id="skill-1">
            <div id="skill-1-head">
              <div id="skill-1-head-title">
                JavaScript
              </div>
              <div id="skill-1-head-percent">
                80%
              </div>
            </div>
            <div className="bar">
              <div className="color-bar" id="color-bar-1"></div>
            </div>
          </div>
        </div>
        <div id="body-2">

        </div>
      </div>
    </div>
  );
}