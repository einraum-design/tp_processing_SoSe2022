function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  if(isMouseOverCircle(200, 600, 100) == false){
    pacman(200, 600);
  }
  pacman(600, 150);
  pacman(400, 500, 200);
  pacman(100, 150, 50, animierterWinkel());
  pacman(300, 150, 50, 20, color(255, 0, 0));

  // isMouseOverRect(x, y, w, h); --> true / false;
  // isMouseOverCircle(x, y, d); --> true / false;
}

// FUNKTION
// function FUNKTIONSNAME ( PARAMETERDEFINITION ) { FUNKTIONSRUMPF }
function pacman(x, y, d = 100, open = 45, c = color(255, 255, 0)){
  let xPos = x;
  let yPos = y;
  //let d = 100;
  //let open = 45;

  fill(c);
  noStroke();
  arc(xPos, yPos, d, d, radians(open), radians(360-open), PIE);
  fill(0);
  ellipse(xPos, yPos - d/4.0, d/15.0, d/15.0);
}

// Funktion mit Rückgabe
function animierterWinkel(){
  let angle = (sin(millis()/500.0) + 1) * 22.5; // 0 - 45 - 0 - 45
  //let angle = random(45);
  return angle;
}

function isMouseOverRect(x, y, w, h){
  if(mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h){
    return true;
  } else {
    return false;
  }
}
function isMouseOverCircle(x, y, d){
  if(dist(x, y, mouseX, mouseY) <= d/2.0){
    return true;
  } else {
    return false;
  }
}