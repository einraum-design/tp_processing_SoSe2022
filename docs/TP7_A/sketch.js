let balkenArray = [20, 400, 560, 129, 190, 432];

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

  // WHILE LOOP
  // while(CONDITION){ 
  //  wiederhole den Block immer wieder,
  //  solange die Bedingung true ist
  // }

  let counter = 0;
  while(counter <= width){
    let redVal = map(counter, 0, width, 255, 0);
    let blueVal = 255 - redVal;
    stroke(redVal, 0, blueVal);
    line(counter, 0, mouseX, mouseY);

    line(counter, height, mouseX, mouseY);
    counter += 10;
  }

  let yPos = 0;
  while(yPos <= height){
    let redVal = map(yPos, 0, height, 255, 0);
    let greenVal = 255 - redVal;
    stroke(redVal, greenVal, 0);
    line(0, yPos, mouseX, mouseY);
    line(width, yPos, mouseX, mouseY);
    yPos += 10;
  }


  let random1 = random(10);
  let random2 = random(10);
  while(random1 == random2){
    random2 = random(10);
  }



  // FOR LOOP
  //for(COUNTER_DEFINITION; CONDITION; INCREMENTOR){}
  for(let i = 0; i<10; i += 1){
    ellipse(i*50, height/2, 50, 50);
  }

  // für jeden Wert im Array einen Balken zeichnen
  for(let index = 0; index < balkenArray.length; index++){
    rect(50 + index*100, height - balkenArray[index], 50, balkenArray[index]);
  }

}
