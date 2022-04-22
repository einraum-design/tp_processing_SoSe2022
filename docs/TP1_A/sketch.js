// erstellt Leinwand in den Massen 600px breit, 400 px hoch
  
  /* ich
    bin
    ein
    mehrzeiliger 
    Kommentar
  */

function setup() {
  
  
  createCanvas(600, 400);
  
  
  // background ( RED, GREEN, BLUE); -> Werte 0 - 255
   background(255, 255, 0);
  
  // ein paramter -> Grauwert
  fill(100);
  stroke(255);
  
  // rectMode(CENTER oder CORNER)
  // rect(X-POS, Y-POS, BREITE, HOEHE);
  rect(100, 150, 150, 100);
  
  // Fuellfarbe festlegen - gilt für alle folgenden Formen
  // drei parameter -> rot, gruen, blau: 0 - 255
  fill(255, 0, 0);
  stroke(0, 255, 0);
  
  // ellipse(X-POS, Y-POS, BREITE, HOEHE);
  ellipse(100, 150, 150, 100);
  
  
  // vier parameter -> rot, gruen, blau, alpha: 0 - 255
  fill(255, 0, 0, 100);
  noStroke();
  
  // setzt Referenzpunkt mit Konstanten: CENTER / CORNER
  ellipseMode(CORNER);
  ellipse(100, 150, 150, 100);
  
  // zwei paramter -> grauwert, alpha: 0- 255;
  stroke(0, 120);
  strokeWeight(5);
  noFill();
  rect(50, 300, 120, 120);
  
  fill(255);
  arc(50, 50, 80, 80, radians(20), radians(190), CHORD);
 
}
