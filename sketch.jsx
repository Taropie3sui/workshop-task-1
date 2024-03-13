function setup() {
  createCanvas(400, 600);
}

function draw() {
  background( '#fae');

arrow(200, 150, 30, [255,10,10]);
}

function arrow(xPos, yPos, stories, colour){
  fill(colour);
  rect(xPos, yPos, 50, 100);


  triangle(xPos-30, yPos, xPos+80, yPos,  xPos + 24, yPos-45);
}