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
        
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function() {
        // current scroll position
        const currentScrollPos = window.pageYOffset;

         if (prevScrollPos > currentScrollPos) {
         // user has scrolled up
        document.querySelector('.navbar').classList.add('show');
            } else {
            // user has scrolled down
            document.querySelector('.navbar').classList.remove('show');
        }

        // update previous scroll position
        prevScrollPos = currentScrollPos;
        });
})