import "./experience.css";
import { section } from "/src/components/section/section";
import { list } from "/src/components/list/list";
const experienceLiTxt = (
  startDate,
  endDate,
  company,
  position,
  description
) => {
  return `<li>
    <h3>${startDate} - ${endDate}</h3>
    <h4>${company}</h4>
    <h4>${position}</h4>
    <p>${description}</p>
  </li>`;
};
const experienceLiAll = (items) => {
  let retLi = [];

  items.forEach((element) => {
    const txt = experienceLiTxt(
      element.startDate,
      element.endDate,
      element.company,
      element.position,
      element.description
    );
    retLi.push(txt);
  });
  return retLi
};

export const experience = (data, modal) => {
  const h2 = document.createElement("h2");
  h2.textContent = "Work Experience";

  const experienceList = data.workExperience;

  const ul = list(experienceLiAll(experienceList), "experience", "");
  section([h2,ul], "experience", modal);
};