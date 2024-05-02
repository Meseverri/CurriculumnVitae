import { experience } from "/src/initViews/experience/experience";
import { education } from "/src/initViews/education/education";

const removeContent=(modal,textContent,data)=>{
  modal.removeChild(modal.childNodes[0]);
  button.textContent = textContent;
  education(data, modal);
}

export const contentChangeEvent = (button,data) => {
  const changeSection$$ = document.querySelector("#content");
  let experienceBool = true;
  button.addEventListener("click", () => {
    if (experienceBool) {
      experienceBool = false;
      removeContent(changeSection$$, "Show experience",data);
    } else {
      experienceBool = true;
      removeContent(changeSection$$, "Show education",data);
    }
  });
};
