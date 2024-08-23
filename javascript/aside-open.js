// Add scroll event listener to change navbar background color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// Toggle the mobile menu
document.getElementById('menuToggle').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    const bars = document.querySelectorAll('.menu-toggle .bar');
    bars[0].classList.toggle('bar1');
    bars[1].classList.toggle('bar2');
    bars[2].classList.toggle('bar3');
});
// Toggle the mobile menu
document.getElementById('menuToggle').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    this.classList.toggle('active');
});