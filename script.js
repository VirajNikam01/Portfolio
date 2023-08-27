function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

   var load = document.querySelector("#pageload");
   window.addEventListener("load",function(){
      load.style.display = "none";
   })
   


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
    y:1000,
    stagger:0.1
 })




