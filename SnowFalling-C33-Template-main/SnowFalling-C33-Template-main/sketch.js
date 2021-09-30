var sped;
var snow, back;
var backimg;
var r;
function preload(){
  backimg=loadImage("snow1.jpg");
}
function setup() {
  sped=1;
  createCanvas(800,400);

}
function draw() {
  background(0);  
  image(backimg,0,0,800,400);
  snow=createSprite(random(0,width),0,1,1)
  snow.velocityY=sped;
  snow.lifetime=height/sped;
  snow.shapeColor=(255)
  drawSprites();
}