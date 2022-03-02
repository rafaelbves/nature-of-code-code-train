// informação complementar para o exercicio de vetores
// introdução a classes
// https://www.youtube.com/watch?v=T-HGdc8L-7w
// ================================
// class Bubble {
//   constructor(x, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   };

//   move() {
//     this.x = this.x + random(-5, 5);
//     this.y = this.y + random(-5, 5);
//   };

//   show() {
//     stroke(255)
//     strokeWeight(4);
//     noFill()
//     ellipse(this.x, this.y, this.r)
//   }
// }

// let bubbles = [];

// function setup() {
//   createCanvas(600, 400);
// }

// function mousePressed() {
//   let r = random(10, 50);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }

// function mouseDragged() {
//   let r = random(10, 50);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }

// function draw() {
//   background(0);
//   bubbles.forEach((bubble) => {
//     bubble.move();
//     bubble.show();
//   })
// }
// ===============================
// objetivo do exercicio
// simular um 'random walk code' com vetores
//--------------------------------
// let position;

// function setup() {
//   createCanvas(400, 400);
//   position = createVector(width/2, height/2);
//   background(0)
// }

// function draw() {
//   stroke(255, 100);
//   strokeWeight(2);
//   point(position.x, position.y);
//   position.x += random(-1, 1);
//   position.y += random(-1, 1);
// }
//================================

// ===============================
// objetivo do exercicio
// simular um 'random walk code' com vetores em um arquivo separado
// --------------------------------
let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200);
  // background(0); // colocando o background aqui o caminho e gerado
}

function draw() {
  walker.walk();
  walker.show();
}
// =====================================
