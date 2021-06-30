const boxes = document.getElementsByClassName("box");
    console.log(boxes);

function boxFlip() {
   for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains("box-front")) {
            boxes[i].classList.add("box-back");
            boxes[i].classList.remove("box-front");
        } else {
            boxes[i].classList.add("box-front");
            boxes[i].classList.remove("box-back");
        }
    } 
}

const images = [
        ["assets/image/GlyphA.jpg", "ALT-HERE", "box-purple"],
        ["assets/image/GlyphG.jpg", "ALT-HERE", "box-red"],
    ];

function randomiseBoxOrder() {
    amountOfBoxes = boxes.length;

    let randomNumber = Math.floor(Math.random() * amountOfBoxes); // Gets a random number between 0 and the total number of boxes
    currentBox = boxes[`${randomNumber}`]; // Finds a box in the boxes with that index number
}

`$('.box-front').contents().filter(function(){`
    `return this.nodeType == 3;`
`}).remove();`