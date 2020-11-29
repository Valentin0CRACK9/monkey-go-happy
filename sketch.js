var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  
  
  monkey = createSprite(50,159,5,5);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  banana = createSprite(600,99,5,5);
  banana.addImage(bananaImage);
  banana.scale = 0.05
  banana.velocityX = -7
  
  ground = createSprite(300,200,600,20)
  ground.shapeColor = "black"

  
  
  obstacle = createSprite(600,172,5,5)
  obstacle.addImage(obstacleImage)
  obstacle.scale = 0.1
  obstacle.velocityX = -7
  
  
  
  
}


function draw() {
background(180);
  
  
  if(keyDown("space")&& monkey.y >= 159) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  
  
  
  monkey.collide(ground)
  
  drawSprites();
}






