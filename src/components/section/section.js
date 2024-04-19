import "./section.css";

export const section=(contentList,context,modal)=>{
    const section=document.createElement("section");
    section.classList.add(context)
    section.id=context;
    contentList.forEach(element => {
        section.appendChild(element);
    });

    modal.appendChild(section)
}