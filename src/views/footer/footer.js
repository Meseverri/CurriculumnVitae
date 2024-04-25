import "./footer.css";

const template = () => {
    
  return `
  <footer>
    <p>©️ Created by QuantMike</p>
  </footer>
  `;
};

const footer = (modal) => {
    modal.innerHTML += template();
  
};

export default footer;