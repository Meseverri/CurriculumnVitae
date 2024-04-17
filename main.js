import './style.css'
import { header } from './src/views/header/header'
import { init } from './src/views/init/init'    

const app$$=document.querySelector("#app")
header(app$$)
init(app$$)