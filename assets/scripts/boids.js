class boid {
    constructor() {
        this.position = createVector(windowHeight / 2, windowHeight / 2)
        this.velocity = createVector();
        this.acceleration = createVector();
    }

    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}