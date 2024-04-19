import "./projects.css"
import { list } from "/src/components/list/list";
import { section } from "/src/components/section/section";


const projectLiTxt=(imgSrc,title,link,description)=>{
    const txt=`<img src="${imgSrc}" alt="${title}" website="">
    <h3>${title}</h3>
    <p>${description}</p>
    <a href="${link}">Know more...</a>`
    return txt
}

const projectLiAll =(items)=>{
    let retLi=[];

    items.forEach(element => {
        const txt=projectLiTxt(element.preview, element.title, element.link,element.description);
        retLi.push(txt)
    });
    return  retLi;
}
export const projects=(data,modal)=>{

    const h2=document.createElement("h2");
    h2.textContent="Recent Projects"

    const projectList=data.projects;
    const txtLi=projectLiAll(projectList)
    const ul=list(txtLi,"projects-ul","");

    section([h2,ul],"projects",modal)



}