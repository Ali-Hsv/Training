import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './style.css'
import gsap from 'gsap'

function blockAnimation1(){
  gsap.from(".block", {
    duration: 1,
    x: 200,
    opacity: 0.5,
    rotation: 360,
    ease: 'power2.out'
  });
}

const button = document.querySelector(".button");
const block = document.getElementById("block-visibility");

button.addEventListener('click', ()=>{
  if(block.classList.contains('hidden')){
    console.log("hidden");
    block.classList.remove('hidden');
    blockAnimation1();
  }
  else{
    console.log("none")
    block.classList.add('hidden');
  }
})

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
