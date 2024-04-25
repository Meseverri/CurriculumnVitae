import "./init.css";
import {aboutMe} from "/src/initViews/aboutMe/aboutMe"
import {projects} from "/src/initViews/projects/projects"
import {experience} from "/src/initViews/experience/experience"
import {education} from "/src/initViews/education/education"

export const init = (data,app) => {
  const main$$ = document.createElement("main");
  aboutMe(data,main$$);
  projects(data,main$$);
 //button change
  const changeDiv=document.createElement("div");
  const buttonChange=document.createElement("button");
  buttonChange.setAttribute("class","change")
  buttonChange.textContent="Show education";
  changeDiv.appendChild(buttonChange);
  main$$.appendChild(changeDiv);
  
  
  experience(data,main$$)
  app.appendChild(main$$);
  
  let experienceBool=true;
  buttonChange.addEventListener("click",()=>{
    if (experienceBool){
      const changeSection=document.querySelector(".experience");
      changeSection.remove();
      experienceBool=false;
      buttonChange.textContent="Show experience";
      education(data,main$$);
    }else{
      const changeSection=document.querySelector(".education");
      changeSection.remove();
      experienceBool=true;
      buttonChange.textContent="Show education";
      experience(data,main$$);
    }
  })
};
