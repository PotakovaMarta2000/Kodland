/* let canvas = document.querySelector('.fence');
let fence = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;


let xShift = 30;


for(let i = 1; i <= 10; ++i ){
    fence.fillStyle = "#f3c90f";
    fence.fillRect(xShift, 30, 40, 300);
    xShift += 50;
} */


let canvas = document.querySelector('.fence');
let fence = canvas.getContext("2d");
canvas.width = 0; // ширина канвас
canvas.height = window.innerHeight - 200; // высота канвас

let userInput = document.querySelector(".data");
let btn = document.querySelector('.btn');

/* console.log(btn); */

let shiftX = 30;

btn.addEventListener("click", drawFence);

function drawFence() {
    canvas.width = 0;
    xShift = 30;
    canvas.width += userInput.value * 70;

    for (let i = 1; i <= userInput.value; ++i) {
        fence.fillStyle = "#f3c90f";
        fence.fillRect(shiftX, 30, 40, 300);
        shiftX += 50;
    }

}