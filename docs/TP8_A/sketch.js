function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  if(mouseOverCircle(200, 500, 150) == false){
    pacman(200, 500);
  }
  pacman(500, 200, 300);
  pacman(300, 150, 100, 10);
  pacman(500, 450, 100, 10, 90);
  pacman(50, 50, 100, 10, 90, erstelleRandomFarbe());

  
}

// Definition einer neuen Funktion
// function funktionsName ( PARAMETERDEFINITION ) { FUNKTIONSRUMPF }
function pacman( x, y, d = 150, open = 45, rot = 0, c = color(255, 255, 0)){
  let xPos = x;
  let yPos = y;
  //let d = 150;
  //let open = 45;
  //let rot = 0;

  push();

  noStroke();
  fill(c);

  translate(xPos, yPos);
  rotate(radians(rot));

  arc(0,0 , d, d, radians(open), radians(360 - open), PIE);
  fill(0);
  ellipse(0, 0 - d/4.0, d/15.0, d/15.0);
  pop();
}

// Funktion mit Rückgabe
function erstelleRandomFarbe(max = 255) {
  let redV = random(max);
  let greenV = random(max);
  let blueV = random(max);
  let c = color(redV, greenV, blueV);

  return c;
}

function mouseOverRect(x, y, w, h){
  if(mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h){
    return true;
  } else {
    return false;
  }
}

function mouseOverCircle(x, y, d){
  if(dist(x, y, mouseX, mouseY) <= d/2.0){
    return true;
  } else {
    return false;
  }
}