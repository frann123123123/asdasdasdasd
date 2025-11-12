// Read More functionality with toggle
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const moreText = button.nextElementSibling;
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'block';
            button.textContent = 'Hide Details';
        } else {
            moreText.style.display = 'none';
            button.textContent = 'More Details';
        }
    });
});

// Fade-in on scroll with Intersection Observer
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll for links
document.querySelector('.scroll-down').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

// Example: Add 3D rotation to modes on hover (advanced interaction)
document.querySelectorAll('.mode').forEach(mode => {
    mode.addEventListener('mouseenter', () => {
        mode.style.transform = 'rotateX(10deg) rotateY(10deg)';
        mode.style.transition = 'transform 0.3s ease';
    });
    mode.addEventListener('mouseleave', () => {
        mode.style.transform = 'rotateX(0) rotateY(0)';
    });
});

// === CONTROL DEL MENÚ LATERAL ===
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const body = document.body;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Cerrar menú al hacer clic en overlay
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        sideMenu.classList.remove('open');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    });
});