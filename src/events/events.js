import { experience } from "/src/initViews/experience/experience";
import { education } from "/src/initViews/education/education";

const removeContent=(modal,textContent,data,expBool,button)=>{
  modal.removeChild(modal.childNodes[0]);
  button.textContent = textContent;
  expBool? experience(data,modal):education(data, modal);
  
}

export const contentChangeEvent = (button,data) => {
  const changeSection$$ = document.querySelector("#content");
  let experienceBool = false;
  button.addEventListener("click", () => {
    if (experienceBool) {
      removeContent(changeSection$$, "Show experience",data,experienceBool,button);
      experienceBool = false;
    } else {
      removeContent(changeSection$$, "Show education",data,experienceBool,button);
      experienceBool = true;
    }
  });
};
