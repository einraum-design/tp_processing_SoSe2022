// Processing Variable
// mouseIsPressed  - Boolean -> true / false


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  // if Abfrage mit else Block -> entweder der eine oder der andere Block wird ausgeführt
  
  if(mouseIsPressed == true) { // funktioniert genauso: if (mousePressed)
    fill(255, 0, 0);
  } else {
    fill(255, 255, 0);
  }
  
  rect(width/2, height/2, 80, 80);
  
  // Mehrere Bedingungen zu Auswahl
  // if - else if - else if - ... - else
  if(mouseX <= width/2){
    fill(255, 120, 0);
  } else if(  mouseY <=  height/2) { // mouseX > width/2 &&   brauchen wir nicht, da wir wissen, dass wir auf der rechten Seite der Anwendung sind (sonst wären ja schon die erste if Bedingung erfüllt gewesen ...)
    fill(0, 255, 0);
  } else {
    
    fill(0, 255, 255);
  }
  
  
  ellipse(100, 100, 80, 80);
}