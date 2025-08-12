import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

// gsap.to(".block1", {
//   x: -300,
//   opacity: 1, 
//   rotate: -180,
//   duration: 1,
//   ease: 'back.inOut'
// });

// gsap.from(".block2", {
//   y: -300,
//   opacity: 0, 
//   rotate: 270,
//   duration: 1,
//   ease: 'circ.out'
// });

// gsap.fromTo(".block3", 
//   {
//     x: 0,
//     y: 0,
//     opacity: 1, 
//     rotate: 0,
//   },
//   {
//     x: 300,
//     y: -200,
//     // opacity: 0, 
//     rotate: 120,
//     duration: 3,
//     ease: 'elastic.out',
//     onComplete: () => console.log("Nice")
//   }
// );

//! - duration, delay, repeat, yoyo, ease -> Task

// gsap.to(".block3", 
//   {
//     x: 300,
//     y: -200, 
//     rotate: 180,
//     delay: 0.5,//* The delay before the animation starts (in seconds).
//     duration: 2, //*  Sets the animation execution time in seconds
//     repeat: -1, //* Specifies how many times the animation will be repeated (if -1 animation loop)
//     yoyo: true, //* If true, the animation is "played backwards" on each repeat
//     ease: 'elastic.in', //* Controls the acceleration/deceleration of the animation
//     repeatDelay: 0.5,
//     onComplete: () => console.log("Nice")
//   }
// );

//! - timeline() -> 

// const tl = gsap.timeline();

// tl.to('.block1', {x:-200, duration: 1, repeat: -1, yoyo: true, ease: 'circ.out',})
//   .to('.block2', {y:200, duration: 2, repeat: 2, yoyo: true, ease: 'elastic.out'});

// const tl = gsap.timeline({repeat: -1, yoyo: true});

// tl.to('.block1', {x: -100, duration: 1, ease: 'power4.in'})
//   .to('.block1', {x: 0, y: -150, duration: 1, ease: 'elastic.out'})
//   .from('.block2', {y: 200, opacity: 0, duration: 2, ease: 'elastic.out'}, "+=0.5");

//! - timeline() -> Task

// const tl = gsap.timeline({ paused: true, yoyo: true});

// tl.to('.block1', {duration: 1, x: -300, repeat: -1, ease: 'power3.in'})
//   .fromTo('.block2', {y: 200, opacity: 0, duration: 1, ease: 'power3.in'}, {x: 150, y: -200, rotate: 180, duration: 1.5, opacity: 1, ease: 'elastic.out'}, '+=0.5')
//   .from('.block3', {y: -250, duration:2, ease: 'elastic.inOut', opacity: 0});

// document.getElementById('play').addEventListener('click', () => {tl.play()});
// document.getElementById('pause').addEventListener('click', () => {tl.pause()});
// document.getElementById('reverse').addEventListener('click', () => {tl.reverse()});
// document.getElementById('restart').addEventListener('click', () => {tl.restart()});

//! - Stagger ->

// gsap.from(".item-list", {
//   y: 50,
//   opacity: 0,
//   duration: 0.5,
//   stagger: {
//     each: 0.1, //* item delay
//     from: "end", //* start from centre ("start", "end", [0, 1, 2...])
//     ease: 'power1.out' //* stagger smoothness
//   },
// });

// gsap.from('.item-list-grid', {
//   x:100,
//   opacity:0,
//   duration:0.6,
//   ease: "back.out(1.7)", //* elastic effect
//   stagger:{
//     grid: [3, 3],
//     from: "center",
//     axis: "x",
//     amount: 0.6, //* total stagger allocation time
//   }
// });

//! - Keyframes ->

// gsap.to('.block1', {
//   keyframes: [
//     {x: -100, duration: 0.3, ease: 'power1.out'}, //* 1st frame 
//     {y: -50, duration: 0.2, ease: 'power2.out'}, //* 2nd frame
//     {opacity: 0, duration: 0.2} //* frame 3
//   ]
// });

//! - Callbacks: onStart, onComplete, onUpdate ->

// gsap.to('.block1', {
//   y: -200,
//   // opacity: 0,
//   duration: 3,
//   rotateZ: 180,
//   rotateX: 180,
//   rotateY: 180,
//   ease: 'elastic',
//   // repeat: -1, 
//   onStart: () => {console.log("Animation start")},
//   onComplete: () => {console.log("Animation end")},
//   onUpdate: () => {console.log("Animation update")},
//   onRepeat: () => {console.log("Animation repeat")}
// });

//! - ScrollTrigger ->

gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo('.box1', {
//     rotate: 0,
//   },
//   {
//     rotate: 90,
//     scrollTrigger: {
//       trigger: ".box1",
//       start: "top center", //* The animation will start when the top of the .box is in the center of the screen.
//       end: "bottom top", //* The animation will end when the bottom .box leaves the screen. 
//       // end: "+=500" // Unpin via 500px scroll.
//       scrub: 1, //* The animation will scroll along with scrolling
//       markers: true, //*  Shows multicolored markers on the page
//       toggleClass: "active", //* Adds the 'active' class to the .box when it is active.
//       pin: true,
//       onEnter: () => console.log("The element has entered the screen!") //* is triggered when the trigger enters the field of view.
//     }
//   }
// );

// gsap.to('.box1', {
//   rotateY: 0,
//   rotateZ: 90,
//   rotateX: 180,
//   opacity: 0,
//   scale: 1.2,
//   ease: 'elastic.inOut',

//   scrollTrigger: {
//     trigger:'.box2',
//     start: 'top center',
//     end: 'bottom top',
//     scrub:true,
//     markers: true,
//   },
// }
// );

//todo - Callbacks:
//* onEnter: Triggers when the trigger enters the field of view.
//* onLeave: Triggers when the trigger leaves the field of view.
//* onToggle: triggered when the ScrollTrigger status changes from "active" to "inactive" and vice versa.
//* onEnterBack, onLeaveBack: triggers when scrolling back.

const container = document.querySelector('.horizontal-sections-container');
const totalWidth = container.scrollWidth - window.innerWidth;
const horizontalScrollTween = gsap.to(container, {
  x: -totalWidth,
  ease: 'none',
});

ScrollTrigger.create({
  trigger: ".horizontal-sections-wrapper",
  pin: true,
  start: 'top top',
  end: "+=" + totalWidth,
  scrub: 1,
  animation: horizontalScrollTween,
  markers: true,
});

gsap.utils.toArray(".section").forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        containerAnimation: horizontalScrollTween,
        start: "left center",
        end: "right center",
        onEnter: () => gsap.to(section, { opacity: 1, toggleClass: "bg-red-700", duration: 0.3, ease: "back.out(1.7)" }),
        onLeave: () => gsap.to(section, { opacity: 0.5, duration: 0.3 }),
        onEnterBack: () => gsap.to(section, { opacity: 1, toggleClass: "bg-red-700", duration: 0.3, ease: "back.out(1.7)" }),
        onLeaveBack: () => gsap.to(section, { opacity: 0.5, duration: 0.3 }),
        markers: true
    });
});