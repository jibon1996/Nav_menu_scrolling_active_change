// When You (Scrolling) Window  Nav (Menu Item) Will Be (Active) by JS (WAY-1)

const navLinks = document.querySelectorAll(".nav_link");
const sections = document.querySelectorAll("section");

let currentSection = "home";

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if(window.scrollY >= (section.offsetTop - section.clientHeight / 2 )){
            currentSection = section.id;
        }
    })
    navLinks.forEach(link => {
        if(link.href.includes(currentSection)){
            document.querySelector(".active").classList.remove("active");
            link.classList.add("active");
        }
    })
})

// When You (Scrolling) Window  Nav (Menu Item) Will Be (Active) by JS (WAY-2)

// let mainNavLinks = document.querySelectorAll("nav ul li a");
// let mainSections = document.querySelectorAll("section");

// window.addEventListener("scroll", event => {
//   let fromTop = window.scrollY - 50;

//   mainNavLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop <= fromTop + 55 &&
//       section.offsetTop + section.offsetHeight > fromTop + 55
//     ) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// });

