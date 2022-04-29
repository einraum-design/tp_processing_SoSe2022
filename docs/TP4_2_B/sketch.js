// Processing Variable
// mouseIsPresse - Boolean -> true / false

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
  // Entweder oder - ein Block wird immer ausgeführt
  if (mouseIsPressed) {
    // oder mit  == true
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }

  rect(150, 100, 200, 50);
  
  // mehrer Optionen 
  // if  .. else if  ... else if ... else
  
  // 1. Fall: In der linken hälfte vom sketch
  if(mouseX <= width/2){
    fill(0, 0, 255);
  } else if(mouseY <= height/2){ // mouseX > width/2 && nicht notwendig, da wir schon wissen, dass die Maus in der rechten Hälfte sein muss (sonst wäre erster Block ausgeführt worden ...)
    fill(0, 255, 255);          
  } else {
    fill(255, 255, 0);
  }
  
  ellipse(200, 300, 80, 80);
  
  
}
