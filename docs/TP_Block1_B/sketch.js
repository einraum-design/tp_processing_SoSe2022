let myImage;
let myFont;

function preload(){
  myImage = loadImage("images/cat.jpg");
  myFont = loadFont("fonts/PressStart2P-Regular.ttf");
}

function setup() {
  myImage.resize(100, 100);
  let app = createCanvas(400, 400);
  app.parent("myP5JSApp");


}

function draw() {
  background(220);

  image(myImage, mouseX, mouseY);

  textFont(myFont, 32);
  textAlign(CENTER, CENTER);
  text("Miaow", width/2, height/2);

  //image(myImage, mouseX, mouseY, myImage.width/3.0, myImage.height/3.0);
}
