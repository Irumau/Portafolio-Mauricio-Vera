const section = document.querySelectorAll(".btn-link");
const reBack = document.querySelector("#reback");
const tl = gsap.timeline({ repeat: 0, yoyo: true });
const hamburgerButton = document.getElementById("menuHamburger");
const mainMenu = document.getElementById("mainMenu");

tl.from("#imgIm", {
    start: true,
    duration: 2,
    x: "50vw",
    ease: "bounce",
});

section.forEach((element, index) => {
    element.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: "#section" + (index + 1), offsetY: 75 },
        });
    });
});

reBack.addEventListener("click", () => {
    gsap.to(window, { duration: 0.75, scrollTo: { y: "#reback", offsetY: 0 } });
});

hamburgerButton.addEventListener("click", () => {
    mainMenu.classList.toggle("nav-show");
    tl.from("#mainMenu", {
        duration: 0.5,
        x: "20vw",
        ease: "ease",
    });
});


useEffect(()=>{
    AOS.init({
        disable: window.innerWidth < 768
    })
})
