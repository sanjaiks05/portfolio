// ===============================
// Sticky Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(11,17,32,0.6)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "transparent";

    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');

        if (target.startsWith("#")) {
            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

});

// ===============================
// Typing Animation
// ===============================


// =============================
// PRELOADER
// =============================

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});