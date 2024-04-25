import './style.css'
import data from "/src/data/data.js";
import { header } from './src/views/header/header'
import { init } from './src/views/init/init'    
import  footer  from './src/views/footer/footer'    

const app$$=document.querySelector("#app")
header(data,app$$)
init(data,app$$)
// footer(app$$)