// function app() {
    var canvas = document.getElementById("asteroids");
    var context = canvas.getContext("2d");
    context.strokeStyle = 'white';
    context.fillStyle = 'pink';
    context.lienWidth = 5;
    context.rect(75, 75, 250, 250);
    context.stroke();
    context.fill();
    context.font = "34px Arial";
    context.strokeStyle = "yellow";
    context.lineWidth = "1";
    context.textAlign = "center";
    let msg = "Hello !"
    context.fillText(msg, canvas.width/2,100);
    context.strokeText(msg, canvas.width/2, 100);
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 2;
    context.beginPath();
    context.arc(200, 140, 20, 0, Math.PI * 2);
    context.moveTo(200, 160);
    context.lineTo(200, 220);
    context.moveTo(180, 300);
    context.lineTo(185, 260);
    context.lineTo(200, 220);
    context.lineTo(215, 260);
    context.lineTo(220, 300);
    context.moveTo(240, 130);
    context.lineTo(225, 170);
    context.lineTo(200, 170);
    context.lineTo(175, 180);
    context.lineTo(170, 220);
    context.stroke();
// }
