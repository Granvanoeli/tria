
var mySketch = function(scope) {
  var triangles = [];
  var s = 20;   //set triangle height (the side)
  var h = Math.ceil(Math.sqrt(Math.pow(s, 2)- Math.pow(s/2, 2)));

  var canvasHeight = $(window).height();
  var canvasWidth = $(window).width();

  var columns = Math.ceil(canvasWidth/(Math.ceil(h)));
  var rows = Math.ceil(canvasHeight/s);

  scope.setup = function () {
      scope.createCanvas(canvasWidth, canvasHeight);
      scope.background(255);
  }
   
  scope.draw = function () {
    var d = new Date();
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hours = d.getHours();

    scope.drawGrid();
    // scope.illunminate();
    // position 1
    var sTens = (seconds %  100 / 10 | 0);
    var sOnes = (seconds % 10);
    var mTens = (minutes %  100 / 10 | 0);
    var mOnes = (minutes %  10);
    var hTens = (hours %  100 / 10 | 0);
    var hOnes = (hours % 10)
    scope.compose(26, 5, sTens);
    scope.compose(32, 5, sOnes);  //position 2
    scope.compose(20, 5, mOnes);
    scope.compose(14, 5, mTens);
    scope.compose(2, 5, hTens);
    scope.compose(8, 5, hOnes);
  }

  scope.compose = function(_x, _y, n) {
    scope.fill('black');
    switch(n) {
      case 0:
        scope.Zero(_x, _y);
        break;
      case 1:
        scope.One(_x, _y);
        break;
      case 2:
        scope.Two(_x, _y);
        break;
      case 3:
        scope.Three(_x, _y);
        break;
      case 4:
        scope.Four(_x, _y);
        break;
      case 5:
        scope.Five(_x, _y);
        break;
      case 6:
        scope.Six(_x, _y);
        break;
      case 7:
        scope.Seven(_x, _y);
        break;
      case 8:
        scope.Eight(_x, _y);
        break;
      case 9:
        scope.Nine(_x, _y);
        break;
    }
  }

  scope.drawGrid = function() {

    for(var i = 0; i <= columns; i++){
        if (i % 2 == 0){
          scope.buildTriangles(h*i, 0); // Orient the triangles right 
        }
        else {
          scope.buildTriangles(h*i, (s/2)*-1);  // Orient the triangles left
        }
    }
  }

  scope.illunminate = function() {
    for(var i = 0; i<= 2000; i++){
        scope.fill('green');
        scope.triangle(triangles[i].x1, triangles[i].y1, triangles[i].x2, triangles[i].y2, triangles[i].x3, triangles[i].y3);
        scope.fill('white');
        scope.triangle(triangles[i].x1, triangles[i].y1, triangles[i].x2, triangles[i].y2, triangles[i].x3, triangles[i].y3);

    }
  }
   
  scope.buildTriangles = function(_x, _y) {
    var x = _x;
    var y = _y;
    var count = 0;
    
      for (var i = 0; i <= rows; i++){ // Draws the EAST oriented column of triangles
        
        scope.fill('white');
        scope.strokeWeight(1);
        scope.stroke(130);
        scope.Triangle(x, y, x, y+s, x+h, y+(s/2));
        // scope.fill('black');
        scope.triangle(x, y, x, y+s, x+h, y+(s/2));      
        scope.Triangle(x, y, x, y+s, x+(h*-1), y+(s/2));
        // scope.fill('red');
        scope.triangle(x, y, x, y+s, x+(h*-1), y+(s/2));    
        y += s ;
      }
  }

  scope.Triangle = function(_x1, _y1, _x2, _y2, _x3, _y3) {
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

  scope.Zero = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 

    // // ZERO
    scope.fill('black');
    scope.beginShape();
    scope.vertex(x, y+s);              
    scope.vertex(x, y+(4*s));          
    scope.vertex((2*h)+x, y+(5*s));    
    scope.vertex((4*h)+x, y+(4*s));    
    scope.vertex((4*h)+x, y+s);        
    scope.vertex((2*h)+x, y);          
    scope.endShape(scope.CLOSE);
    scope.fill(255);
    
    scope.beginShape();
    scope.vertex(h+x, y+s+(s/2));           // 7
    scope.vertex(h+x, y+((3*s)+(s/2)));     // 8
    scope.vertex((2*h)+x, y+(4*s));         // 9
    scope.vertex((3*h)+x, y+((3*s)+(s/2))); // 10
    scope.vertex((3*h)+x, y+s+(s/2));       // 11
    scope.vertex((2*h)+x, y+s);             // 12
    scope.endShape(scope.CLOSE);
    scope.strokeWeight(1);
    scope.stroke(130);
    scope.line(h+x, y+s+(s/2), (3*h)+x, y+((2*s)+(s/2)));       // 11)
    scope.line(h+x, y+((2*s)+(s/2)), (3*h)+x, y+((3*s)+(s/2)));
    scope.line((3*h)+x, y+s+(s/2), h+x, y+((2*s)+(s/2)));
    scope.line((3*h)+x, y+((2*s)+(s/2)), h+x, y+((3*s)+(s/2)));
    scope.line((2*h)+x, y+s, (2*h)+x, y+(4*s));
    scope.noFill();
    scope.beginShape();
    scope.vertex(h+x, y+s+(s/2)); 
    scope.vertex(h+x, y+(s*3)+(s/2));
    scope.vertex((2*h)+x, y+(4*s));
    scope.vertex((3*h)+x, y+(s*3)+(s/2));
    scope.vertex((3*h)+x, y+s+(s/2));
    scope.vertex((2*h)+x, y+s);
    scope.endShape(scope.CLOSE);
  };

  scope.One = function(_x, _y) {
    var x = _x*h;
    var y = _y*s;
    
    scope.fill('black');
    // ONE
    scope.beginShape(); 
    scope.vertex(h+x, y+(s/2));
    scope.vertex(h+x, y+(4*s)+(s/2));
    scope.vertex((2*h)+x, y+(s*5));
    scope.vertex((2*h)+x, y);
    scope.endShape(scope.CLOSE); 
  };

  scope.Two = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 
    scope.fill('black')

    // TWO
    scope.beginShape();
    scope.vertex(x, y+s);               // 1
    scope.vertex(x, y+(2*s));           // 2 
    scope.vertex((2*h)+x, y+s);         // 3
    scope.vertex((3*h)+x, y+(s+(s/2))); // 4
    scope.vertex(x, y+(3*s));           // 5
    scope.vertex(x, y+(4*s));           // 6
    scope.vertex((2*h)+x, y+(5*s));     // 7
    scope.vertex((4*h)+x, y+(4*s));     // 8
    scope.vertex((4*h)+x, y+(3*s));     // 9
    scope.vertex((2*h)+x, y+(4*s));     // 10
    scope.vertex(h+x, y+((3*s)+(s/2))); // 11
    scope.vertex((4*h)+x, y+(s*2));     // 12
    scope.vertex((4*h)+x, y+s);         // 13
    scope.vertex((2*h)+x, y);           // 14
    scope.endShape(scope.CLOSE);
  };

  scope.Three = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 
   
    // // THREE
    scope.beginShape();
    scope.vertex(x, y+s);                 // 1
    scope.vertex(x, y+(2*s));             // 2
    scope.vertex((2*h)+x, y+s);           // 3
    scope.vertex((3*h)+x, y+(s+(s/2)));   // 4
    scope.vertex(h+x, y+(s*2)+(s/2));     // 5
    scope.vertex((3*h)+x, y+(s*3)+(s/2)); // 6
    scope.vertex((2*h)+x, y+(4*s));       // 7
    scope.vertex(x, y+(3*s));             // 8
    scope.vertex(x, y+(4*s));             // 9
    scope.vertex((2*h)+x, y+(5*s));       // 10
    scope.vertex((4*h)+x, y+(4*s));       // 11
    scope.vertex((4*h)+x, y+(3*s));       // 12
    scope.vertex((3*h)+x, y+(s*2)+(s/2)); // 13
    scope.vertex((4*h)+x, y+(s*2));       // 14
    scope.vertex((4*h)+x, y+s);           // 15
    scope.vertex((2*h)+x, y);             // 16
    scope.endShape(scope.CLOSE);
  };

  scope.Four = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 

    scope.fill('black');
    // // FOUR
    scope.beginShape();
    scope.vertex(x, y);                   // 1
    scope.vertex(x, y+(s*3));             // 2
    scope.vertex((2*h)+x, y+(4*s));       // 3
    scope.vertex((3*h)+x, y+(s*3)+(s/2)); // 4
    scope.vertex((3*h)+x, y+(s*4)+(s/2)); // 5
    scope.vertex((4*h)+x, y+(s*5));       // 6
    scope.vertex((4*h)+x, y);             // 7
    scope.vertex((3*h)+x, y+(s/2));       // 8
    scope.vertex((3*h)+x, y+(s*2)+(s/2)); // 9
    scope.vertex((2*h)+x, y+(s*3));       // 10
    scope.vertex(h+x, y+(s*2)+(s/2));     // 11
    scope.vertex((2*h)+x, y+(s*3));       // 12
    scope.vertex(h+x, y+(s*2)+(s/2));     // 13
    scope.vertex(h+x, y+(s/2));           // 14
    scope.endShape(scope.CLOSE); 
  };

  scope.Five = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 

    // FIVE
    scope.beginShape();                  // 1
    scope.vertex(x, y+s);                // 2
    scope.vertex(x, y+(2*s));            // 3
    scope.vertex(h+x, y+(s*2)+(s/2));    // 4
    scope.vertex(h+x, y+s+(s/2));        // 5
    scope.vertex((2*h)+x, y+s);          // 6 
    scope.vertex((4*h)+x, y+(s*2));      // 7
    scope.vertex((4*h)+x, y+s);          // 8
    scope.vertex((2*h)+x, y);            // 9
    scope.endShape(scope.CLOSE);     
    scope.beginShape()
    scope.vertex(h+x, y+(s*2)+(s/2));    // 10
    scope.vertex((3*h)+x, y+(s*3)+(s/2));// 11
    scope.vertex((2*h)+x, y+(4*s));      // 12
    scope.vertex(x, y+(3*s));            // 13
    scope.vertex(x, y+(4*s));            // 14
    scope.vertex((2*h)+x, y+(5*s));      // 15
    scope.vertex((4*h)+x, y+(4*s));      // 16
    scope.vertex((4*h)+x, y+(3*s));      // 17
    scope.vertex((2*h)+x, y+(2*s));      // 18
    scope.endShape(scope.CLOSE);
  };

  scope.Six = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 

    // //SIX
    scope.beginShape();
    scope.vertex(x, y+s);               // 1
    scope.vertex(x, y+(4*s));           // 2
    scope.vertex((2*h)+x, y+(5*s));     // 3
    scope.vertex((4*h)+x, y+(4*s));     // 4
    scope.vertex((4*h)+x, y+(3*s));     // 5
    scope.vertex((2*h)+x, y+(2*s));     // 6
    scope.vertex(h+x, y+(s*2)+(s/2));   // 7
    scope.vertex(h+x, y+s+(s/2));       // 8
    scope.vertex((2*h)+x, y+s);         // 9 
    scope.vertex((4*h)+x, y+(s*2));     // 10
    scope.vertex((4*h)+x, y+s);         // 11
    scope.vertex((2*h)+x, y);           // 12
    scope.endShape(scope.CLOSE);
    scope.fill(255)
    scope.triangle(h+x, y+(s*3)+(s/2), (2*h)+x, y+(4*s), (2*h)+x, y+(3*s));
    scope.triangle((2*h)+x, y+(3*s), (2*h)+x, y+(4*s), (3*h)+x, y+(3*s)+(s/2))
  };

  scope.Seven = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 

    // // SEVEN
    scope.beginShape();
    scope.vertex(x, y+s);
    scope.vertex(x, y+(2*s));             // 2 
    scope.vertex((2*h)+x, y+s);           // 3
    scope.vertex((3*h)+x, y+(s+(s/2)));   // 4
    scope.vertex((3*h)+x, y+(s*2+(s/2))); // 5
    scope.vertex(x, y+(4*s));             // 6
    scope.vertex(x, y+(5*s));             // 7
    scope.vertex((4*h)+x, y+(3*s));       // 8
    scope.vertex((4*h)+x, y+s);           // 9
    scope.vertex((2*h)+x, y);             // 10
    scope.endShape(scope.CLOSE);
  };

  scope.Eight = function(_x, _y) {
    var x = _x*h;
    var y = _y*s; 

    // EIGHT
    scope.beginShape();
    scope.vertex(x, y+s);                 // 1
    scope.vertex(x, y+(2*s));             // 2 
    scope.vertex(h+x, y+(2*s+(s/2)));     // 3
    scope.vertex(x, y+(3*s));             // 4
    scope.vertex(x, y+(4*s));             // 5
    scope.vertex((2*h)+x, y+(5*s));       // 6
    scope.vertex((4*h)+x, y+(4*s));       // 7
    scope.vertex((4*h)+x, y+(3*s));       // 8
    scope.vertex((3*h)+x, y+(s*2)+(s/2)); // 9
    scope.vertex((4*h)+x, y+(s*2));       // 10
    scope.vertex((4*h)+x, y+s);           // 11
    scope.vertex((2*h)+x, y);             // 12
    scope.endShape(scope.CLOSE);
    scope.fill(255);
    scope.triangle(h+x, y+s+(s/2), (2*h)+x, y+(2*s), (2*h)+x, y+s);
    scope.triangle((2*h)+x, y+s, (2*h)+x, y+(2*s), (3*h)+x, y+(s+(s/2)));
    scope.triangle(h+x, y+(s*3)+(s/2), (2*h)+x, y+(4*s), (2*h)+x, y+(3*s));
    scope.triangle((2*h)+x, y+(3*s), (2*h)+x, y+(4*s), (3*h)+x, y+(3*s)+(s/2));
  };

  scope.Nine = function(_x, _y) {
    var x = _x*h;
    var y = _y*s;

    // NINE
    scope.fill(0);
    scope.beginShape();
    scope.vertex(x, y+s);               // 1
    scope.vertex(x, y+(2*s));           // 2 
    scope.vertex((2*h)+x, y+(3*s));     // 3
    scope.vertex((3*h)+x, y+(s*2)+(s/2)); // 4
    scope.vertex((3*h)+x, y+(s*3)+(s/2)); // 4
    scope.vertex((2*h)+x, y+(4*s));       // 5
    scope.vertex(x, y+(3*s));             // 6
    scope.vertex(x, y+(4*s));             // 7
    scope.vertex((2*h)+x, y+(5*s));     // 8
    scope.vertex((4*h)+x, y+(4*s));     // 9
    scope.vertex((4*h)+x, y+s);         // 10
    scope.vertex((2*h)+x, y);           // 11
    scope.endShape(scope.CLOSE);
    scope.fill(255);
    scope.triangle(h+x, y+s+(s/2), (2*h)+x, y+(2*s), (2*h)+x, y+s);
    scope.triangle((2*h)+x, y+s, (2*h)+x, y+(2*s), (3*h)+x, y+(s+(s/2)));
  }

};

var myp5 = new p5(mySketch, 'triangles');
