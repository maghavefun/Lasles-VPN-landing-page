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
(function () {
    const navLinkAbout = document.querySelector('.nav-item-link');
    const navLinkFeatures = document.querySelector('.Features');
    const navLinkPricing = document.querySelector('.Pricing');
    const navLinkTestimonials = document.querySelector('.Testimonials');
    const navLinkHelp = document.querySelector('.Help');
    const menu = document.querySelector('.header_nav');
    navLinkAbout.addEventListener('click', () => {
        menu.classList.remove("header_nav_active");

    });
    navLinkFeatures.addEventListener('click', () => {
        menu.classList.remove("header_nav-active");
    });
    
}());