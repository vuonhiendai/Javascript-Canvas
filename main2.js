var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");
draw_grid(context);
draw_ship(context, 200, 200, 125, {guide:true})