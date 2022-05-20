
// Array Variable wird mit [] definiert
let myArray = [];

let myNamesArray = ["Stefan", "Tom", "Frieda", "Susanne", "Eva"];
let namesIndex = 0;

// Objekte werden mit {} gekennzeichent
let myObject = {};
myObject.name = "Gustav";
myObject.alter = 27;
myObject.groesse = 172;
// Attribute über eckige Klammern hinzufügen:
myObject["haarfarbe"] = "blond";


let button = {
  xPos: 10,
  yPos: 200,
  w: 100,
  h: 50,
  status: false,
}

let img;

function preload(){
  img = loadImage("images/gustav.jpg");
}
function setup() {
  img.resize(img.width/4, img.height/4);
  myObject.image = img;

  // myObject.image.resize(300, 300);

  createCanvas(400, 400);

  myNamesArray[0] = "Peter";
}

function draw() {
  background(220);

  fill(0);
  text(myNamesArray[namesIndex], 200, 50);

  text(myObject.name, 200, 200);
  image(myObject.image, 200,300);

  rect(button.xPos, button.yPos, button.w, button.h);
}

function mousePressed(){
  namesIndex = namesIndex + 1;
  // namesIndex += 1;
  // namesIndex ++;


  if(namesIndex >= myNamesArray.length){
    namesIndex = 0;
  }
}

function keyPressed(){
  if(key == 'a'){
    myNamesArray.push("Oskar");
  } else if(key == 'b'){
    myNamesArray.push("Elfriede");
  } else if (keyCode === UP_ARROW) {
    myNamesArray.push("Mario");
  }
}
