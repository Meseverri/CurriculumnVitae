import "./header.css";
import data from "/src/data/data.js";
import { list } from "/src/components/list/list";
export const header = (app) => {
  const header$$ = document.createElement("header");
  const h1$$=document.createElement( "h1" );
  h1$$.textContent=data.name
  header$$.appendChild(h1$$)
  const nav$$=document.createElement("nav");
  list(
    ["About me", "Education", "Experience", "Projects"],
    "header-nav-ul",
    nav$$,
    "a"
  );
  const aList=nav$$.querySelectorAll("a");
  aList.forEach(element => {
  element.setAttribute("href",`#${element.innerText.replace(/\s+/g, '').toLowerCase()}`);
  });

  header$$.appendChild(nav$$);
  app.append(header$$);
};
