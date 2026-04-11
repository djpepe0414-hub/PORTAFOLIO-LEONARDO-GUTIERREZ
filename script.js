// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ANIMACIÓN IMAGEN
const aboutImage = document.querySelector(".about-image img");

window.addEventListener("scroll", () => {
    if (!aboutImage) return;

    const top = aboutImage.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
        aboutImage.style.transform = "translateY(0)";
        aboutImage.style.opacity = "1";
    }
});

<script>
const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < trigger) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
</script>