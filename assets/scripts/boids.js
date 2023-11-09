class boid {
    constructor() {
        this.position = createVector(random(0, windowWidth), random(0, windowHeight))
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 4));
        this.acceleration = createVector();
    }

    update() {
        this.position.add(this.velocity.limit(3));
        this.velocity.add(this.acceleration.limit(3))
    }

    edges() {
        if (this.position.x > windowWidth) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = windowWidth;
        }
        if (this.position.y > windowHeight) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = windowHeight;
        }
    }

    seek(target) {
        // A vector pointing from the location to the target
        let desired = p5.Vector.sub(target, this.position);

        // Scale to maximum speed
        desired.setMag(3);

        // Steering = Desired minus velocity
        let steer = p5.Vector.sub(desired, this.velocity);

        // Limit to maximum steering force
        steer.limit(3);

        this.acceleration.add(steer);
    }

    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}