var canvas=document.createElement("canvas");
var ctx=canvas.getContext("2d");
document.body.appendChild(canvas);

ctx.fillStyle='#dc10c1';
ctx.strokeStyle='black';
ctx.lineWidth=0.5;

// with shadow
ctx.shadowColor='#dc10c1';
ctx.shadowBlur=5;
ctx.shadowOffsetY=3;
ctx.beginPath();
ctx.arc(175,60,5,0,Math.PI*2);
ctx.closePath();
ctx.fill();
ctx.stroke();

