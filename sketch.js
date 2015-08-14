var triangles = [];
var s = 30;   //set triangle height (the side)
var h = Math.ceil(Math.sqrt(Math.pow(s, 2)- Math.pow(s/2, 2)));

var canvasHeight = 600;
var canvasWidth = 1000;

var columns = Math.ceil(canvasWidth/(Math.ceil(h)));
var rows = Math.ceil(canvasHeight/s);

function setup(){
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('triangles')
    canvas.background(255);
    noStroke();
}
 
 
function draw() {
  
  fill('black');
  var x = 8*h;
  var y = 6*s;
  
  // ONE
  beginShape(); 
  vertex(h+x, y+(s/2));
  vertex(h+x, y+(4*s)+(s/2));
  vertex((2*h)+x, y+(s*5));
  vertex((2*h)+x, y);
  endShape(CLOSE);
  x = 12*h;
  y = 6*s; 
 
  // TWO
  beginShape();
  vertex(x, y+s);               // 1
  vertex(x, y+(2*s));           // 2 
  vertex((2*h)+x, y+s);         // 3
  vertex((3*h)+x, y+(s+(s/2))); // 4
  vertex(x, y+(3*s));           // 5
  vertex(x, y+(4*s));           // 6
  vertex((2*h)+x, y+(5*s));     // 7
  vertex((4*h)+x, y+(4*s));     // 8
  vertex((4*h)+x, y+(3*s));     // 9
  vertex((2*h)+x, y+(4*s));     // 10
  vertex(h+x, y+((3*s)+(s/2))); // 11
  vertex((4*h)+x, y+(s*2));     // 12
  vertex((4*h)+x, y+s);         // 13
  vertex((2*h)+x, y);           // 14
  endShape(CLOSE);
  x = 20*h;
  y = 6*s; 

  // // ZERO
  beginShape();
  vertex(x, y+s);               // 1
  vertex(x, y+(4*s));           // 6
  vertex((2*h)+x, y+(5*s));     // 7
  vertex((4*h)+x, y+(4*s));     // 8
  vertex((4*h)+x, y+s);         // 13
  vertex((2*h)+x, y);           // 14
  endShape(CLOSE);
  fill(255);
  beginShape();
  vertex(h+x, y+s+(s/2)); // 4
  vertex(h+x, y+(s*3)+(s/2)); // 4
  vertex((2*h)+x, y+(4*s));
  vertex((3*h)+x, y+(s*3)+(s/2));
  vertex((3*h)+x, y+s+(s/2)); // 4
  vertex((2*h)+x, y+s);
  endShape(CLOSE);
  
  x = 26*h;
  y = 6*s; 

  // NINE
  fill(0);
  beginShape();
  vertex(x, y+s);               // 1
  vertex(x, y+(2*s));           // 2 
  vertex((2*h)+x, y+(3*s));     // 3
  vertex((3*h)+x, y+(s*2)+(s/2)); // 4
  vertex((3*h)+x, y+(s*3)+(s/2)); // 4
  vertex((2*h)+x, y+(4*s));       // 5
  vertex(x, y+(3*s));             // 6
  vertex(x, y+(4*s));             // 7
  vertex((2*h)+x, y+(5*s));     // 8
  vertex((4*h)+x, y+(4*s));     // 9
  vertex((4*h)+x, y+s);         // 10
  vertex((2*h)+x, y);           // 11
  endShape(CLOSE);
  fill(255);
  quad(h+x, y+s+(s/2),          // 12
    (2*h)+x, y+(2*s),           // 13
    (3*h)+x, y+(s+(s/2)),       // 14
    (2*h)+x, y+s);              // 15
  
  
  // quad(h+x, y+s+(s/2), 
  //   (2*h)+x, y+(2*s), 
  //   (3*h)+x, y+(s+(s/2)), 
  //   (2*h)+x, y+s);

  // EIGHT
  // beginShape();
  // vertex(x, y+s);                 // 1
  // vertex(x, y+(2*s));             // 2 
  // vertex(h+x, y+(2*s+(s/2)));     // 3
  // vertex(x, y+(3*s));             // 4
  // vertex(x, y+(4*s));             // 5
  // vertex((2*h)+x, y+(5*s));       // 6
  // vertex((4*h)+x, y+(4*s));       // 7
  // vertex((4*h)+x, y+(3*s));       // 8
  // vertex((3*h)+x, y+(s*2)+(s/2)); // 9
  // vertex((4*h)+x, y+(s*2));       // 10
  // vertex((4*h)+x, y+s);           // 11
  // vertex((2*h)+x, y);             // 12
  // endShape(CLOSE);
  // fill(255);
  // quad(h+x, y+((3*s)+(s/2)), 
  //   (2*h)+x, y+(4*s), 
  //   (3*h)+x, y+((3*s)+(s/2)), 
  //   (2*h)+x, y+(s*3));
  // quad(h+x, y+s+(s/2), 
  //   (2*h)+x, y+(2*s), 
  //   (3*h)+x, y+(s+(s/2)), 
  //   (2*h)+x, y+s);

  // // SEVEN
  // beginShape();
  // vertex(x, y+s);
  // vertex(x, y+(2*s));             // 2 
  // vertex((2*h)+x, y+s);           // 3
  // vertex((3*h)+x, y+(s+(s/2)));   // 4
  // vertex((3*h)+x, y+(s*2+(s/2))); // 5
  // vertex(x, y+(4*s));             // 6
  // vertex(x, y+(5*s));             // 7
  // vertex((4*h)+x, y+(3*s));       // 8
  // vertex((4*h)+x, y+s);           // 9
  // vertex((2*h)+x, y);             // 10
  // endShape(CLOSE);

  // //SIX
  // beginShape();
  // vertex(x, y+s);               // 1
  // vertex(x, y+(4*s));           // 2
  // vertex((2*h)+x, y+(5*s));     // 3
  // vertex((4*h)+x, y+(4*s));     // 4
  // vertex((4*h)+x, y+(3*s));     // 5
  // vertex((2*h)+x, y+(2*s));     // 6
  // vertex(h+x, y+(s*2)+(s/2));   // 7
  // vertex(h+x, y+s+(s/2));       // 8
  // vertex((2*h)+x, y+s);         // 9 
  // vertex((4*h)+x, y+(s*2));     // 10
  // vertex((4*h)+x, y+s);         // 11
  // vertex((2*h)+x, y);           // 12
  // endShape(CLOSE);
  // fill(255);
  // beginShape();
  // vertex(h+x, y+(s*3)+(s/2));   // 13
  // vertex((2*h)+x, y+(4*s));     // 14
  // vertex((3*h)+x, y+(3*s)+(s/2)); // 15
  // vertex((2*h)+x, y+(3*s));     // 16
  // endShape(CLOSE);


  // // THREE
  // beginShape();
  // vertex(x, y+s);                 // 1
  // vertex(x, y+(2*s));             // 2
  // vertex((2*h)+x, y+s);           // 3
  // vertex((3*h)+x, y+(s+(s/2)));   // 4
  // vertex(h+x, y+(s*2)+(s/2));     // 5
  // vertex((3*h)+x, y+(s*3)+(s/2)); // 6
  // vertex((2*h)+x, y+(4*s));       // 7
  // vertex(x, y+(3*s));             // 8
  // vertex(x, y+(4*s));             // 9
  // vertex((2*h)+x, y+(5*s));       // 10
  // vertex((4*h)+x, y+(4*s));       // 11
  // vertex((4*h)+x, y+(3*s));       // 12
  // vertex((3*h)+x, y+(s*2)+(s/2)); // 13
  // vertex((4*h)+x, y+(s*2));       // 14
  // vertex((4*h)+x, y+s);           // 15
  // vertex((2*h)+x, y);             // 16
  // endShape(CLOSE);

  // FIVE
  // beginShape();                  // 1
  // vertex(x, y+s);                // 2
  // vertex(x, y+(2*s));            // 3
  // vertex(h+x, y+(s*2)+(s/2));    // 4
  // vertex(h+x, y+s+(s/2));        // 5
  // vertex((2*h)+x, y+s);          // 6 
  // vertex((4*h)+x, y+(s*2));      // 7
  // vertex((4*h)+x, y+s);          // 8
  // vertex((2*h)+x, y);            // 9
  // endShape(CLOSE);     
  // beginShape()
  // vertex(h+x, y+(s*2)+(s/2));    // 10
  // vertex((3*h)+x, y+(s*3)+(s/2));// 11
  // vertex((2*h)+x, y+(4*s));      // 12
  // vertex(x, y+(3*s));            // 13
  // vertex(x, y+(4*s));            // 14
  // vertex((2*h)+x, y+(5*s));      // 15
  // vertex((4*h)+x, y+(4*s));      // 16
  // vertex((4*h)+x, y+(3*s));      // 17
  // vertex((2*h)+x, y+(2*s));      // 18
  // endShape(CLOSE);

  // // FOUR
  // beginShape();
  // vertex(x, y);                   // 1
  // vertex(x, y+(s*3));             // 2
  // vertex((2*h)+x, y+(4*s));       // 3
  // vertex((3*h)+x, y+(s*3)+(s/2)); // 4
  // vertex((3*h)+x, y+(s*4)+(s/2)); // 5
  // vertex((4*h)+x, y+(s*5));       // 6
  // vertex((4*h)+x, y);             // 7
  // vertex((3*h)+x, y+(s/2));       // 8
  // vertex((3*h)+x, y+(s*2)+(s/2)); // 9
  // vertex((2*h)+x, y+(s*3));       // 10
  // vertex(h+x, y+(s*2)+(s/2));     // 11
  // vertex((2*h)+x, y+(s*3));       // 12
  // vertex(h+x, y+(s*2)+(s/2));     // 13
  // vertex(h+x, y+(s/2));           // 14
  // endShape(CLOSE); 

  for(var i = 0; i <= columns; i++){
    if (i % 2 == 0){
      buildTriangles(h*i, 0, 1);
    }
    else {
      buildTriangles(h*i, (s/2)*-1, 1);
    }
  }
console.log(second())
}
 
function buildTriangles (_x, _y){
  var x = _x;
  var y = _y;
  var count = 0;
  
    for (var i = 0; i <= rows; i++){ // Draws the EAST oriented column of triangles
      
      noFill();
      strokeWeight(1);
      stroke(130);
      Triangle(x, y, x, y+s, x+h, y+(s/2));
      triangle(x, y, x, y+s, x+h, y+(s/2));      
      Triangle(x, y, x, y+s, x+(h*-1), y+(s/2));
      y += s ;
    }
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

