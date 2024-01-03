let menu = document.querySelector(".menu")
let menuContent = document.querySelector(".menu-content")
let menuBtn = document.querySelector(".menu-btn")
let cards = document.querySelectorAll(".card")
let blur = document.querySelector(".blur")
let gray = document.querySelector(".gray")
let remove = document.querySelector(".remove")
let invert = document.querySelector(".invert")
let clear = document.querySelector(".clear")



menuBtn.addEventListener("click", ()=>{
    if(menuContent.style.opacity === "1"){
    menuContent.style.opacity = "0"
    menuContent.style.height = "0vh"
    menuBtn.innerHTML = "Menu"
    menuBtn.style.backgroundColor = "white"
    menuBtn.style.color = "black"
    }

    else{
    menuContent.style.opacity = "1"
    menuContent.style.height = "35vh"
    menuBtn.innerHTML = "Close"
    menuBtn.style.backgroundColor = "black";
    menuBtn.style.color = "white";
    }
})


blur.addEventListener("click", ()=>{
  gsap.to(".card", {
        opacity:1,
        filter:"blur(10px)",
        duration:0.6,
        stagger:0.1,
    })
})

gray.addEventListener("click", ()=>{
  gsap.to(".card", {
        opacity:1,
        filter: "grayscale(3)",
        duration:0.6,
        stagger:0.1,
    })
})

invert.addEventListener("click", ()=>{
  gsap.to(".card", {
        opacity:1,
        filter: "invert(1)",
        duration:0.6,
        stagger:0.1,
    })
})

remove.addEventListener("click", ()=>{
    gsap.to(".card", {
        opacity:0,
        duration:0.6,
        stagger:0.1,
    })
})

clear.addEventListener("click", ()=>{
  gsap.to(".card", {
        opacity:1,
        filter: "none",
        duration:0.6,
        stagger:0.1,
    })
})

