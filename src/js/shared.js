/* Appearing User info after clicking user img */
const userImg  = document.getElementById('user-img');
const userInfo = document.getElementById('user-info');
const closeUserInfoBtn = document.getElementById('close-user-info-btn');

/* show User Info  */
userImg.addEventListener('click', () => {
    userInfo.showModal();
})

/* Hide user info */
closeUserInfoBtn.addEventListener('click', () => {
    userInfo.close();
})

userInfo.addEventListener('click', (e) => {
    const userInfoDimensions = userInfo.getBoundingClientRect();
    if(
        e.clientX < userInfoDimensions.left || 
        e.clientX > userInfoDimensions.right || 
        e.clientY < userInfoDimensions.top ||
        e.clientY > userInfoDimensions.bottom 
    ){
        userInfo.close();
    }
})

/* Appearing box shadow to header element */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if(window.scrollY === 0){
        header.classList.contains('active') && header.classList.remove('active');
    } else{
        !header.classList.contains('active') && header.classList.add('active');
    }
})