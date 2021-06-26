const boxes = document.getElementsByClassName("box");
console.log(boxes);

function boxFlip() {
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "purple";
    console.log(boxes[i]);
    }
}