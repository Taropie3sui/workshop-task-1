// let x = 0;
// let move = 3

// function setup() {
//   createCanvas(400, 600);
// }

// function draw() {
//   background( '#fae');

//   if (x > width){
//     move = -3;
//   }
//   else if (x < 0){
//     move = 3;
//   }

//   fill (12,178,168);
//   rect (x,222,23,34);
  
// x = x + move;
// }

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