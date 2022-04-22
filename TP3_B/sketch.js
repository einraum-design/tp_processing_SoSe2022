// Variablen

// elementaren Variablen
// Ganzzahlen Integers int --> 1, 3, 34, -23
// Fließkommazahlen FloatingPointNumbers float --> 0.234, 123.234, 1.0, -234.234
// Boolean bool --> true / false
// Character char --> 'a', 'b', ' ', '+', '\'' (escapen von sonderzeichen über \Sonderzeichen)

// Objekte
// Textkette String --> "Hello World", " ", "8ohasdf"
// PImage Bilder
// PFont Schriften

// Variablen Definition in den meisten Programmiersprachen
// Typ variablenNamen ( = Wert);
// int alter = 18;

// Variabeln Definition in p5js
let myXPos = 40.0;
let myYPos = 60;
let xSpeed, ySpeed;


function setup() {
  createCanvas(400, 400);
  xSpeed = random(1,5);
  ySpeed = random(1,5);
}

function draw() {
  
  //background(220);
  
  
  ellipse(myXPos, myYPos, 30, 30);
  myXPos = myXPos + xSpeed;
  myYPos = myYPos + ySpeed;
  
  // Vergleichsoperatoren
  // A > B  --> wenn A größer als B ist
  // A < B  --> wenn A kleiner als B ist
  // A >= B --> wenn A größer oder gleich B ist
  // A <= B --> wenn A kleiner oder gleich B ist
  // A == B --> wenn der Wert von A gleich B ist
  // A === B --> wenn der Wert von A gleich B ist und der Typ von A und B gleich ist
  // A != B --> wenn der Wert von A nicht gleich B ist
  
  
  // Verknüpfungsoperatoren
  // CONDITION_A && CONDITION_B --> Wenn Bedingung A UND Bedingung B erfüllt sind
  // CONDITION_A || CONDITION_B --> Wenn Bedingung A ODER Bedingung B (oder beide) erfüllt sind
  
  // if-Bedingungen
  // if(CONDITION) { wenn CONDITION erfüllt ist, wird alles im Rumpf (zwischen den {}) ausgeführt}
  /*
  if(myXPos > 200) 
  {
    //myXPos = 0;
    xSpeed = -xSpeed;
  }
  
  if(myXPos <= 0){
    xSpeed = -1 * xSpeed;
  }
  */
  
  if(myXPos > width-15 || myXPos <= 0+15) 
  {
    xSpeed = -xSpeed;
  }
  
  if(myYPos > height-15 || myYPos <= 0+15) 
  {
    ySpeed = -ySpeed;
  }
  
  
}