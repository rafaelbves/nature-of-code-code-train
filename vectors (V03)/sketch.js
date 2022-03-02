// ===============================
// objetivo do exercicio
// visualização de vetores e utilização das funções especificas
// --------------------------------
// function setup() {
//   createCanvas(400, 400);
//   background(0);
// }

// function draw() {
//   translate(width/2, height/2);
//   vector = p5.Vector.random2D(); // cria um vetor unitario aleatorio
//   vector.mult(random(50, 100)) // muda a maguinitude do vetor de 50 a 100
//   stroke(255, 100);
//   strokeWeight(2);
//   line(0, 0, vector.x, vector.y)
// }
// =====================================
// objetivo do exercicio
// visualização de vetores e utilização das funções especificas e classes
// altera velocidade da circunferencia
// --------------------------------------
let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200);
}

function draw() {
  walker.walk();
  walker.show();
}