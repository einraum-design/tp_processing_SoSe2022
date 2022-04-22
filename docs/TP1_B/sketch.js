function setup() {
  
  // erstellt Leinwand in den Massen 600px breit, 400 px hoch
  
  /* ich
    bin
    ein
    mehrzeiliger 
    Kommentar
  */
  
  createCanvas(600, 400);
  background(200);
  
   // Fuellfarbe 3 Parameter rot, gruen, blau --> 0 - 255
  fill(255, 150, 0);
  
  // rectMode(CENTER oder CORNER)
  // rect(XPOS, YPOS, BREITE, HOEHE)
  rect(100, 150, 100, 120);
  
  // Fuellfarbe 4 Parameter rot, gruen, blau, alpha --> 0 - 255
  fill(255, 0, 0, 100);
  
  ellipse(100, 150, 100, 120);
  
  
 
  // Fuellfarbe 1 Parameter grauwert--> 0 - 255
  fill(0);
  
  // Fuellfarbe 2 Parameter grauwert, alpha --> 0 - 255
  fill(0, 90);
  noStroke();
  // setze den Positionsreferenzpunkt: CENTER, CORNER, CORNERS
  ellipseMode(CORNER);
  ellipse(100, 150, 100, 120);
  
  // keine Fuellfarbe
  noFill();
  
  // Konturfarbe
  stroke(0,0,255);
  
  // Konturstaerke
  strokeWeight(6);
  rect(400, 100, 200, 50)
  
  
  fill(255);
  arc(450, 250, 100, 100, radians(220), radians(120), PIE);
  
}