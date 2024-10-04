function locomotive(){
        gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotive()
function timer(){
        var tl = gsap.timeline()
        tl.from(".load h1,.load h2,.load h3",{
        y:120,
        delay:0.2,
        duration:0.7,
        stagger:0.2,
    })
    .to(".load",{
        opacity:0,
        delay:1,
        stagger:-0.2
    })
    .to(".home",{
        y:"-100%",
        duration: 1,
        ease: "power4.out"
    })
    .from(".page1-part h1",{
        y:120,
        opacity:0,  
        stagger:0.2
    })
    .from(".nav",{
        y:150,
        opacity:0,
    })
    var loadh1 = document.querySelector(".load h1")
    var flag = 0
    var int = setInterval(function(){
        if(flag < 100){
            flag++
            loadh1.innerHTML = flag
        }
    },20)
    setTimeout(function(){
        clearInterval(int)
    },3000)

}
timer()
Shery.mouseFollower()
function page1animation(){
    var image = document.querySelector(".page1-part img")
    var text = document.querySelector(".text")
    var text2 = document.querySelector(".text2")

    text.addEventListener("mousemove",function(dets){
        gsap.to(image,{
            opacity:1,
            left:dets.x - 555,
            top:dets.y - 400
        })
    })
    text2.addEventListener("mousemove",function(dets){
        gsap.to(image,{
            opacity:1,
            left:dets.x - 555,
            top:dets.y - 400
        })
    })
    text.addEventListener("mouseleave",function(){
        gsap.to(image,{
            opacity:0
        })
    })
    text2.addEventListener("mouseleave",function(){
        gsap.to(image,{
            opacity:0
        })
    })
}
page1animation()
function page2animation(){
    var page2part = document.querySelector(".page2-part")
page2part.addEventListener("mouseenter",function(){
    gsap.to(".mousefollower",{
        opacity : 0
    })
})
page2part.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
        opacity : 1
    })
    gsap.to(".play-btn",{
        left:"65%",
        top:"-12%"
    })
})
page2part.addEventListener("mousemove",function(dets){
    gsap.to(".play-btn",{
        left:dets.x - 555,
        top:dets.y - 200
    })
})
var page2image = document.querySelector(".page2-part img")
var page2video = document.querySelector(".page2-part video")
var playbtn = document.querySelector(".play-btn")
var play = 0
page2part.addEventListener("click",function(){
    if(play == 0){
        gsap.to(".page2-part img",{
            opacity:0
        })
        gsap.to(page2video,{
            opacity:1,
        })
        gsap.to(".play-btn",{
            scale:0.7
        })
        playbtn.innerHTML = '<i class="ri-pause-mini-line"></i>'
        page2video.play()
        play = 1
    }
    else{
        gsap.to(".page2-part img",{
            opacity:1
        })
        gsap.to(page2video,{
            opacity:0
        })
        gsap.to(".play-btn",{
            scale:1
        })
        playbtn.innerHTML = '<i class="ri-play-fill"></i>'
        page2video.pause()
        play = 0
    }
})
}
page2animation()
Shery.imageEffect(".part1-image",{
    style: 6,
    // debug: true,
    gooey: true,
    config:{
        "noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7970588374723372},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.29,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}
    },
})
function page5Animation() {
    gsap.to(".page5-mark", {
        x: -1000,
        scrollTrigger: {
            trigger: ".page5",
            scroller: ".main",
            start: "top 150%",
            end: "top -50%",
            scrub: 2,
            // markers:true
        }
    })

    gsap.from(".page5-marking", {
        x: -1000,
        scrollTrigger: {
            trigger: ".page5",
            scroller: ".main",
            start: "top 150%",
            end: "top -50%",
            scrub: 2,
            // markers:true
        }
    })

}
page5Animation()

function page6Animation(){
    var footText = document.querySelectorAll(".page6 .let")
    footText.forEach(function(elem){
        var elemText  = elem.textContent
        var splited = elemText.split("")
        var clutter = ""
        splited.forEach(function(e){
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter
    })


    var footerText = document.querySelector(".footer-text")

    footerText.addEventListener("mouseenter",function(){
        gsap.to(".page6 h1 span",{
            opacity:0,
            stagger:0.1,
            duration:0.5
        })
        gsap.to(".page6 h2 span",{
            opacity:1,
            delay:0.4,
            duration:0.5,
            stagger:0.1
        })
    })

    footerText.addEventListener("mouseleave",function(){
        gsap.to(".page6 h2 span",{
            opacity:0,
            stagger:0.05,
            duration:0.3
        })
        gsap.to(".page6 h1 span",{
            opacity:1,
            delay:0.4,
            duration:0.3,
            stagger:0.05
        })
    })
}
page6Animation()
var icon = document.querySelector(".nav-part1 img")
var menu = document.querySelector(".menu-bar")
var close = document.querySelector(".menu-bar1 svg")
icon.addEventListener("click",function(){
    menu.style.top = 0
})
close.addEventListener("click",function(){
    menu.style.top = "-50%"
})