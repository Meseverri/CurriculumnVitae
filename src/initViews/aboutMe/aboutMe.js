import "./aboutMe.css";
import {section} from "/src/components/section/section";
import { list } from "/src/components/list/list";

export const aboutMe=(data,modal)=>{

    const h2=document.createElement("h2");
    h2.textContent="About Me"

    const avatar=document.createElement('img')
    avatar.setAttribute('class','avatar');
    avatar.setAttribute('src',data.avatar);

    const skills=list(data.skills,"aboutme-skills","p");

    const description=document.createElement("p");
    description.textContent=data.aboutMe;
    const direccion=document.createElement("p");
    direccion.textContent=data.address;
    
    section([h2,avatar,skills,description,direccion],"aboutme",modal);
    


}