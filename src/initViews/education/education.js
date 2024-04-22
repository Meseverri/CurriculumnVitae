import "./education.css";
import {section} from "/src/components/section/section";
import { list } from "/src/components/list/list";
export const education=(data,modal)=>{
    const h2=document.createElement("h2");
    h2.textContent="Education";

    const h3=document.createElement("h3");
    h3.textContent=data.education.degree;

    const h4=document.createElement("h4");
    h4.textContent=data.education.university;

    const relevantCoursesH3=document.createElement("h3");
    relevantCoursesH3.innerText= "Relevant Courses";
    const coursesList=list(data.education.relevantCourses,"relevantCourses-ul")
    section([h2,
        h3,
        h4,
        relevantCoursesH3,
        coursesList],"education",modal)

}