let x = 100;
let y = 200;
let w = 50;
let h = 100;

let status = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    if (mouseIsPressed) {
      fill(120, 0, 0);

      // hier in der draw() wird der status 60 mal / Sekunde umgeschaltet
      /*if(status){
        status = false;
      } else {
        status = true;
      }*/
    } else {
      fill(255, 0, 0);
    }
  } else {
    fill(0, 255, 0);
  }

  if (status) {
    fill(255, 0, 255);
  }

  rect(x, y, w, h);
}

// Event handler
function mousePressed() {
  console.log("click");
  console.log("test");
  print("click");

  if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    if (status) {
      status = false;
    } else {
      status = true;
    }
  }
  
  console.log("status: " + status);
}