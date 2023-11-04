const burgerBtn = document.getElementById('burger-btn');
const mobileNavbar = document.getElementById('mobile-navbar');
const closer = document.getElementById('closer');
const exitBtn = document.getElementById('exitBtn');

/* Open function */
burgerBtn.addEventListener('click', function(){
    mobileNavbar.classList.add("active");
})

/* Close function triggers */
exitBtn.addEventListener('click', exitNavbar);
window.addEventListener('resize', () => {
    if(window.innerWidth >= 465) exitNavbar();
})
window.addEventListener('click', (e) => {
    if(e.clientX > mobileNavbar.clientWidth) exitNavbar();
})

 /* Exiting mobile-nav menu */
 function exitNavbar(){
    mobileNavbar.classList.remove("active");
}