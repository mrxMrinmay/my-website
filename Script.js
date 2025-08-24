// --- Loader Hiding Functionality ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-container');
    // Hide the loader after the page is fully loaded
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
});

// --- Fallback to ensure loader hides after 1.5 seconds ---
setTimeout(() => {
    const loader = document.getElementById('loader-container');
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
}, 1500); // 1500 milliseconds = 1.5 seconds

// --- Scrolling Animation Functionality ---
const sections = document.querySelectorAll('.dimension-section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    sections.forEach((section, index) => {
        const baseTranslateZ = scrollPosition * -0.5;
        const baseRotateX = scrollPosition * 0.05;

        const transformZ = baseTranslateZ + (index * -200);
        const rotateX = baseRotateX + (index * 5);
        
        section.style.transform = `translate3d(0, 0, ${transformZ}px) rotateX(${rotateX}deg)`;
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
