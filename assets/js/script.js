const boxes = document.getElementsByClassName("box");
console.log(boxes);

function boxFlip() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor = "red") {
            boxes[i].style.backgroundColor = "purple";
        } else {
            boxes[i].style.backgroundColor = "red";
        }
        console.log(boxes[i].style.backgroundColor);
    } 
}