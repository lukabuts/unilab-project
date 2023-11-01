const burgerBtn = document.getElementById('burger-btn');
const mobileNavbar = document.getElementById('mobile-navbar');
const closer = document.getElementById('closer');
const exitBtn = document.getElementById('exitBtn');

burgerBtn.addEventListener('click', function(){
    mobileNavbar.classList.add("active");
    closer.classList.add("active");
})

/* function triggers */
closer.addEventListener('click', exitNavbar);
exitBtn.addEventListener('click', exitNavbar);
window.addEventListener('resize', () => {
    if(window.innerWidth >= 465) exitNavbar();
})
 /* Exiting mobile-nav menu */
 function exitNavbar(){
    mobileNavbar.classList.remove("active");
    closer.classList.remove("active");
}