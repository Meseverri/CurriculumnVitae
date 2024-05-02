import { experience } from "/src/initViews/experience/experience";
import { education } from "/src/initViews/education/education";

export const contentChangeEvent = (button,data) => {
  const changeSection$$ = document.querySelector("#content");
  let experienceBool = true;
  console.log(button);
  button.addEventListener("click", () => {
    console.log("aqui tas");
    if (experienceBool) {
      changeSection$$.removeChild(changeSection$$.childNodes[0]);
      experienceBool = false;
      button.textContent = "Show experience";
      education(data, changeSection$$);
    } else {
      changeSection$$.removeChild(changeSection$$.childNodes[0]);
      experienceBool = true;
      button.textContent = "Show education";
      experience(data, changeSection$$);
    }
  });
};
