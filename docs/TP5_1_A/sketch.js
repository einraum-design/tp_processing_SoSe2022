function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);

  // verschiebt das Zeichenkoordinatensystem in x / y ( / und z) Richtung 
  translate(200, 100);

  point(0, 0);

  // rotiert das Zeichenkoordinatensystem um seinen Ursprung
  // alles was danach gezeichnet wird, wir im neuen System gezeichnet
  rotate(radians(mouseX));

  // Rechteck wird um seine Mitte gedreht
  // alternativ rectMode(CENTER);
  rect(-50, -25, 100, 50);

  // Skalierung vom Ursprung aus
  // Standartwerte (keine Auswirkung) sind 1, 1 (, 1)
  let scaleValue = mouseY/10;
  scale(scaleValue, scaleValue);
  rect(120, 80, 60, 80);
}
