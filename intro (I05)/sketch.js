// objetivo do exercicio
// represintar valores em um espaço 2D, tutorial a seguir:
// https://www.youtube.com/watch?v=nMUMZ5YRxHI
//--------------------------------------------------
// let video;

// function setup() {
//   createCanvas(200, 200);
//   pixelDensity(1)
//   // video = createCapture(VIDEO);
//   // video.size(320,240);
// }

// function draw() {
//   background(51);
//   loadPixels();

//   for(let x = 0; x < width; x += 1) {
//     for (let y = 0; y < height; y +=1) {
//       let index = (x + y * width) * 4; // formula para pegar individualemnte o pixel especifico no array de pixels
//       // para cada pixel da tela é controla do por 4 valores no array de pixel
//       pixels[index] = x; // valor que controla a cor vermelha do do pixel (R)
//       pixels[index + 1] = 250; // valor que controla a cor verde do do pixel (G)
//       pixels[index + 2] = y; // valor que controla a cor azul do do pixel (B)
//       pixels[index + 3] = 255; // valor que controla a cor alfa do do pixel (A)
//     }
//   }

//   updatePixels();
// }
// ===============================
// objetivo do exercicio
// represintar valores em um espaço 2D
//--------------------------------
let increment = 0.01

function setup() {
  createCanvas(200, 200);
  pixelDensity(1)
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
