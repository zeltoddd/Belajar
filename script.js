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

         if (prevScrollPos < currentScrollPos) {
         // user has scrolled up
        document.querySelector('.navbar').classList.add('show');
            } else {
            // user has scrolled down
            document.querySelector('.navbar').classList.remove('show');
        }

        // update previous scroll position
        prevScrollPos = currentScrollPos;
        });
        document.getElementById("toggle-navbar").addEventListener("click", () => {
            const element = document.getElementById("nav-items");
            if (element.classList.contains("block")) {
              element.classList.remove("block");
              element.classList.add("hidden");
            } else {
              element.classList.remove("hidden");
              element.classList.add("block");
            }
    
        });
        function emailSend(){
            var name=document.getElementById("name").value;
            var email=document.getElementById("email").value;
            var message=document.getElementById("message").value;
            
            console.log(name);
            console.log(email);
            console.log(message);


        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ibawa1607@gmail.com",
            Password : "2742F74AE2277B57360F3FD71FECAB9D77B8",
            To : "zydrobiiith@student.uns.ac.id",
            From : "ibawa1607@gmail.com",
            Subject : "Jalinan Patner Kerja",
            Body : message
        }).then(
          message => alert(message)
        );
        }
});
