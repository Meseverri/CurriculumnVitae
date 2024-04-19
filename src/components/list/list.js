import "./list.css";

export const list = (dataList, context, etiq = "p") => {
  const ul = document.createElement("ul");
  ul.classList.add(context);
  dataList.forEach((item) => {
    let li = document.createElement("li");
    if (etiq===""){
      li.innerHTML+=item
      ul.appendChild(li);
    }else{
      
      let inner = document.createElement(etiq);
      inner.textContent = item;
      li.appendChild(inner);
      ul.appendChild(li);
    }
  });
  return ul;
};

