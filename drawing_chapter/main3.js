var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");
draw_grid(context);

let segments = 8;
let x = 0.25; y = 0.25; noise = 0.2;
var shape = [];
for(var i = 0; i < segments; i++){
    shape.push(2*(Math.random()-0.5));
}
context.translate(context.canvas.width*x,context.canvas.height*y);
draw_asteroid(context, context.canvas.width/8, shape, {noise:noise, guide: true});
context.save();