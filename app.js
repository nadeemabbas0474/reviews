const reviews = [
    {
        id: 1,
        name: " Nadeem Abbas",
        job: "COO Of Company",
        img: "nadeem.JPG",
        text: "Hii !!! I am Nadeem Abbas been as a COO and The UX Designer, Exercitationem eaque, laborum ratione illo deleniti et, sequi, dolorum aperiam adipisci quibusdam dolores aut voluptatibus magnam vitae amet."
    },
    {
        id: 1,
        name: "Shahzad",
        job: "freelancer",
        img: "shzd.JPG",
        text: "quasi nihil consequatur ad. Fugiat, voluptatum. Exercitationem eaque, laborum ratione illo deleniti et, sequi, dolorum aperiam adipisci quibusdam dolores aut voluptatibus magnam vitae amet. Mollitia voluptas"
    },
    {
        id: 2,
        name: "Imran",
        job: "web designer",
        img: "imo.jpg",
        text: " illum ab nihil nobis voluptates voluptate, dolores, fugit qui perferendis. Animi amet a soluta qui et cumque debitis molestias impedit reprehenderit, quae ut obcaecati suscipit dolor quidem ipsum rem harum maxime"
    }, 
    {
        id: 3,
        name: "Nasir",
        job: "web developer",
        img: "nasir.JPG",
        text: " amet animi natus voluptate repudiandae excepturi veniam deleniti corporis, molestiae dolorum earum, debitis illum! Placeat assumenda aspernatur vel hic voluptas? Necessitatibus facere voluptatum"
    },
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
})