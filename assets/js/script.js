const boxes = document.getElementsByClassName("box");
console.log(boxes);

function boxFlip() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor = "red") {
            boxes[i].style.backgroundColor = "purple";
            console.log(boxes[i].style.backgroundColor);
        } else {
            boxes[i].style.backgroundColor = "red"; // the seems to be something wrong with this code but what???
        }
        console.log(boxes[i].style.backgroundColor);
    } 
}