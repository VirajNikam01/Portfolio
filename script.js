function loco() {
   gsap.registerPlugin(ScrollTrigger);

   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
   
   const locoScroll = new LocomotiveScroll({
     el: document.querySelector("#main"),
     smooth: true
   });
   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
   locoScroll.on("#main", ScrollTrigger.update);
   
   // tell ScrollTrigger to use these proxy methods for the ".smooth-#main" element since Locomotive Scroll is hijacking things
   ScrollTrigger.scrollerProxy("#main", {
     scrollTop(value) {
       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
     getBoundingClientRect() {
       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
     },
     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
   });
   
   
   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   
   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
   ScrollTrigger.refresh();
   
}



var crsr = document.querySelector("#curser");
document.addEventListener("mousemove", function(details){

    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})


var navbtn = document.querySelector("nav label i")
var nav = document.querySelector("nav")

var flag =0;

navbtn.addEventListener("click", ()=>{
    if(flag == 0){
      nav.style.backgroundColor= "black"
      nav.style.transition= "all 0.9s";
      flag= 1
    }
    else{
      nav.style.backgroundColor = "transparent"
      nav.style.transition= "all 0.9s";
      flag = 0
    }
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++ logo disable on scroll down ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var logo = document.querySelector("label span")
gsap.to(logo,{
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    target:"nav",
    start: "top -5%",
    end:"top 0%",
    scrub:true
  }
})








 //+++++++++++++++++++++++++++++++++++++++++ For Color Changing Background ++++++++++++++++++++++++++++++++++++++++++



//  const throttleFunction = (func, delay) => {
//   let prev = 0;
//   return (...args) => {
//     let now = new Date().getTime();

//     if (now - prev > delay) {
//       prev = now;
//       return func(...args);
//     }
//   };
// };
// document.querySelector("h1").addEventListener(
//   "mousemove",
//   throttleFunction((dets) => {
//     const div = document.createElement("div");
//     div.classList.add("imagediv");
//     div.style.left = dets.clientX + "px";
//     div.style.top = dets.clientY + "px";

//     const img = document.createElement("img");
//     img.setAttribute(
//       "src",
//       "./img/walpaper.png"
//     );

//     div.appendChild(img)

//     document.body.appendChild(div);

   
//     gsap.to(".imagediv img",{
//         scale:"1",
//         // duration:0.6
        
//     })
//     gsap.to(".imagediv img",{
//         scale:"0%",
//         delay:.6,
//         ease:Power2
//     })

//     setTimeout(() => {
//       div.remove();
//     }, 1500);
//   }, 500)
// );


