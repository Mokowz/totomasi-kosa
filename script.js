// Parallax Method

const parallax = document.getElementById("home")

window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;

    parallax.style.backgroundPositionY = offset * 0.5 + "px";
})

// Autoscroll
window.addEventListener("load", () => {
    setTimeout(function(){window.location.hash = '#about';},3000);
});

// Make the nav be seen
const menu = document.getElementById("menu");
const list = document.getElementById("list")
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

menu.addEventListener("click", () => {
    list.classList.toggle("active");
    nav.classList.toggle("show")
})

logo.addEventListener("click", () => {
    list.classList.remove("active");
    nav.classList.remove("show")

})

list.addEventListener("click", () => {
    list.classList.remove("active");
    nav.classList.remove("show")

})
