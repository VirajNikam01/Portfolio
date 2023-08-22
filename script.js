var crsr = document.querySelector("#curser");

document.addEventListener("mousemove", function(details){

    crsr.style.left = details.x+"px";
    crsr.style.top = details.y+"px";
})

var tl = gsap.timeline()

tl.from("#nav h3, #navbar ",{
    y:-50,
    delay:0.6,
    opacity: 0,
    stagger: 0.1
})

tl.from("#content h1",{
    scale:2,
    opacity:0,
    color:"black"
})
tl.from("#history p",{
    y: 50,
    opacity:0
})
tl.from("#history i",{
    opacity:0,
    y:-20,
    repeat:-1,
    yoyo:true
})
tl.from("#about",{
    scale:0,
    opacity:0,
    duration:0.5
})
tl.from("#work h3",{
    scale:0,
    opacity:0,
    duration:0.5
})
tl.from("#cards",{
    x:-100,
    opacity:0,
    duration:0.5
})
