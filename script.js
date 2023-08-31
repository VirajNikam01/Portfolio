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

   // var load = document.querySelector("#pageload");
   // window.addEventListener("load",function(){
   //    load.style.display = "none";
   // })
   


loco()


var crsr = document.querySelector("#curser");
document.addEventListener("mousemove", function(details){

    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})






var tl = gsap.timeline()

tl.from("#nav button",{
    opacity:0,
    x:10000,
    duration:0.8
 })
gsap.from("#nav h3",{
    opacity:0,
    x:-1000,
    // duration:0.8
 })
 tl.from("#page1 h1",{
    opacity:0,
    x:1000,
    // duration:0.8
 })
 tl.from("#page1 span",{
    opacity:0,
    // duration:0.5
 })
gsap.from("#page1 img",{
    opacity:0,
    x:-1000,
    duration:0.7
 })
 tl.from("#history",{
    opacity:0,
    y:100
    
 })
 tl.from("#history i",{
    opacity:0,
    y:-10,
    repeat:-1,
    yoyo:true
 })
 tl.from("#page2 p",{
    opacity:0,
    y:100,
    stagger:0.1
 })




