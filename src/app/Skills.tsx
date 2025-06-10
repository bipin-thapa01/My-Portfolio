"use client";

import { useState, useEffect } from "react";
import "./Skills.css";

export default function Skills(){
  const [skills, setSkills] = useState({});
  const [skillsArray, setSkillsArray] = useState<[string, string][]>([]);

  useEffect(() => {
    const updatedSkills = {
      JavaScript: "80%",
      Python: "50%",
      NODE: "80%",
      PANDAS: "30%",
      REACT: "80%",
      JAVA: "30%",
    };

    setSkills(updatedSkills);
    setSkillsArray(Object.entries(updatedSkills));
  }, []);

  let skillsHtml = skillsArray.map((el,i)=>{
    return(
      <div id={`skill-${i+1}`} className={'skill'} key={i+1}>
        <div id={`skill-${i+1}-head`} className="skill-head">
          <div id={`skill-${i+1}-head-title`}>
            {el[0]}
          </div>
          <div id={`skill-${i+1}-head-percent`}>
            {el[1]}
          </div>
        </div>
        <div className="bar">
          <div className="color-bar" style={{width: el[1], backgroundColor: '#149ddd'}}></div>
        </div>
      </div>
    );
  });
//for commit check

  return(
    <div id="skills-container">
      <div id="skills-title-container">
        <h2 id="skills-title">Skills</h2>
        <div>
          My current skills set are given below
        </div>
      </div>
      <div id="skills-body-container">
        {skillsHtml}
      </div>
    </div>
  );
}