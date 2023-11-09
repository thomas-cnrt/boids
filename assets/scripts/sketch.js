const flock = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    flock.push(new boid());

}

function draw() {
    background(50);

    for (let boid of flock) {
        boid.show();
        boid.update();
    }
}