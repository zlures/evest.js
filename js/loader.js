/**——————————————
Evest.JS @loader
:: Copyright 2021 EvestJS
          made w/ love
———————————————**/

const tester = document.createElement('div');
tester.classList.add('evest-info');
const body = document.body
body.appendChild(tester);
const indiv = `
<link rel="stylesheet" href="https://zlures.github.io/evest.js/css/loader.css"></link>
<h1 style="position: absolute;top: 50%;left: 50%;margin-top: -50px;margin-left: -50px;font-size:4rem" class="textfocusin">✨ Evest.JS</h1>
<p style="position: absolute;top: 55%;left: 50%;margin-top: -50px;margin-left: -50px;font-size:2rem" class="textfocusin"> loaded.</h1>
<div style="height:4px;background-color:gray;border-radius:10px">`
tester.innerHTML = indiv;
