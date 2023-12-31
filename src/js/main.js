/* Generiting More News in More News section */
const articleSpace = document.getElementById('article-space');
const nextNewsBtn = document.getElementById('next-news-btn');
const previousNewsBtn = document.getElementById('previous-news-btn');

const newsInfo = [
    [
        {
          title: "Travel",
          subtitle: "Explore the World",
          description: "Embark on exciting adventures to far-off lands, experience new cultures, and create unforgettable memories.",
        },
        {
          title: "Food",
          subtitle: "Culinary Delights",
          description: "Savor delicious dishes from around the world, from street food to gourmet cuisine, and become a culinary connoisseur.",
        },
      ],
      [
        {
          title: "Technology",
          subtitle: "Innovative Tech Trends",
          description: "Stay up-to-date with the latest technological advancements and explore the future of gadgets and software.",
        },
        {
          title: "Science",
          subtitle: "Discover the Universe",
          description: "Dive into the mysteries of the cosmos, learn about groundbreaking scientific discoveries, and unravel the secrets of our world.",
        },
      ],
      [
        {
          title: "Coding",
          subtitle: "Master Programming",
          description: "Unlock the power of coding, build amazing software, and turn your ideas into functional applications.",
        },
        {
          title: "Art & Creativity",
          subtitle: "Express Yourself",
          description: "Nurture your creative side, explore various art forms, and let your imagination run wild with colors and shapes.",
        },
      ],
]

let newsCount = 0;

function generateArticles(){
    articleSpace.innerHTML = `
    <div class="article">
                    <h3 class="uppercase">
                        ${newsInfo[newsCount][0].title}
                    </h3>
                    <h4>${newsInfo[newsCount][0].subtitle}</h4>
                    <p>${newsInfo[newsCount][0].description}</p>
                    <div class="time">
                        <img src="images/time.svg" alt="time:">
                        <p>2 min ago</p>
                    </div>
                </div>
                <div class="article">
                    <h3 class="uppercase">${newsInfo[newsCount][1].title}</h3>
                    <h4>${newsInfo[newsCount][1].subtitle}</h4>
                    <p class="description">${newsInfo[newsCount][1].description}</p>
                    <div class="time">
                        <img src="images/time.svg" alt="time:">
                        <span>2 min ago</span>
                    </div>
                </div>
    `
}

generateArticles();

/* Show next/previous news */
nextNewsBtn.addEventListener('click', () => {
    if(newsCount === newsInfo.length - 2) {
        nextNewsBtn.disabled = true;
    };
    newsCount++;
    generateArticles();
    previousNewsBtn.disabled = false;
  });
  
previousNewsBtn.addEventListener('click', ()=>{
    if(newsCount === 1) {
        previousNewsBtn.disabled = true;
    };
    newsCount--;
    generateArticles();
    nextNewsBtn.disabled = false;
})

/* Generiting Trending items in Trending section */
const trendingSpace = document.getElementById('trending-space');

const trendingInfo = [
  {
    img: "images/image.webp",
    smallImg: "images/image-small.png",
    title: "Exciting Adventure Awaits",
    desc: "Discover new places and experiences around the world.",
    time: "Just now"
  },
  {
    img: "images/image-2.webp",
    smallImg: "images/image-2-small.png",
    title: "Tech Innovation Breakthrough",
    desc: "Revolutionary technologies that will shape the future.",
    time: "1h ago"
  },
  {
    img: "images/image-3.webp",
    smallImg: "images/image-3-small.png",
    title: "Culinary Delights Unveiled",
    desc: "Explore the art of cooking from top chefs worldwide.",
    time: "3h ago"
  },
  {
    img: "images/image.webp",
    smallImg: "images/image-small.png",
    title: "Breathtaking Natural Wonders",
    desc: "Experience the beauty of the world's most stunning landscapes.",
    time: "2m ago"
  },
  {
    img: "images/image-2.webp",
    smallImg: "images/image-2-small.png",
    title: "Health and Wellness Insights",
    desc: "Tips and tricks for a healthier and happier life.",
    time: "1h ago"
  },
  {
    img: "images/image-3.webp",
    smallImg: "images/image-3-small.png",
    title: "Artistic Creations Showcase",
    desc: "Discover the works of talented artists and creators.",
    time: "3h ago"
  },
];

function generateTrendingPlaces(){
  trendingSpace.innerHTML = trendingInfo.map(info => {
   return `
  <div class="item" id="item">
      <div class="img-div" style="background: url(${info.smallImg}) center/cover no-repeat;">
      <img src="${info.img}" class="lazy-img" loading="lazy" alt="${info.desc}">
      </div>
      <div class="info">
          <h3>${info.title}</h3>
          <p>${info.desc}</p>
          <div class="time">
              <img src="images/time.svg" alt="time:">
              <span>${info.time}</span>
          </div>
      </div>
  </div>
`
  }).join("")
}

generateTrendingPlaces();

/* add scroll function to trendingSpace div */
const trendingBtns = document.querySelectorAll('.trending-btns');
const nextTrendingBtn = document.getElementById('next');
const previousTrendingBtn = document.getElementById('previous');
const trendingItem = document.getElementById('item');

trendingBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    /* Getting current trendingItem width */
    const trendingItemWidth = trendingItem.clientWidth;

    /* Adding smooth scroll better UX */
    !trendingSpace.classList.contains('smooth') && trendingSpace.classList.add('smooth');

    if(btn.id === 'next'){
      trendingSpace.scrollLeft += trendingItemWidth  + 40; /* Gap is 40px */
    } else if(btn.id === 'previous') {
      trendingSpace.scrollLeft -= trendingItemWidth  + 40; /* Gap is 40px */
    }
    
    disableNextTrendingBtn();
    disablePreviousTrendingBtn();
  })
})

trendingSpace.addEventListener('wheel', (e) => {
  e.preventDefault();
  /* Removing smooth scroll for faster scrolling */
  trendingSpace.classList.contains('smooth') && trendingSpace.classList.remove('smooth');
  trendingSpace.scrollLeft += e.deltaY;
  disableNextTrendingBtn();
  disablePreviousTrendingBtn();
})

/* for mobile users */
trendingSpace.addEventListener('scroll', () => {
  disableNextTrendingBtn();
  disablePreviousTrendingBtn();
})

/* disable Trending Btns */
function disableNextTrendingBtn(){
  /* Getting current trendingItem width */
  const trendingItemWidth = trendingItem.clientWidth;
  const trendingSpaceWidth = trendingSpace.clientWidth;
  if(
    trendingInfo.length * trendingItemWidth + (trendingInfo.length - 1) * 40 - 2 <= Math.round(trendingSpace.scrollLeft + trendingSpaceWidth)
  ){
    nextTrendingBtn.disabled = true;
  } else{
    nextTrendingBtn.disabled = false;
  }
}

function disablePreviousTrendingBtn() {
  if(trendingSpace.scrollLeft === 0){
    previousTrendingBtn.disabled = true;
  } else{
    previousTrendingBtn.disabled = false;
  }
}



