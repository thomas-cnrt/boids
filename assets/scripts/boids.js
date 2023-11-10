const MAX_SPEED = 3;
const MAX_ACCEL = 5;
const MAX_STEER = 0.01;

class boid {
    constructor() {
        this.position = createVector(random(0, windowWidth), random(0, windowHeight))
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 4));
        this.acceleration = createVector();
        this.size = 0.5;
        this.tail = []; // Store previous positions for the tail
        this.tail_length = 8;

    }

    update() {
        this.position.add(this.velocity.limit(MAX_SPEED));
        this.velocity.add(this.acceleration.limit(MAX_ACCEL));

        this.tail.push(createVector(this.position.x, this.position.y));
        if (this.tail.length > this.tail_length) {
            this.tail.shift(); // Remove the oldest position
        }
    }

    edges() {
        if (this.position.x > windowWidth) {
            this.clear_tail();
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.clear_tail();
            this.position.x = windowWidth;
        }
        if (this.position.y > windowHeight) {
            this.clear_tail();
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.clear_tail();
            this.position.y = windowHeight;
        }
    }

    clear_tail() {
        this.tail = [];
    }

    render_tail() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            line(this.tail[i].x, this.tail[i].y, this.tail[i + 1].x, this.tail[i + 1].y);
        }
    }

    seek(target) {
        // A vector pointing from the location to the target
        let desired = p5.Vector.sub(target, this.position);

        // Scale to maximum speed
        desired.setMag(MAX_SPEED);

        // Steering = Desired minus velocity
        let steer = p5.Vector.sub(desired, this.velocity);

        // Limit to maximum steering force
        steer.limit(MAX_STEER);

        this.acceleration.add(steer);
    }

    show() {
        let theta = this.velocity.heading() + PI / 2;
        fill(127);
        stroke(200);
        strokeWeight(10);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.size * 2);
        vertex(-this.size, this.size * 2);
        vertex(this.size, this.size * 2);
        endShape(CLOSE);
        pop();

        stroke(7, 48, 42);
        strokeWeight(1.5);
        this.render_tail();
    }
}