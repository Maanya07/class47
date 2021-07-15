var gameState= 0;
var girl
var pirate1;
var pirate2;
var invisibleGround;
var gem;
var bombGroup,bomb1Group;
var score=0;
function preload(){
  girlImg1= loadAnimation("Girlfinal1.png","Girlfinal2.png");
  dayBg= loadImage ("daybg.jpg")
  instructions=loadImage("instructions (1).png")
  backGroundEnd=loadImage("gameOver.jpeg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  form= new Form();
 
  girl=createSprite(60, height-350,50,50);
  girl.addAnimation("girl1", girlImg1);
  pirate1= createSprite(width- 100, height/2, 50,50)
  pirate2=createSprite(windowWidth/2-250, windowHeight/2 +180, 50, 50);
  invisibleGround= createSprite (width/2, height-180, width, 10);
  invisibleGround.visible=false;
  gem=createSprite(width-200,height-150,30,30);
  coin=createSprite(windowWidth-200,500,15,15);
  coin.shapeColor="black"
  coin1=createSprite(windowWidth-400,600,15,15);
  coin1.shapeColor="black"

  bombGroup=new Group();
  bomb1Group= new Group();
  
}

function draw() {
  background("lightBlue");  
 
  image(instructions,40,60);
  girl.collide(invisibleGround);
  pirate1.collide(invisibleGround);
  form.display();
  if(gameState===1){
  image(dayBg, 0, 0, width,height);
  textSize(20);
  fill('black');
  text('score :'+score, windowWidth-200,100);
  drawSprites();
  bombs();
  bomb1();
  if(girl.isTouching(gem)|| girl.isTouching(coin)||girl.isTouching(coin1)){
  score=score+200;
  }
  if(bombGroup.isTouching(girl)){
   gameState=2;
  }
  if(bomb1Group.isTouching(girl)){
    gameState=2
  }

  if( keyDown(RIGHT_ARROW)){
    girl.x=girl.x+2;
  }
 if (keyDown('SPACE')){
   girl.velocityY= -5;
 }
  girl.velocityY=girl.velocityY+0.5;


 
}
if (gameState===2){
  image(backGroundEnd, 0, 0, width,height);

}
}


function bombs(){
  if(frameCount%200===0){
  var bomb= createSprite(pirate1.x,pirate1.y,15,15);
  bomb.velocityX= -6;
  bombGroup.add(bomb);
  
  }
}
function bomb1(){
  if(frameCount%300===0){
  var bomb1= createSprite(pirate2.x,pirate2.y,15,15);
  bomb1.velocityX= -6;
  bomb1.velocityY=1;
  bomb1Group.add(bomb1)
;  
  }
}