// ===============================
// objetivo do exercicio
// refinar os detalhes da função noise
//--------------------------------
let increment = 0.01

function setup() {
  createCanvas(200, 200);
  pixelDensity(1)
  noiseDetail(16, 0.6); // ajustes no detalhe da função noise, padrão (4, 0.5) (quantidade de oitavas, redução dos valores)
}

function draw() {
  let yOffcet = 0;

  loadPixels();
  for (let y = 0; y < height; y += 1) {
    let xOffcet = 0;
    for (let x = 0; x < width; x += 1) {
      let index = (x + y * width) * 4;
      let noiseValue = noise(xOffcet, yOffcet) * 255;
      pixels[index] = noiseValue;
      pixels[index + 1] = noiseValue;
      pixels[index + 2] = noiseValue;
      pixels[index + 3] = 255;
      xOffcet += increment;
    }
    yOffcet += increment;
  }
  updatePixels()
}
