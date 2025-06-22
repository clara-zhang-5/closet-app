// create array for all top elements
const tops = [
    "assets/tops/top1.png", "assets/tops/top2.png"
];
// create array for all bottom elements
const bottoms = [
    "assets/bottoms/bottom1.png", "assets/bottoms/bottom2.png", "assets/bottoms/bottom3.png"
];
// create array for all shoes elements
const shoes = [
    "assets/shoes/shoes1.png"
];

// handle click on left / right buttons for the top
let curTop = 0;
const topImg = document.getElementById("top-image");
// left button
document.getElementById("top-left").addEventListener("click", () => {
    if(curTop == 0) {
        alert("This is the first top in your closet!"); // display an alert that button can't be clicked
    } else {
        curTop -= 1; // index the current top by 1 to the left
        topImg.src = tops[curTop]; // change the source of the current top image being shown
    }
});
// right button
document.getElementById("top-right").addEventListener("click", () => {
    if(curTop == tops.length - 1) {
        alert("This is the last top in your closet!"); // display an alert that button can't be clicked
    } else {
        curTop += 1;
        topImg.src = tops[curTop];
    }
});

// handle click on left / right buttons for the bottom
let curBottom = 0; // set index of the current bottom being shown (0)
const bottomImg = document.getElementById("bottom-image");
// left button
document.getElementById("bottom-left").addEventListener("click", () => {
    if(curBottom == 0) {
        alert("This is the first bottom in your closet!"); // display an alert that button can't be clicked
    } else {
        curBottom -= 1;
        bottomImg.src = bottoms[curBottom];
    }
});
// right button
document.getElementById("bottom-right").addEventListener("click", () => {
    if(curBottom == bottoms.length - 1) {
        alert("This is the last bottom in your closet!"); // display an alert that button can't be clicked
    } else {
        curBottom += 1;
        bottomImg.src = bottoms[curBottom];
    }
});

// handle click on left / right buttons for the shoes
let curShoes = 0;
const shoesImg = document.getElementById("shoes-image");
// left button
document.getElementById("shoes-left").addEventListener("click", () => {
    if(curShoes == 0) {
        alert("This is te first pair of shoes in your closet!"); // display an alert that button can't be clicked
    } else {
        curShoes -= 1;
        shoesImg.src = shoes[curShoes];
    }
});
// right button
document.getElementById("shoes-right").addEventListener("click", () => {
    if(curShoes == shoes.length - 1) {
        alert("This is the last pair of shoes in your closet!"); // display an alert that button can't be clicked
    } else {
        curShoes += 1;
        shoesImg.src = shoes[curShoes];
    }
});