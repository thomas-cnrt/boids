class boid {
    constructor() {
        this.position = createVector(windowHeight / 2, windowHeight / 2)
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector();
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration)
    }

    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}