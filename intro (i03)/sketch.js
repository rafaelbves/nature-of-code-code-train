let xoff = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  //random deixa o movimento da circonferencia esporaticos
  // x = random(width);

  // noise deixa o movimento mais fluido, natural e mais proximo do centro 
  xoff += 0.01 // quanto maior esse numero mais esporatico o movimento se torna, pode ser a velocidade da bola
  let x =  map(noise(xoff), 0, 1, 0, width);

  ellipse(x, 200, 24, 24);
}


