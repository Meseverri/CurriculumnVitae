import './style.css'
import data from "/src/data/data.js";
import { header } from './src/views/header/header'
import { init } from './src/views/init/init'    

const app$$=document.querySelector("#app")
header(app$$)
init(data,app$$)