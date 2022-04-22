//Variablentypen

// elementaren Variablen
// ZahlenVariablen
// Ganzzahlen Integer int  1, 2, 3, -5, 6
// Fließkommazahlen FoatingPointNumbers float 1.234, 45.456, 1.0, -0.234
// Charakter char 'a', 'b', ' ', '*'
// Boolean bool --> true / false
// color -> Farbton #ff00ed (red / blue / green)

// Objekte
// Texte Strings "Hello World"
// PImages Bilder 
// PFont Schriftarten

// in Processing
// Typ Variablennamen = Wert
// int alter = 18;
// String name = "Manuel"

// global definierte Variabel
// ist überall verfügbar

// p5js Variable definieren
let myXPosition = 20.0;
let myYPosition = 120.0;

let xSpeed = 2;
let ySpeed = 2;

let name = "Manuel";

function setup() {
  
  createCanvas(600, 400);
  frameRate(60);
  
  xSpeed = random(1, 10);
}

function draw() {
  
  background(220);
  
  ellipse(myXPosition, myYPosition, 30, 30);
  
  // "=" ist ein Zuweisungsoperator!
  myXPosition = myXPosition + xSpeed;
  //myYPosition = myYPosition + 1;
  
  
  // Vergleichsoperatoren
  // A > B -> Wenn A größer als B ist
  // A < B -> Wenn A kleiner als B ist
  // A >= B -> Wenn A größer oder gleich B ist
  // A <= B -> Wenn A kleiner oder gleich B ist
  // A == B -> Wenn A gleich B ist
  // A === B -> Wenn A gleich B ist und der Variabelntyp von A und B gleich ist
  // A != B -> Wenn A nicht gleich B ist
  
  
  // Verknüpfungsoperatoren
  // CONDITION_A && CONDITION_B --> Bedingung A und B müssen erfüllt sein
  // CONDITION_A || CONDITION_B --> mindestens eine Bedingung A oder B muss erfüllt sein
  
  // if Bedingung
  // if(CONDITION) 
  //  { wenn CONDIONT erfüllt ist
  //    führe alles zwischen den {} aus
  // }
  
  // einzeiliger Kommentar
  /* 
  mehrzeiliger
  Kommentar
  */ 
  /*if(myXPosition > 200) {
    //myXPosition = 0;
    xSpeed = -xSpeed;
  }
  
  if(myXPosition < 0) {
    //myXPosition = 0;
    xSpeed = -xSpeed;
  }*/
  
  if(myXPosition > 200 || myXPosition < 0) {
    //myXPosition = 0;
    xSpeed = -xSpeed;
  }
  
}