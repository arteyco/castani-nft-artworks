let R;
let points_2 = [];
let points_0 = [];
let points = [];
let tileWidth = 25;
let tileHeight = 25;
let spacer = 20;
let f = 0;

function setup() {
  smooth();
  createCanvas(displayWidth, displayHeight, WEBGL);
  for (let x = 0; x < width-20; x += tileWidth * 3) {
    for (let y = 0; y < height-20; y += tileHeight * 3) {
      points.push(new LinePoints(x, y, tileWidth, tileHeight));
      points_2.push(new LinePoints(x, y, tileWidth, tileHeight));
    }
  }
  for (let t = 0; t < 8; t += spacer) {
    points_0.push(new LinePoints_0(t, spacer));
  }
  
}

function draw() {
  R = random;
  background(0);
  f++;
   for(x=-width/3;x<width;x+=55){
  for(y=-height/3;y<height;y+=25){
     let n3 = sin(frameCount * 0.01) * 100;
        stroke(random(255), random(255), random(255));
    strokeWeight(random(0.7,2.9));
    point(x+n3,y);
 
  }
}

  strokeWeight(R(0.1, 1.7));
  stroke(R(250), R(250), R(150));

  noFill();

  for (var q of points_2) {
    point(q.x, q.y);
    push();
    strokeWeight(R(0.1, 3.9));
    stroke("#03A9F4");
    translate(-width / 2, -height / 2, 40);

    point(q.x - 30, q.y - 30);
    pop();
  }

  erase();
  for (let k = 0; k < 8; k++) {
    rotateY((f = frameCount * 0.04));
    rotateX((f = frameCount * 0.02));
    translate(0, 0, 40);
    stroke(R(255), R(255), R(255));   
    //line(-45, 40, -85, -40);
    line(-200, 80, -240, -70);
    push();
    strokeWeight(R(0.5, 9.6));
    stroke(R(250), R(250), R(150));
    point(k + 10, 200);
    point(200, k + 10);
    pop();
    stroke(R(255), R(255), R(255));   
    
    line(-120, 110, -200, -110);
    stroke(R(250), R(250), R(150));   
     
    line(-150, 90, -220, -90);
    stroke(R(255), R(255), R(255));
    triangle(30, 75, 58, 20, 86, 75);
    triangle(70, 115, 98, 60, 126, 115);
  }
  rotateY(frameCount * 0.02);
  

  for (var m of points) {
    point(m.x, m.y);
    push();
    strokeWeight(R(0.1, 5.9));
    stroke("red");
    
    point(m.x + tileWidth / 2, m.y - tileHeight / 2);
    
    pop();
  }

  for (var g of points_0) {
    push();
    strokeWeight(R(0.2, 17));
    stroke("aqua");
    point(g.t + spacer, width/8);
    point(height/4, g.t + spacer);
    
    pop();
  }

  noErase();
 
}

class LinePoints {
  constructor(x, y, tileWidth, tileHeight) {
    this.x = x;
    this.y = y;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }
}

class LinePoints_0 {
  constructor(t, spacer) {
    this.t = t;
    this.spacer = spacer;
  }
  
}
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
