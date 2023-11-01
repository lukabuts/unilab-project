const burgerBtn = document.getElementById('burger-btn');


burgerBtn.addEventListener('click', function(){
    const footer = document.getElementById('footer');
    const header = document.getElementById('header')
    footer.classList.toggle("active");
    header.classList.toggle("active");
    console.log(header);
    console.log(footer);
})