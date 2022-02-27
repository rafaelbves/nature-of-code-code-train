// objetivo do exercicio pt 01
// fazer a esfera mover em duas direções
// -----------------------------
// let noiseOffcetForX = 0;
// let noiseOffcetForY = 10000;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(51);
 
//   noiseOffcetForX += 0.02 
//   noiseOffcetForY += 0.02
//   let x =  map(noise(noiseOffcetForX), 0, 1, 0, width);
//   let y =  map(noise(noiseOffcetForY), 0, 1, 0, width);

//   ellipse(x, y, 24, 24);
// }
// =========================
// objetivo do exercicio pt 02
// plotar o grafico dos valores gerados pelos "noises"
// -----------------------------
// let startingPoint = 0;
// let increment = 0.01

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(51);

//   stroke(255);
//   noFill();

//   beginShape()
//   let noiseOffcetForX = startingPoint;
//   for (let x = 0; x < width; x += 1) {
//     stroke(255);
//     // let y = random(height)
//     let y = noise(noiseOffcetForX) * height; // noise é um entre 0 e 1, para visualizar uma referencia no tela multiplica-se pela altura
//     vertex(x, y)
//     noiseOffcetForX += increment;
//   }
//   endShape();
//   startingPoint += increment;
//   // noLoop() // para a animação 
// }
// ==============================
// objetivo do exercicio pt 03
// adicionar elements da função noise a uma senoidal

let startingPoint = 0;
let increment = 0.01

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  stroke(255);
  noFill();

  beginShape()
  let xOffcet = startingPoint;
  for (let x = 0; x < width; x += 1) {
    stroke(255);
    let s = map(sin(xOffcet), 1, -1, 0, height);
    let n = map(noise(xOffcet), 0, 1, 50, -50);
    let y = n + s;

    vertex(x, y)

    xOffcet += increment;
  }
  endShape();
  startingPoint += increment;

}