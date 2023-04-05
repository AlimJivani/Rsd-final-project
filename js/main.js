let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
searchBtn.addEventListener("click", function () {

    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    closeBtn.classList.add("active");
    menuToggle.classList.add("hide");
    nav.classList.remove("open")
})
closeBtn.addEventListener("click", function () {

    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    closeBtn.classList.remove("active");
    menuToggle.classList.remove("hide");
})
menuToggle.addEventListener("click", function () {

    nav.classList.toggle('open');
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
})

let nav = document.querySelector("nav");
let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");
