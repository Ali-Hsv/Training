import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './style.css'
import gsap from 'gsap'


//! - gsap.to(), gsap.from(), gsap.fromTo() ->
// function blockAnimation1(){
//   //from -> to
//   gsap.to(".block", {
//     duration: 1,
//     x: 200,
//     opacity: 0,
//     rotation: 360,
//     ease: 'power2.out'
//   });
// }

// function blockAnimation2(){
//   //from -> to
//   gsap.fromTo(".block",
//     {
//       x: -400,
//       opacity: 1,
//       rotation: 0,
//     },
//     {
//       duration: 2,
//       x: 0,
//       opacity: 1,
//       rotation: 360,
//       ease: 'back.inOut'
//     }
//   );
// }

// const button = document.querySelector(".button");
// const block = document.getElementById("block-visibility");

// //todo: gsap.from - 
// // button.addEventListener('click', ()=>{
// //   if(block.classList.contains('hidden')){
// //     console.log("hidden");
// //     block.classList.remove('hidden');
// //     blockAnimation1();
// //   }
// //   else{
// //     console.log("none")
// //     block.classList.add('hidden');
// //   }
// // });

// //todo: gsap.to - 
// // button.addEventListener('click', ()=>{
// //   blockAnimation1();
// // });

// //todo: gsap.fromTo - 
// button.addEventListener('click', ()=>{
//   blockAnimation2();
// });

//! - gsap.to(), gsap.from(), gsap.fromTo() -> Task

gsap.to(".block1", {
  x: -300,
  opacity: 1, 
  rotate: -180,
  duration: 1,
  ease: 'back.inOut'
});

gsap.from(".block2", {
  y: -300,
  opacity: 0, 
  rotate: 270,
  duration: 1,
  ease: 'circ.out'
});

gsap.fromTo(".block3", 
  {
    x: 0,
    y: 0,
    opacity: 1, 
    rotate: 0,
  },
  {
    x: 300,
    y: -200,
    // opacity: 0, 
    rotate: 120,
    duration: 3,
    ease: 'elastic.out',
  }
);