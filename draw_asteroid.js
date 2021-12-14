function draw_asteroid(ctx, radius, shape, options){
    options = options || {};
    ctx.strokeStyle = options.stroke || "white";
    ctx.fillStyle = options.fill || "black";
    ctx.save();
    ctx.beginPath();
    for(let i = 0; i < shape.length; i++){
        ctx.rotate(2 * Math.PI/shape.length);
        ctx.lineTo(radius + radius*options.noise*shape[i], 0);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if(options.guide){
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 0.2;
        ctx.arc(0, 0, radius + radius*options.noise, 0, 2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius - radius*options.noise, 0, 2*Math.PI);
        ctx.stroke();
    }
    ctx.restore();
}