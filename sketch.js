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
    console.log(second());
}
 
function draw() {
  var d = new Date();
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours();
  console.log(seconds);
  
  drawGrid();
  // position 1
  var sTens = (seconds %  100 / 10 | 0);
  var sOnes = (seconds % 10);
  var mTens = (minutes %  100 / 10 | 0);
  var mOnes = (minutes %  10);
  var hTens = (hours %  100 / 10 | 0);
  var hOnes = (hours % 10)
  console.log(s);
  compose(26, 5, sTens);
  compose(32, 5, sOnes);  //position 2
  compose(20, 5, mOnes);
  compose(14, 5, mTens);
  compose(2, 5, hTens);
  compose(8, 5, hOnes);
}

function compose(_x, _y, n) {
  fill('black');
  switch(n) {
    case 0:
      Zero(_x, _y);
      break;
    case 1:
      One(_x, _y);
      break;
    case 2:
      Two(_x, _y);
      break;
    case 3:
      Three(_x, _y);
      break;
    case 4:
      Four(_x, _y);
      break;
    case 5:
      Five(_x, _y);
      break;
    case 6:
      Six(_x, _y);
      break;
    case 7:
      Seven(_x, _y);
      break;
    case 8:
      Eight(_x, _y);
      break;
    case 9:
      Nine(_x, _y);
      break;
  }
}

function drawGrid(){

for(var i = 0; i <= columns; i++){
  if (i % 2 == 0){
    buildTriangles(h*i, 0); // Orient the triangles right 
  }
  else {
    buildTriangles(h*i, (s/2)*-1);  // Orient the triangles left
  }
}
// fill('green');
// triangle(triangles[0].x1, triangles[0].y1, triangles[0].x2, triangles[0].y2, triangles[0].x3, triangles[0].y3);

}
 
