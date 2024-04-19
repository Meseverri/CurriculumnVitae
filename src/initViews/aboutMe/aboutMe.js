import "./aboutMe.css";
import {section} from "/src/components/section/section";

export const aboutMe=(data,modal)=>{
    const h2=document.createElement("h2");
    h2.textContent="About Me"
    const avatar=document.createElement('img')
    avatar.setAttribute('class','avatar');
    avatar.setAttribute('src',data.avatar);
    
    const description=document.createElement("p")
    
    const direccion=document.createElement("p")

    
    section([h2,avatar],"aboutMe",modal)


}