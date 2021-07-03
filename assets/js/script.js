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

function randomiseBoxOrder() {
    amountOfBoxes = boxes.length;

    let randomNumber = Math.floor(Math.random() * amountOfBoxes); // Gets a random number between 0 and the total number of boxes
    currentBox = boxes[`${randomNumber}`]; // Finds a box in the boxes with that index number
}

const tileImages = [
    ["assets/image/glypha.jpg", "hieroglyphs letter a"],
    ["assets/image/glypha.jpg", "hieroglyphs letter a"],
    ["assets/image/glyphd.jpg", "hieroglyphs letter d"],
    ["assets/image/glyphd.jpg", "hieroglyphs letter d"],
    ["assets/image/glyphf.jpg", "hieroglyphs letter f"],
    ["assets/image/glyphf.jpg", "hieroglyphs letter f"],
    ["assets/image/glyphg.jpg", "hieroglyphs letter g"],
    ["assets/image/glyphg.jpg", "hieroglyphs letter g"],
    ["assets/image/glyphh.jpg", "hieroglyphs letter h"],
    ["assets/image/glyphh.jpg", "hieroglyphs letter h"],
    ["assets/image/glyphi.jpg", "hieroglyphs letter i"],
    ["assets/image/glyphi.jpg", "hieroglyphs letter i"]
    ["assets/image/glyphj.jpg", "hieroglyphs letter j"],
    ["assets/image/glyphj.jpg", "hieroglyphs letter j"],
    ["assets/image/glyphk.jpg", "hieroglyphs letter k"],
    ["assets/image/glyphk.jpg", "hieroglyphs letter k"]
];