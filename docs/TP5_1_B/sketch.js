function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  // Verschieben vom Zeichenkoordinatensystem um die Achse x, y (,z)
  translate(200, 100);

  point(0, 0);
  // Rotieren um den Nullpunkt vom Koodinatensystem
  rotate(radians(mouseX));

  rectMode(CORNER);
  rect(-50, -30, 100, 60);

  rectMode(CENTER);
  rect(0, 0, 70, 40);

  // Skalierung vom Nullpunkt aus in x, y (und z)
  let scaleValue = mouseY/10.0;
  scale(scaleValue, scaleValue);
  rectMode(CORNER);
  rect(120, 0, 300, 200);
}
