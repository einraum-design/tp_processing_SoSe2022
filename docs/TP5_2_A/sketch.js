function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  translate(width/2, height/2);

  scale(0.5, 0.5);

  strokeWeight(14);
  point(0, 0);
  strokeWeight(3);
  // second() --> 0 ... 60 aktuelle Sekunden Zahl von der PC Uhr

  // um den Zahlebereich 0 - 60 Sekunden auf 0 - 360 Grad umzurechnen verwenden wir die 
  // map() Funktin (DreiSatzFunktion)

  // OUTPUT = map(INPUT, INPUT_MIN, INPUT_MAX, OUTPUT_MIN, OUTPUT_MAX);
  let secondRotation = map( second(), 0, 60, 0, 360);
  // Sekunden Rotation
  rotate(radians(secondRotation));
  // Sekundenzeiger
  line(0, 0, 0, -190);

  // Sekundenrotation wieder zurücksetzen
  rotate(radians(-secondRotation));


  // speichere aktuellen Zustand vom Koordinatensystem
  push();
  let minuteRotation = map( minute(), 0, 60, 0, 360);
  // Minuten Rotation
  rotate(radians(minuteRotation));
  // Minutenzeiger
  strokeWeight(6);
  line(0, 0, 0, -170);
  /*push();
  translate(0, -170);
  rotate(secondRotation);
  ellipse(20, 0, 5, 5);
  pop();*/

  // Setze das Koordinatensystem auf den Zustand vom letzten push zurück
  pop();

  push()
  let stundenRotation = map( hour() + minute()/60.0, 0, 24, 0, 360*2);
  // Stunden Rotation
  rotate(radians(stundenRotation));

  // Stundenzeiger
  strokeWeight(8);
  line(0, 0, 0, -160);
  pop();

  // setzt die Transformationen auf den startzustand zurück
  resetMatrix();


}
