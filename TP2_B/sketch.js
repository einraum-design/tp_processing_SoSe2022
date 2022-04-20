// Processing eigene Variablen
// mouseX -> Ganzzahl - xPosition der Maus innerhalb vom Canvas
// mouseY -> Ganzzahl - yPosition der Maus innerhalb vom Canvas
// width  -> Ganzzahl - Breite vom Canvas Element (wird bei createCanvas gesetzt)
// height -> Ganzzahl - Höhe vom Canvas Element (wird bei createCanvas gesetzt)

// Wird beim Programmstart einmal ausgeführt
// Daten geladen: Bilder, Schriften, ...
// Canvas erstellen, weiter HTML Elemente erstellen
function setup() {
 createCanvas(400, 400);

 //
}

// Wird, nachdem die function setup zuende ist 
// immer wieder (60 x pro Sekunde) ausgeführt.
function draw() {
 background(220);

 // red, green, blue, alphatransparenz -> 0 - 255
 fill(mouseX, 0, 0, mouseY);
 ellipse(mouseX, mouseY, 100, 100);



}