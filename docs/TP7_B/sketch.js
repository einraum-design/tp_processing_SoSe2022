let balkenArray = [320, 60, 560, 360, 23, 450, 290, 100];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  /*line(0, 0, mouseX, mouseY);
  line(10, 0, mouseX, mouseY);
  line(20, 0, mouseX, mouseY);
  line(30, 0, mouseX, mouseY);
  line(40, 0, mouseX, mouseY);
  line(50, 0, mouseX, mouseY);*/

  // WHILE SCHLEIFE
  // while(CONDITION) {
  //   führe den Block solange immer wieder aus, bis die Bedingung 
  //   nicht mehr true ist
  //}

  let counter = 0;
  while(counter <= width){
    // OUTPUT = map(INPUT, INPUT_START, INPUT_END, OUTPUT_START, OUTPUT_END);
    let redVal =  map(counter, 0, width, 255, 0);
    let blueVal = 255 - redVal; // map(counter, 0, width, 0, 255);
    stroke(redVal, redVal, blueVal);
    line(counter, 0, mouseX, mouseY);
    line(counter, height, mouseX, mouseY);
    counter = counter + 10;
  }

  let yPos = 0;
  while(yPos <= height){
    // OUTPUT = map(INPUT, INPUT_START, INPUT_END, OUTPUT_START, OUTPUT_END);
    let val =  map(yPos, 0, height, 255, 0);
    stroke(0, val, 255 - val);
    line(0, yPos, mouseX, mouseY);
    line(width, yPos, mouseX, mouseY);
    yPos = yPos + 10;
  }


  // FOR LOOP
  // for( COUNTERDEFINITION; CONDITION; INCREMENTOR){ ... }
  for(let i = 0; i<10; i = i+1){
    ellipse(i*50, height/2, 50, 50);
  }

  for(let index = 0; index < balkenArray.length; index++){
    rect( 50 + index*100, height - balkenArray[index], 50, balkenArray[index]);
    //rect( 150, height - balkenArray[1], 50, balkenArray[1]);
  }
}
