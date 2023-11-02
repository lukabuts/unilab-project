const articleSpace = document.getElementById('article-space');
const nextNewsBtn = document.getElementById('next-news-btn');
const previousNewsBtn = document.getElementById('previous-news-btn');

const newsInfo = [
    [{
        title: "travel",
        subtitle: "Subtitle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.",
    },
    {
        title: "Technology",
        subtitle: "Subtitle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.",
    }],

    [{
        title: "Coding",
        subtitle: "Subtitle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.",
    },
    {
        title: "Science",
        subtitle: "Subtitle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.",
    }],

    [{
        title: "Playing",
        subtitle: "Subtitle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.",
    },
    {
        title: "Reading",
        subtitle: "Subtitle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.",
    }],
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