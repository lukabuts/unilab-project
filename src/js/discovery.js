/* /* Lazy Loading */
const lazyLoadImgs = document.querySelectorAll('.lazy-load-img')

console.log(lazyLoadImgs);

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

