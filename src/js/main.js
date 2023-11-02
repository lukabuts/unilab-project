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

let count = 0;

function generateArticles(){
    articleSpace.innerHTML = `
    <div class="article">
                    <h3 class="uppercase">
                        ${newsInfo[count][0].title}
                    </h3>
                    <h4>${newsInfo[count][0].subtitle}</h4>
                    <p>${newsInfo[count][0].description}</p>
                    <div class="time">
                        <img src="images/time.svg" alt="time">
                        <p>2 min ago</p>
                    </div>
                </div>
                <div class="article">
                    <h3 class="uppercase">${newsInfo[count][1].title}</h3>
                    <h4>${newsInfo[count][1].subtitle}</h4>
                    <p class="description">${newsInfo[count][1].description}</p>
                    <div class="time">
                        <img src="images/time.svg" alt="time">
                        <span>2 min ago</span>
                    </div>
                </div>
    `
}

generateArticles();

nextNewsBtn.addEventListener('click', () => {
    if(count === newsInfo.length - 2) {
        nextNewsBtn.disabled = true;
    };
    count++;
    generateArticles();
    previousNewsBtn.disabled = false;
  });
  


previousNewsBtn.addEventListener('click', ()=>{
    if(count === 1) {
        previousNewsBtn.disabled = true;
    };
    count--;
    generateArticles();
    nextNewsBtn.disabled = false;
})



/* Appearing User info after clicking user img */
const userImg  = document.getElementById('user-img');
const userInfo = document.getElementById('user-info');

userImg.addEventListener('click', () => {
    userInfo.classList.toggle('active')
})