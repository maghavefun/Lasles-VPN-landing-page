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
    burger.addEventListener('click', () => {
        menu.classList.add("header_nav_active");
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove("header_nav_active");
    });
}());