const flock = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let index = 0; index < 100; index++) {
        flock.push(new boid());
    }
}

function draw() {
    background(50);

    for (let boid of flock) {
        boid.show();
        boid.update();
    }
}