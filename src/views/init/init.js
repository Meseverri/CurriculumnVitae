import "./init.css";
import {aboutMe} from "/src/initViews/aboutMe/aboutMe"
import {projects} from "/src/initViews/projects/projects"
import {experience} from "/src/initViews/experience/experience"
import {education} from "/src/initViews/education/education"

export const init = (data,app) => {
  const main$$ = document.createElement("main");
  aboutMe(data,main$$);
  projects(data,main$$);
  experience(data,main$$)
  education(data,main$$);
  app.appendChild(main$$);
};
