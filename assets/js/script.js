// makes cards flip
const cards = document.getElementsByClassName("card");

function flipCard() {
    if (this.classList.contains("card-front")) {
        this.classList.add("card-back");
        this.classList.remove("card-front");
    } else {
        this.classList.add("card-front");
        this.classList.remove("card-back");
    }
}
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);
}

//add random colors to cards
const colorArray = [
        '#FF6633', '#FFB399', '#FF33FF', '#66991A', '#00B3E6', 
        '#FF33FF', '#3366E6', '#00B3E6', '#99FF99', '#99FF99',
        '#FFB399', '#FFFF99', '#3366E6', '#66991A', '#FF9A18', 
        '#FF6633', '#C2B280', '#FFFF99', '#C2B280', '#FF9A18',
        '#28921E', '#FFFC00', '#28921E', '#fffc00'
];

colorArray.sort(() => 0.5 - Math.random());

for (let i = 0; i < colorArray.length; i++) {
    cards[i].style.backgroundColor = colorArray[i];
}

//  level selector
const levelSelectors = document.getElementsByClassName("level-selector");

for (let i = 0; i < levelSelectors.length; i++) {
    levelSelectors[i].addEventListener("click", selectLevel);
}

const easyLevel = document.getElementById("easy-level-container");
const mediumLevel = document.getElementById("medium-level-container");
const hardLevel = document.getElementById("hard-level-container");

let easy = easyLevel.id;
let medium = mediumLevel.id;
let hard = hardLevel.id;

easy = easy.substring(0, easy.length - 16);
medium = medium.substring(0, medium.length - 16);
hard = hard.substring(0, hard.length - 16);

function selectLevel() {
    var selectedLevel = this.id;

    if (selectedLevel == easy) {
        easyLevel.classList.remove("hide");
        mediumLevel.classList.add("hide");
        hardLevel.classList.add("hide");
    } else if (selectedLevel == medium) {
        easyLevel.classList.add("hide");
        mediumLevel.classList.remove("hide");
        hardLevel.classList.add("hide");
    } else if (selectedLevel == hard) {
        easyLevel.classList.add("hide");
        mediumLevel.classList.add("hide");
        hardLevel.classList.remove("hide");
    }
}




