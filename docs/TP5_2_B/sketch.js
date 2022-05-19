function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  translate(width/2, height/2);

  // second() --> Aktuelle Sekundenzahl  - 0 ... 60

  // DreiSatzFunktion map()
  // OUTPUT  = map(INPUT, INPUT_MIN, INPUT_MAX, OUTPUT_MIN, OUTPUT_MAX);

  // Sekunden Rotation
  let secondRotation = map(second(), 0, 60, 0, 360);
  rotate(radians(secondRotation));
  strokeWeight(2);
  line(0, 0, 0, -190);

  // Reset Variante 1
  // Sekundenzeiger Rotation wieder zurück drehen
  rotate(radians(-secondRotation));


  // Zurücksetzen der Rotation Variante 2
  // speichert den aktuellen Zustand des Koordinatensystems
  push();
  // Sekunden Rotation
  let minuteRotation = map(minute() + second()/60, 0, 60, 0, 360);
  rotate(radians(minuteRotation));
  strokeWeight(4);
  line(0, 0, 0, -180);

  // Setzt das Koordianatensystem auf den Zustand vom letzten
  // push() zurück
  pop();

  push();

  // Stundenzeiger
  // hour() --> 0 - 24
  let stundenRotation = map(hour() + minute() / 60, 0, 12, 0, 360);
  strokeWeight(7);
  rotate(radians(stundenRotation));
  line(0, 0, 0, -180);

  pop();


}
