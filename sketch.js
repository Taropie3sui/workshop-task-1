let x = 0;
let move = 3

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background( '#fae');

  if (x > width){
    move = -3;
  }
  else if (x < 0){
    move = 3;
  }

  fill (12,178,168);
  rect (x,222,23,34);
  
x = x + move;
}