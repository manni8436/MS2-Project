const boxes = getElementsByClassName("box");
console.log(boxes)

function boxFlip() {
    for (box in boxes) {
    box.style.backgroundColor = "purple";
    }
}