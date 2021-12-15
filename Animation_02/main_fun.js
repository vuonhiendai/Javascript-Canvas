var context = document.getElementById("asteroids").getContext("2d");
context.strokeStyle = "white";
context.lineWidth = 1.5;

class Asteroid {
    constructor(segments, radius, noise) {

        this.x = context.canvas.width * Math.random();
        this.y = context.canvas.height * Math.random();
        this.angle = 0;
        this.x_speed = context.canvas.width * (Math.random() - 0.5);
        this.y_speed = context.canvas.height * (Math.random() - 0.5);
        this.rotation_speed = 2 * Math.PI * (Math.random() - 0.5);
        this.radius = radius;
        this.noise = noise;
        this.shape = [];
        for (var i = 0; i < segments; i++) {
            this.shape.push(Math.random() - 0.5);
        }
    }
    draw(ctx, guide) {

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        draw_asteroid(ctx, this.radius, this.shape, {
            guide: guide,
            noise: this.noise
        });
        ctx.restore();
    }
    update(elapsed) {
        if (this.x - this.radius + elapsed * this.x_speed > context.canvas.width) {
            this.x = -this.radius;
        }
        if (this.x + this.radius + elapsed * this.x_speed < 0) {
            this.x = context.canvas.width + this.radius;
        }
        if (this.y - this.radius + elapsed * this.y_speed > context.canvas.height) {
            this.y = -this.radius;
        }
        if (this.y + this.radius + elapsed * this.y_speed < 0) {
            this.y = context.canvas.height + this.radius;
        }
        this.x += elapsed * this.x_speed;
        this.y += elapsed * this.y_speed;
        this.angle = (this.angle + this.elapsed * this.rotation_speed) % (2 * Math.PI);
    }
};



var asteroids = [
    new Asteroid(24, 50, 0.1),
    new Asteroid(15, 60, 0.2),
    new Asteroid(15, 40, 0.2),
];

function update(elapsed) {
    asteroids.forEach(function (asteroid) {
        asteroid.update(elapsed);
    });
}

function draw(ctx, guide) {
    if (guide) {
        draw_grid(ctx);
    }
    asteroids.forEach(function (asteroid) {
        asteroid.draw(context, guide)
    });
}

var previous, elapsed;
function frame(timestamp) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    if (!previous) previous = timestamp;
    elapsed = timestamp - previous;
    update(elapsed / 1000);
    draw(context, true);
    previous = timestamp;
    window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);
