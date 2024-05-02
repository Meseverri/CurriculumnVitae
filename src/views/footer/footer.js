import "./footer.css";

const template = () => {
  return `
    <p>©️ Created by QuantMike</p>
  `;
};

const footer = (modal) => {
  const footer = document.createElement("footer");
  footer.innerHTML = template();
  modal.appendChild(footer)
};

export default footer;
