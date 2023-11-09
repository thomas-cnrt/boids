class boid {
    constructor() {
        this.position = createVector(random(0, windowWidth), random(0, windowHeight))
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 4));
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