const menu = document.querySelector('.bar');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector(".overlay");


menu.addEventListener('click', function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle("is-active");
})

overlay.addEventListener('click', function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle("is-active");
})