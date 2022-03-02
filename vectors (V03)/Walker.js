class Walker {
    constructor(x, y) {
        this.position = createVector(x, y)
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(4));
    }
    walk() {
        this.position.add(this.velocity);
    }
    show() {
        stroke(255);
        strokeWeight(2);
        background(0); // colocando aqui o backgraound nao faz o caminho
        fill(255, 100)
        ellipse(this.position.x, this.position.y, 58, 58);
        // point(this.position.x, this.position.y)
    }
}
