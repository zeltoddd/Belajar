document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', function () {
        parallaxElements.forEach(function (element) {
            const speed = element.getAttribute('data-speed');
            const yPos = -window.scrollY * speed;
            element.style.transform = 'translateY(' + yPos + 'px)';
        });
    });
})