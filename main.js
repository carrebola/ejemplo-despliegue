import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Ejemplo de despliegue</h1>
    <img src=${viteLogo} width="300px">
  </div>
`

setupCounter(document.querySelector('#counter'))
