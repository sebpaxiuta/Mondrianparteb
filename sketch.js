function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(245, 242, 235);
  noStroke();

  let oscilacaoVermelho = 215 + sin(frameCount * 1.00
  ) * 8;
  fill(oscilacaoVermelho, 35, 25);
  rect(0, 0, 440, 410);

  fill(245, 210, 20);
  rect(0, 530, 75, 270);

  fill(20, 35, 125);
  rect(440, 530, 260, 235);

  stroke(15, 15, 15);
  strokeCap(SQUARE);
  strokeWeight(12);

  line(700, 530, 700, 800);
  line(75, 530, 75, 800);
  line(0, 410, 800, 410);
  line(0, 530, 800, 530);
  line(440, 765, 700, 765);

  let tremor = random(-0.8, 0.8);
  line(440 + tremor, 0, 440 + tremor, 800);
}
