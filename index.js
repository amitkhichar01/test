let xmarkIcon = document.querySelector(".xmark-icon");
let barIcon = document.querySelector(".bar-icon i");
let navLink = document.querySelector(".nav-link");

window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
        navLink.style.display = "flex";
    }
});

xmarkIcon.addEventListener("click", () => {
    navLink.style.display = "none";
});

barIcon.addEventListener("click", () => {
    navLink.style.display = "flex";
});
