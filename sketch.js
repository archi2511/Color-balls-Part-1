var back;
var rect1,rect2,rect3;
var rect4,rect5,rect6;
var ground,blacky;
//var blacky,whity;
//var blackBall,blackGrp;
//<script src="p5.js"></script> line 6

function preload (){
  back = loadImage ("images/sky.jpg");
  
}

function setup(){
  createCanvas(600,700);
  rect1 = createSprite (100,625,20,120);
  rect2 = createSprite(155,685,128,20);
  rect3 = createSprite (210,625,20,120);
  rect4 = createSprite(400,685,128,20);
  rect5 = createSprite(345,625,20,120);
  rect6 = createSprite(455,625,20,120);
  ground = createSprite (300,695,600,10);
  //blackGrp = new Group();
}


function draw(){
  background(back);

  //Creating dotted line or the thresh-hold
  for (var i=0; i < 650; i=i+20) {
    line(i,550,i+5,550);
  }
  
  rect1.shapeColor = "black";
  rect2.shapeColor = "black";
  rect3.shapeColor = "black";
  ground.shapeColor = "cyan";
  rect4.shapeColor = "white";
  rect5.shapeColor = "white";
  rect6.shapeColor = "white";

  //spawnBlack();
  drawSprites();
}

/*function spawnBlack (){

    if(frameCount % 50===0) {
      blackBall = createSprite (random(50,500),-10,20,20);
      blackBall.shapeColor = "black";
     blackBall.velocityY = 1.5;
     blackGrp.add(blackBall);
    
  }
  
}*/

/*function mousePressed(){
console.log("hi");
  blackBall.visibility = false;
}*/
