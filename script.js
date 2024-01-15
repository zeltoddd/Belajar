document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', function () {
        parallaxElements.forEach(function (element) {
            const speed = element.getAttribute('data-speed');
            const yPos = -window.scrollY * speed;
            element.style.transform = 'translateY(' + yPos + 'px)';
        
        });
    });

    const navIcons = document.querySelectorAll('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4');

    navIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            icon.classList.toggle('open');
        });
    });
})