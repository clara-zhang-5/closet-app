let numTops = 4;
let numBottoms = 3;
let numShoes = 1;

// create array for all top elements
let tops = [];

for (let i = 1; i <= numTops; i++) {
    tops.push(`assets/tops/top${i}.png`);
}
// create array for all bottom elements
let bottoms = [];

for (let i = 1; i <= numBottoms; i++) {
    bottoms.push(`assets/bottoms/bottom${i}.png`);
}
// create array for all shoes elements
let shoes = [];

for (let i = 1; i <= numShoes; i++) {
    shoes.push(`assets/shoes/shoes${i}.png`);
}
// create 2d array for saved outfits
const myOutfits = [];

// set initial src attributes for images

// handle click on left / right buttons for the top
let curTop = 0;
const topImg = document.getElementById("top-image");
topImg.src = tops[curTop];
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
    if(curTop == numTops - 1) {
        alert("This is the last top in your closet!"); // display an alert that button can't be clicked
    } else {
        curTop += 1;
        topImg.src = tops[curTop];
    }
});

// handle click on left / right buttons for the bottom
let curBottom = 0; // set index of the current bottom being shown (0)
const bottomImg = document.getElementById("bottom-image");
bottomImg.src = bottoms[curBottom];
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
    if(curBottom == numBottoms) {
        alert("This is the last bottom in your closet!"); // display an alert that button can't be clicked
    } else {
        curBottom += 1;
        bottomImg.src = bottoms[curBottom];
    }
});

// handle click on left / right buttons for the shoes
let curShoes = 0;
const shoesImg = document.getElementById("shoes-image");
shoesImg.src = shoes[curShoes];
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
    if(curShoes == numShoes) {
        alert("This is the last pair of shoes in your closet!"); // display an alert that button can't be clicked
    } else {
        curShoes += 1;
        shoesImg.src = shoes[curShoes];
    }
});

// save function
function saveOutfit() {
    myOutfits.push([tops[curTop], bottoms[curBottom], shoes[curShoes]]);
}

// handle save button clicked
document.getElementById("save-button").addEventListener("click", () => {
    saveOutfit();
});

// handle load button clicked
document.getElementById("load-button").addEventListener("click", () => {
    alert("this should load your saved outfits")
});