function buildTriangles (_x, _y){
  var x = _x;
  var y = _y;
  var count = 0;
  
    for (var i = 0; i <= rows; i++){ // Draws the EAST oriented column of triangles
      
      fill('white');
      strokeWeight(1);
      stroke(130);
      Triangle(x, y, x, y+s, x+h, y+(s/2));
      // fill('black');
      triangle(x, y, x, y+s, x+h, y+(s/2));      
      Triangle(x, y, x, y+s, x+(h*-1), y+(s/2));
      // fill('red');
      triangle(x, y, x, y+s, x+(h*-1), y+(s/2));    
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

function Zero (_x, _y){
  var x = _x*h;
  var y = _y*s; 

  // // ZERO
  fill('black');
  beginShape();
  vertex(x, y+s);              
  vertex(x, y+(4*s));          
  vertex((2*h)+x, y+(5*s));    
  vertex((4*h)+x, y+(4*s));    
  vertex((4*h)+x, y+s);        
  vertex((2*h)+x, y);          
  endShape(CLOSE);
  fill(255);
  
  beginShape();
  vertex(h+x, y+s+(s/2));           // 7
  vertex(h+x, y+((3*s)+(s/2)));     // 8
  vertex((2*h)+x, y+(4*s));         // 9
  vertex((3*h)+x, y+((3*s)+(s/2))); // 10
  vertex((3*h)+x, y+s+(s/2));       // 11
  vertex((2*h)+x, y+s);             // 12
  endShape(CLOSE);
  strokeWeight(1);
  stroke(130);
  line(h+x, y+s+(s/2), (3*h)+x, y+((2*s)+(s/2)));       // 11)
  line(h+x, y+((2*s)+(s/2)), (3*h)+x, y+((3*s)+(s/2)));
  line((3*h)+x, y+s+(s/2), h+x, y+((2*s)+(s/2)));
  line((3*h)+x, y+((2*s)+(s/2)), h+x, y+((3*s)+(s/2)));
  line((2*h)+x, y+s, (2*h)+x, y+(4*s));
  noFill();
  beginShape();
  vertex(h+x, y+s+(s/2)); 
  vertex(h+x, y+(s*3)+(s/2));
  vertex((2*h)+x, y+(4*s));
  vertex((3*h)+x, y+(s*3)+(s/2));
  vertex((3*h)+x, y+s+(s/2));
  vertex((2*h)+x, y+s);
  endShape(CLOSE);
};

function One (_x, _y){
  var x = _x*h;
  var y = _y*s;
  
  fill('black');
  // ONE
  beginShape(); 
  vertex(h+x, y+(s/2));
  vertex(h+x, y+(4*s)+(s/2));
  vertex((2*h)+x, y+(s*5));
  vertex((2*h)+x, y);
  endShape(CLOSE); 
};

function Two (_x, _y){
  var x = _x*h;
  var y = _y*s; 
  fill('black')

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
};

function Three (_x, _y){
  var x = _x*h;
  var y = _y*s; 
 
  // // THREE
  beginShape();
  vertex(x, y+s);                 // 1
  vertex(x, y+(2*s));             // 2
  vertex((2*h)+x, y+s);           // 3
  vertex((3*h)+x, y+(s+(s/2)));   // 4
  vertex(h+x, y+(s*2)+(s/2));     // 5
  vertex((3*h)+x, y+(s*3)+(s/2)); // 6
  vertex((2*h)+x, y+(4*s));       // 7
  vertex(x, y+(3*s));             // 8
  vertex(x, y+(4*s));             // 9
  vertex((2*h)+x, y+(5*s));       // 10
  vertex((4*h)+x, y+(4*s));       // 11
  vertex((4*h)+x, y+(3*s));       // 12
  vertex((3*h)+x, y+(s*2)+(s/2)); // 13
  vertex((4*h)+x, y+(s*2));       // 14
  vertex((4*h)+x, y+s);           // 15
  vertex((2*h)+x, y);             // 16
  endShape(CLOSE);
};

function Four (_x, _y){
  var x = _x*h;
  var y = _y*s; 

  fill('black');
  // // FOUR
  beginShape();
  vertex(x, y);                   // 1
  vertex(x, y+(s*3));             // 2
  vertex((2*h)+x, y+(4*s));       // 3
  vertex((3*h)+x, y+(s*3)+(s/2)); // 4
  vertex((3*h)+x, y+(s*4)+(s/2)); // 5
  vertex((4*h)+x, y+(s*5));       // 6
  vertex((4*h)+x, y);             // 7
  vertex((3*h)+x, y+(s/2));       // 8
  vertex((3*h)+x, y+(s*2)+(s/2)); // 9
  vertex((2*h)+x, y+(s*3));       // 10
  vertex(h+x, y+(s*2)+(s/2));     // 11
  vertex((2*h)+x, y+(s*3));       // 12
  vertex(h+x, y+(s*2)+(s/2));     // 13
  vertex(h+x, y+(s/2));           // 14
  endShape(CLOSE); 
};

function Five (_x, _y){
  var x = _x*h;
  var y = _y*s; 

  // FIVE
  beginShape();                  // 1
  vertex(x, y+s);                // 2
  vertex(x, y+(2*s));            // 3
  vertex(h+x, y+(s*2)+(s/2));    // 4
  vertex(h+x, y+s+(s/2));        // 5
  vertex((2*h)+x, y+s);          // 6 
  vertex((4*h)+x, y+(s*2));      // 7
  vertex((4*h)+x, y+s);          // 8
  vertex((2*h)+x, y);            // 9
  endShape(CLOSE);     
  beginShape()
  vertex(h+x, y+(s*2)+(s/2));    // 10
  vertex((3*h)+x, y+(s*3)+(s/2));// 11
  vertex((2*h)+x, y+(4*s));      // 12
  vertex(x, y+(3*s));            // 13
  vertex(x, y+(4*s));            // 14
  vertex((2*h)+x, y+(5*s));      // 15
  vertex((4*h)+x, y+(4*s));      // 16
  vertex((4*h)+x, y+(3*s));      // 17
  vertex((2*h)+x, y+(2*s));      // 18
  endShape(CLOSE);
};

function Six (_x, _y){
  var x = _x*h;
  var y = _y*s; 

  // //SIX
  beginShape();
  vertex(x, y+s);               // 1
  vertex(x, y+(4*s));           // 2
  vertex((2*h)+x, y+(5*s));     // 3
  vertex((4*h)+x, y+(4*s));     // 4
  vertex((4*h)+x, y+(3*s));     // 5
  vertex((2*h)+x, y+(2*s));     // 6
  vertex(h+x, y+(s*2)+(s/2));   // 7
  vertex(h+x, y+s+(s/2));       // 8
  vertex((2*h)+x, y+s);         // 9 
  vertex((4*h)+x, y+(s*2));     // 10
  vertex((4*h)+x, y+s);         // 11
  vertex((2*h)+x, y);           // 12
  endShape(CLOSE);
  fill(255)
  triangle(h+x, y+(s*3)+(s/2), (2*h)+x, y+(4*s), (2*h)+x, y+(3*s));
  triangle((2*h)+x, y+(3*s), (2*h)+x, y+(4*s), (3*h)+x, y+(3*s)+(s/2))
};

function Seven (_x, _y){
  var x = _x*h;
  var y = _y*s; 

  // // SEVEN
  beginShape();
  vertex(x, y+s);
  vertex(x, y+(2*s));             // 2 
  vertex((2*h)+x, y+s);           // 3
  vertex((3*h)+x, y+(s+(s/2)));   // 4
  vertex((3*h)+x, y+(s*2+(s/2))); // 5
  vertex(x, y+(4*s));             // 6
  vertex(x, y+(5*s));             // 7
  vertex((4*h)+x, y+(3*s));       // 8
  vertex((4*h)+x, y+s);           // 9
  vertex((2*h)+x, y);             // 10
  endShape(CLOSE);
};

function Eight (_x, _y){
  var x = _x*h;
  var y = _y*s; 

  // EIGHT
  beginShape();
  vertex(x, y+s);                 // 1
  vertex(x, y+(2*s));             // 2 
  vertex(h+x, y+(2*s+(s/2)));     // 3
  vertex(x, y+(3*s));             // 4
  vertex(x, y+(4*s));             // 5
  vertex((2*h)+x, y+(5*s));       // 6
  vertex((4*h)+x, y+(4*s));       // 7
  vertex((4*h)+x, y+(3*s));       // 8
  vertex((3*h)+x, y+(s*2)+(s/2)); // 9
  vertex((4*h)+x, y+(s*2));       // 10
  vertex((4*h)+x, y+s);           // 11
  vertex((2*h)+x, y);             // 12
  endShape(CLOSE);
  fill(255);
  triangle(h+x, y+s+(s/2), (2*h)+x, y+(2*s), (2*h)+x, y+s);
  triangle((2*h)+x, y+s, (2*h)+x, y+(2*s), (3*h)+x, y+(s+(s/2)));
  triangle(h+x, y+(s*3)+(s/2), (2*h)+x, y+(4*s), (2*h)+x, y+(3*s));
  triangle((2*h)+x, y+(3*s), (2*h)+x, y+(4*s), (3*h)+x, y+(3*s)+(s/2));
};

function Nine (_x, _y){
  var x = _x*h;
  var y = _y*s;

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
  triangle(h+x, y+s+(s/2), (2*h)+x, y+(2*s), (2*h)+x, y+s);
  triangle((2*h)+x, y+s, (2*h)+x, y+(2*s), (3*h)+x, y+(s+(s/2)));
}