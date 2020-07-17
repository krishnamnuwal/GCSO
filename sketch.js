var car,wall;
var weight,speed
var car2;


function setup() {
  createCanvas(800,400);
  speed=random(55,80);
  weight=random(400,1500);

  car=createSprite(200,200,60,60);
  car.velocityX=speed;

  wall=createSprite(770,50,30,800);
  wall.shapeColor=color(80,80,80);

  car2=createSprite(200,50,60,60);
  car2.velocityX=speed;



}

function draw() {
  background(255,255,255);  
  drawSprites();
  car2.depth=1;


 collide(car,wall);
 collide(car2,wall);
  textSize(20);
  fill("blue");
 text("SPEED:"+speed,100,130);
 text("WEIGHT:"+weight,100,160);
}

function collide(object1,object2){
   if(object2.x-object1.x<(object1.width+object2.width)/2){
    object1.velocityX=0;
    var deformation=0.5*speed*speed*weight/22509;
    textSize(20);
    fill("blue");
    text("DEFORMATION:"+deformation,100,100);
    
   
    if(deformation>180){
      object1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      object1.shapeColor=color(230,230,0);
    } 
    if(deformation<100){
      object1.shapeColor=color(0,255,0);
    }
  }
}