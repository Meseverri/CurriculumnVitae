import "./list.css";

export const list = (props, context, etiqs = "p") => {
  /*props: Este es un array que contiene los elementos que quieres incluir en tu lista HTML. Si etiqs contiene más de una etiqueta, props debería ser un array de arrays, donde cada subarray contiene los valores para cada etiqueta.
context: Este es un string que se utiliza como nombre de clase para la lista HTML (<ul>). Puedes usarlo para aplicar estilos CSS a tu lista.
etiqs: Este es un string que contiene las etiquetas HTML que quieres usar en tu lista. Las etiquetas deben estar separadas por guiones (-). Por defecto, si no se proporciona etiqs, se usará la etiqueta <p>. Por ejemplo, si etiqs es "p-span", entonces cada elemento de la lista será envuelto primero en una etiqueta <p>*/
  let etiquList = etiqs.split("-");
  const complex = etiquList.length > 1;
  let ret = `<ul class="${context}">`;
    if (complex){
        let keys = Object.keys(props[0]);
    }
  console.log(props)
  for (let i = 0; i < props.length; i++) {
    ret += `<li>`;
    for (let j = 0; j < etiquList.length; j++) {
        if (complex) {
        console.log(props[i][keys[j]]);
        ret += `<${etiquList[j]}>${props[i][keys[j]]}</${etiquList[j]}>`;
      } else {
        ret += `<${etiquList[j]}>${props[i]}</${etiquList[j]}>`;
      }
    }
    ret += `</li>`;
  }
  return (ret += "</ul>");
};
