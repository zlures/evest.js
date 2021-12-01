/**——————————————
Evest.JS @loader
:: Copyright 2021 EvestJS
          made w/ love
———————————————**/

const tester = document.createElement('div');
tester.classList.add('evest-center');
const body = document.body
body.appendChild(tester);
const in = `
<link rel="stylesheet" href="https://zlures.github.io/evest.js/css/loader.css"></link>
<h1 class="textfocusin">Evest.JS</h1>
`
tester.innerHTML = in;
