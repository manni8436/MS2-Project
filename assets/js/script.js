// makes cards flip
const cards = document.getElementsByClassName("card");

function flipCard() {
   for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("card-front")) {
            cards[i].classList.add("card-back");
            cards[i].classList.remove("card-front");
        } else {
            cards[i].classList.add("card-front");
            cards[i].classList.remove("card-back");
        }
    } 
}

// make cards random
const colorArray = [
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		'#FF99E6'
];

colorArray.sort(() => 0.5 - Math.random());

//add random colors to cards
for (let i = 0; i < colorArray.length; i++){
    cards[i].style.backgroundColor = colorArray[i];
}