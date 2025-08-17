const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav-links');

document.querySelector('.burger').addEventListener('click', () => {
    nav.classList.toggle('open');
    // Toggle between fa-bars and fa-times
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
});


// Back to the top
let backtToTopValue = () => {
    let backToTopBtn = document.querySelector(".backToTop");
    let pos = window.scrollY || document.documentElement.scrollTop;

    if (pos > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

window.onscroll = backtToTopValue;
window.onload = backtToTopValue;


