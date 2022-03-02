class Walker {
    constructor(x, y) {
        this.position = createVector(x, y)
    }
    walk() {
        this.position.x += random(-1, 1);
        this.position.y += random(-1, 1);
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
