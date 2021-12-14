var context = document.getElementById("asteroids").getContext("2d");
context.strokeStyle = "white";
context.lineWidth = 1.5;
var x = 0, y = context.canvas.height / 2;
function frame() {
    context.clearRect(0, 0, context.canvas.width, context.
    canvas.height);
    draw(context);
    update();
}

function update() {
    x += 1;
}
    
function draw(ctx) {
    draw_grid(ctx);
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

setInterval(frame, 1000.0/60.0); // 60 fps