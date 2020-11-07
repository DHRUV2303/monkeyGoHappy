
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

var invisibleGround;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);

  monkey = createSprite(70, 300, 10, 10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  //monkey.setCollider("circle",0,100,150);
  //monkey.debug = true;
  
  ground = createSprite(400, 380, 900, 50);
  ground.shapeColor = "darkgreen";
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  ground.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
  invisibleGround = createSprite(400, 370, 900, 10);
  
 
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}



function draw() {
background("lightblue");
  ground.x = ground.width /2;
  
  bananas();
  stoneObstacles();
  
  //monkey.collide(ground);
  monkey.collide(invisibleGround);
  
  invisibleGround.visible = false;
  
  if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -15;
       }
  
 
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
 drawSprites();
}

function bananas(){
  
  if(frameCount%100 === 0){
    
    banana = createSprite(600, 250, 40, 10);
    banana.y = random(80, 120);
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.lifetime = 300;
    banana.scale = 0.1;
    FoodGroup.add(banana);
  }
  
   FoodGroup.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
}

function stoneObstacles(){
  
  
  if(frameCount% 200 === 0){
    
    obstacle = createSprite(600, 380, 10, 10);
    obstacle.y = random(325, 325);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 300;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }
  
  
   //monkey.collide(obstacleGroup);
}





