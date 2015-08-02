var triangles = [];
var triangleHeight = 50;   //set triangle height (the side)
var triangleWidth = Math.ceil(Math.sqrt(Math.pow(triangleHeight, 2)- Math.pow(triangleHeight/2, 2)));

var canvasHeight = 500;
var canvasWidth = 500;

var columns = Math.ceil(canvasWidth/(Math.ceil(triangleWidth)));
var rows = Math.ceil(canvasHeight/triangleHeight);

function setup(){
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('triangles')
    canvas.background(230);
    noStroke();
}
 
 
function draw() {
  for(var i = 0; i <= columns; i++){
    if (i % 2 == 0){
      buildTriangles(triangleWidth*i, 0, 1);
    }
    else {
      buildTriangles(triangleWidth*i, (triangleHeight/2)*-1, 1);
    }
  }
  console.log(triangles);
  fill('red');
  triangle(triangles[25].x1, triangles[25].y1, triangles[25].x2, triangles[25].y2, triangles[25].x3, triangles[25].y3);
  var x = triangleWidth*8;
  var y = triangleHeight*2;
  // ONE
  beginShape(); 
  vertex(x, y);
  vertex(x, y+(6*triangleHeight));
  vertex(x+triangleWidth, y+(6*(triangleHeight))+(triangleHeight/2));
  vertex(x+triangleWidth, y+(triangleHeight/2));
  endShape(CLOSE);

  // TWO


  // One
  // 1. (x, y)
  // 2. (x, (y+6s))
  // 3. ((x+h), (y+6s+1/2))
  // 4. ((x+h), s/2)

  // Two
  //  1. (x, y+s)
  //  2. (x, y+2s)
  //  3. (2h+x, y+s)
  //  4. (3h+x, y+s+1/2s)
  //  5. (x, y+3s)
  //  6. (x, y+4s)
  //  7. (2h+x, y+5s)
  //  8. (4h+x, y+4s)
  //  9. (4h+x, y+3s)
  // 10. (2h+x, y+4s)

    textSize(10);
    fill(0);
  text('4', triangleHeight/2, (triangleWidth/2));
}
 
function buildTriangles (_x, _y){
  var x = _x;
  var y = _y;
  var count = 0;
  
    for (var i = 0; i <= rows; i++){ // Draws the EAST oriented column of triangles
      
      fill(250);
      Triangle(x, y, x, y+triangleHeight, x+triangleWidth, y+(triangleHeight/2));
      triangle(x, y, x, y+triangleHeight, x+triangleWidth, y+(triangleHeight/2));
      textSize(10);
      fill(0);
      text(i, x + (triangleWidth/2), (y+triangleHeight));
      fill(130); 
      Triangle(x, y, x, y+triangleHeight, x+(triangleWidth*-1), y+(triangleHeight/2));
      triangle(x, y, x, y+triangleHeight, x+(triangleWidth*-1), y+(triangleHeight/2));
      // fill(0);  
      // text(i, x + (triangleWidth/2), (y+triangleHeight));
      // console.log(x, y, x, y+triangleHeight, x+triangleWidth, y+(triangleHeight/2));
      y += triangleHeight ;
    }
  noLoop();
}

function Triangle (_x1, _y1, _x2, _y2, _x3, _y3){
  var t = {
    x1: _x1,
    y1: _y1,
    x2: _x2,
    y2: _y2,
    x3: _x3,
    y3: _y3
  }
  triangles.push(t);
}

