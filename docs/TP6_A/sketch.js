// neues Array ohne Inhalt -> Kennzeichnung mit []
let myArray = [];

let myNamesArray = ["Otto", "Anna", "Franz", "Linda", "Marion"];
let namesIndex = 0;



// Objekte werden mit {} definiert
let myObject = {};
myObject.name = "petra";
myObject["alter"] = "23";
myObject.groesse = 175;

let myButtonObject = {
  xPos: 300,
  yPos: 100,
  w: 100,
  h: 50,
};

function preload(){
  myObject.image = loadImage("images/petra.jpg");
}

function setup() {
  createCanvas(400, 400);

  myNamesArray[0] = "Frederik";
}

function draw() {
  background(220);

  fill(0);
  text(myNamesArray[namesIndex], 100, 100);

  image(myObject.image, 300, 0);
}

function mousePressed(){
  namesIndex = namesIndex + 1;
  if(namesIndex >= myNamesArray.length){
    namesIndex = 0;
  }
  // namesIndex ++;
  // namesIndex += 1
}

function keyPressed(){
  myNamesArray.push("Petra");
}
