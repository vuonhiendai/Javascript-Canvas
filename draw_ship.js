function draw_ship(ctx, x, y, radius, options){
    options = options || {};
    ctx.save();
    if(options.guide){
        ctx.strokeStyle = "white";
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    ctx.lineWidth = options.lineWidth || 2;
    ctx.strokeStyle = options.stroke || "white";
    ctx.fillStyle = options.fill || "black";
    let angle = (options.angle|| 0.5*Math.PI)/2;
    ctx.beginPath();
    ctx.moveTo(x+radius, y);
    ctx.lineTo(
        x + Math.cos(Math.PI - angle)*radius,
        y + Math.sin(Math.PI - angle)*radius,
    );
    ctx.lineTo(
        x + Math.cos(Math.PI + angle)*radius,
        y + Math.sin(Math.PI + angle)*radius,
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}