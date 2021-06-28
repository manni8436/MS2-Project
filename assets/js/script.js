const boxes = document.getElementsByClassName("box");
    console.log(boxes);

function boxFlip() {
   for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains("box-purple")) {
            boxes[i].classList.add("box-red");
            boxes[i].classList.remove("box-purple");
        } else {
            boxes[i].classList.add("box-purple");
            boxes[i].classList.remove("box-red");
        }
    } 
}

