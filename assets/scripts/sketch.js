const FLOCK_SIZE = 69;

const flock = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let index = 0; index < FLOCK_SIZE; index++) {
        flock.push(new boid());
    }
}

function draw() {
    background(50);

    for (let boid of flock) {
        boid.show();
        boid.update();
        boid.edges();
        if (mouseIsPressed) {
            let mouse = createVector(mouseX, mouseY);
            boid.seek(mouse);
        }
    }
}