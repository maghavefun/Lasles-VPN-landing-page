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