// ===============================
// objetivo do exercicio
// simular um 'random walk code'
//--------------------------------
let increment = 0.01

function setup() {
  createCanvas(400, 400);
  background(51)
}

let x = 200;
let y = 200;

function draw() {
  stroke(255);
  strokeWeight(2);

  point(x, y);

  rand = floor(random(4));

  switch(rand) {
    case 0:
      x += 1;
      break;
    case 1:
      x -= 1;
      break;
    case 2:
      y += 1;
      break;
    case 3:
      y -= 1;
      break;
  }

}
