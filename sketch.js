
var fixedrectangle,movingrectangle
var object,object2

function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 50, 50);
  movingrectangle=createSprite(250,300,50,50);
  fixedrectangle.shapeColor="blue"
  movingrectangle.shapeColor="blue"

  object=createSprite(200,250,50,50)
  object.shapeColor="green"

  object2=createSprite(250,300,50,50)
  object2.shapeColor="green"
}

function draw() {
  background(0); 
  drawSprites();
 

  movingrectangle.y=mouseY;
  movingrectangle.x=mouseX;

  if(isTouching(fixedrectangle,movingrectangle)){
     fixedrectangle.shapeColor="red"

     movingrectangle.shapeColor="red"  
}
else{
  fixedrectangle.shapeColor="blue"
  movingrectangle.shapeColor="blue"

}

if(isTouching(movingrectangle,object)){
 object.shapeColor="orange"; 
}

if(isTouching(movingrectangle,object2)){
  object2.shapeColor="black"; 
 }

}

 