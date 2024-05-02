import "./init.css";
import {aboutMe} from "/src/initViews/aboutMe/aboutMe";
import {projects} from "/src/initViews/projects/projects";
import {experience} from "/src/initViews/experience/experience";
// import {education} from "/src/initViews/education/education";
import {contentChangeEvent} from "/src/events/events";


export const init = (data,app) => {
  const main$$ = document.createElement("main");
  aboutMe(data,main$$);
  //button change
  const changeDiv$$=document.createElement("div");
  changeDiv$$.className="change-button";
  
  const buttonChange$$=document.createElement("button");
  buttonChange$$.setAttribute("class","change")
  buttonChange$$.textContent="Show education";
  changeDiv$$.appendChild(buttonChange$$);
  main$$.appendChild(changeDiv$$);
  
  const content$$= document.createElement("div")
  content$$.setAttribute("id",'content')
  
  experience(data,content$$)
  
  main$$.appendChild(content$$);
  
  projects(data,main$$);
  app.appendChild(main$$);
  contentChangeEvent(buttonChange$$,data);
};
