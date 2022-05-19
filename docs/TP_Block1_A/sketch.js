let img;
let myfont;

// Bilder und Schriften in der preload laden
function preload(){
  img = loadImage("images/cat.jpg");
  myfont = loadFont("fonts/OleoScriptSwashCaps-Bold.ttf");
}

function setup() {
  // resize oder verarbeiten von Bildern erst in der setup()
  img.resize(img.width/2, img.height/2);
  let myapp = createCanvas(400, 400);
  // setze das canvas "myapp" als Kind von dem 
  // Element mit der id "myAppParent"
  myapp.parent("myAppParent");
}

function draw() {
  background(220);
  ellipse(random(width), random(height), 50, 50);

  

  // checken ob Bild in der Variable verfügbar ist
  if(img){
    image(img, 100, 100, img.width/2, img.height/2);
  }

  fill(255,255,0);

  textFont(myfont, 32);
  textAlign(CENTER, CENTER);
  text("Mein Text", width/2, height/2);
}
