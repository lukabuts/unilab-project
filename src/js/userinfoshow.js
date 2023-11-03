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