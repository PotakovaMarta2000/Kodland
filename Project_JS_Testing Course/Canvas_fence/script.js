let canvas = document.querySelector('.fence');
let fence = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;


let xShift = 30;


for(let i = 1; i <= 10; ++i ){
    fence.fillStyle = "#f3c90f";
    fence.fillRect(xShift, 30, 40, 300);
    xShift += 50;
}