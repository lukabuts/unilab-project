/* Appearing User info after clicking user img */
const userImg  = document.getElementById('user-img');
const userInfo = document.getElementById('user-info');
const closeUserInfoBtn = document.getElementById('close-user-info-btn');
const body = document.querySelector('body')

/* show User Info  */
userImg.addEventListener('click', () => {
    userInfo.showModal();
    body.style.overflow = 'hidden';
})

/* Hide user info */
closeUserInfoBtn.addEventListener('click', () => {
    userInfo.close();
    body.style.overflow = 'scroll';
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
        body.style.overflow = 'scroll';
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

/* Lazy loading img */
const lazyLoadImgs = document.querySelectorAll('.lazy-img');
lazyLoadImgs.forEach(img => {
  if(img.complete){
    loaded(img);
  } else{
    img.addEventListener("load", loaded(img))
  }
})

function loaded(img){
  img.classList.add('loaded')
}