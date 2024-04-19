import "./init.css";
import {aboutMe} from "/src/initViews/aboutMe/aboutMe"

export const init = (data,app) => {
  const main$$ = document.createElement("main");
  aboutMe(data,main$$)
  app.appendChild(main$$);
};
