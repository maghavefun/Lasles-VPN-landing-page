(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header_background");
        } else {
            header.classList.remove("header_background");
        }
    }
}());

(function () {
    const burger = document.querySelector('.burger_menu');
    const menu = document.querySelector('.header_nav');
    const menuClose = document.querySelector('.close_header_nav');
    const menuLinks = document.querySelectorAll('.nav-item-link')
    burger.addEventListener('click', () => {
        menu.classList.add("header_nav_active");
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove("header_nav_active");
    });
    
    if (window.innerWidth < 979) {
        for (let i = 0; i < menuLinks.length; i = i + 1) {
            menuLinks[i].addEventListener('click' , () => {
                menu.classList.remove("header_nav_active");
            }
            );
        }
    }
}());
(function () {
    const navLink = document.querySelectorAll('.nav-item-link');
    const menu = document.querySelector('.header_nav');
    navLink.addEventListener('click', () => {
        menu.classList.remove("header_nav_active");
    });
}());