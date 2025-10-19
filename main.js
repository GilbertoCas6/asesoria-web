// ======== EFECTO DE SCROLL EN HEADER ========
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 20);
});

// ======== ANIMACIÓN SUAVE DE SECCIONES ========
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeInUp 1s ease-out forwards";
                observer.unobserve(entry.target); // evita re-animar al hacer scroll
            }
        });
    }, {
        threshold: 0.2 // activa la animación cuando el 20% del elemento es visible
    });

    sections.forEach(sec => {
        sec.style.opacity = 0;
        observer.observe(sec);
    });
});
