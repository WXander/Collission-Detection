var fixedRect, movingRect

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200,200,70,50);
  movingRect = createSprite(100,100,50,70);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}
function draw() {
  background(0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  // sum of the half of the width of the rects  
  console.log(movingRect.width/2+fixedRect.width/2);
  // difference of the x position of moving Rect and the fixed one
  console.log(movingRect.x - fixedRect.x);

   if (movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.y - movingRect.y <= movingRect.height/2+fixedRect.height/2
    && movingRect.y - fixedRect.y <= movingRect.height/2+fixedRect.height/2
    ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
   }
   else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
   }
  
  drawSprites();
}