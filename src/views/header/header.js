import "./header.css"
import data from "/src/data/data.js";

export const header=(app)=>{
    const header$$=document.createElement("header");
    const ret = `
    <h1>${data.name}</h1>
    <nav>
      <ul>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
    `
    header$$.innerHTML=ret;
    app.append(header$$);



}