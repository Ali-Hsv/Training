import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './style.css'
import gsap from 'gsap'

function blockAnimation1(){
  //from -> to
  gsap.to(".block", {
    duration: 1,
    x: 200,
    opacity: 0,
    rotation: 360,
    ease: 'power2.out'
  });
}


const button = document.querySelector(".button");
const block = document.getElementById("block-visibility");

//todo: gsap.from - 
// button.addEventListener('click', ()=>{
//   if(block.classList.contains('hidden')){
//     console.log("hidden");
//     block.classList.remove('hidden');
//     blockAnimation1();
//   }
//   else{
//     console.log("none")
//     block.classList.add('hidden');
//   }
// });

//todo: gsap.to - 
button.addEventListener('click', ()=>{
  blockAnimation1();
});