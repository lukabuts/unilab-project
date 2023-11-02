const container = document.querySelector('.container');
const footer = document.getElementById('footer')

/* Fetching data function */
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            showError();
            throw new Error("Something went wrong");
        }
        return response.json();
    })
    .then(data => {      
        generateCard(data);
    })
    .catch(error => {
        showError();
        console.error(`Fetch error: ${error}`);
    });
}

/* Calling fetchData */
fetchData();

/* Generating cards function */
function generateCard(data) {
    /* Removes fixedbottom class if everithing goes well */
    if(footer.classList.contains('fixedBottom')){
        footer.classList.remove('fixedBottom')
    }
    container.innerHTML = data.map(user => {
        return `
        <div class="card">
            <div class="user-picture">${user.userId}</div>
            <h3 class="title">${user.title}</h3>
            <p class="description">${user.body}</p>
            <p class="special-id">Special Id: ${user.id}</p>
        </div>
        `;
    }).join('');
}

/* Showing error function */
function showError() {
    /* Fixes footer to the bottom if error msg appears */
    footer.classList.add('fixedBottom');
    container.innerHTML = `
    <div class="error">
        <img src="images/error.png" alt="error" width="200">
        <h1>Something went wrong</h1>
        <button onclick="reload()">Refresh Website</button>
    </div>
    `;
}

/* Reload function */
function reload() {
    location.reload();
}