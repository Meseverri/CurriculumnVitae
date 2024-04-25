import { experience } from "/src/initViews/experience/experience";
import { education } from "/src/initViews/education/education";

export const contentChangeEvent = (button,data) => {
  // const main$$ = document.querySelector("main");
  const changeSection$$ = document.querySelector("#content");
  let experienceBool = true;
  button.addEventListener("click", () => {
    console.log(changeSection$$)
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
