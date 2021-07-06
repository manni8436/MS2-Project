// makes cards flip
const cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard(cards[i]));
}

function flipCard(card) {
    if (card.classList.contains("card-front")) {
        card.classList.add("card-back");
        card.classList.remove("card-front");
    } else if (card.classList.contains("card-back")) {
        card.classList.add("card-front");
        card.classList.remove("card-back");
    } else {
        console.log("Oh no!");
    }
}

//add random colors to cards
const colorArray = [
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		'#FF99E6'
];

colorArray.sort(() => 0.5 - Math.random());

for (let i = 0; i < colorArray.length; i++){
    cards[i].style.backgroundColor = colorArray[i];
}



//function flipCard() {
    //if (card.classList.contains("card-front")) {
       // card.classList.add("card-back");
     //   card.classList.remove("card-front");
   // } else {
      //  card.classList.add("card-front");
    //    card.classList.remove("card-back");
  //  }
//}