/* Appearing User info after clicking user img */
const userImg  = document.getElementById('user-img');
const userInfo = document.getElementById('user-info');

/* showUserInfo function trigger */
userImg.addEventListener('click', () => {
    if(!userInfo.classList.contains('active')){
        showUserInfo();
    } else{
        hideUserInfo();
    }
})

/* showUserInfo */
function showUserInfo(){
    userInfo.classList.add('active');  
}

/* hideUserInfo */
function hideUserInfo(){
    userInfo.classList.remove('active');
}

/* Appearing box shadow to header element */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if(window.scrollY === 0){
        header.classList.contains('active') && header.classList.remove('active');
    } else{
        !header.classList.contains('active') && header.classList.add('active');
    }
})