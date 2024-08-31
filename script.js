// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});