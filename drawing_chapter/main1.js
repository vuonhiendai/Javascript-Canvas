var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");
context.strokeStyle = "#00FF00";

for(var x = 0; x < canvas.width; x += 10) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.lineWidth = (x % 50 == 0) ? 0.5 : 0.25;
    context.stroke();
}

for(var y = 0; y < canvas.height; y += 10) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.lineWidth = (y % 50 == 0) ? 0.5 : 0.25;
    context.stroke();
}

context.beginPath();
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#00FF00";
context.lineWidth = 2;
context.moveTo(50, 50);
context.lineTo(150, 250);
context.lineTo(250, 170);
context.stroke();
context.fillText("(50, 50)", 30, 40);
context.fillText("(150, 250)", 130, 260);
context.fillText("(250, 170)", 255, 175);
context.fill();