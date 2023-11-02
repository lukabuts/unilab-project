/* Appearing User info after clicking user img */
const userImg  = document.getElementById('user-img');
const userInfo = document.getElementById('user-info');

userImg.addEventListener('click', () => {
    userInfo.classList.toggle('active')
})