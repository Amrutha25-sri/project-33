var backI, snow, snowI


function preload (){
backI = loadImage("snow2.jpg");
snowI = loadImage("snow4.wep")
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  sNowGroup = new Group();
  
}

function draw() {
  background(backI);
  
  spawnSnow();

  drawSprites();
}

function spawnSnow (){
  if (frameCount % 40 === 0){
    snow = createSprite(Math.round(random(30,450)),0,1,1); 
    snow.addImage(snowI);
    snow.scale = 0.17;
    snow.velocityX = 0.5;
    snow.velocityY = 2;
    snow.lifetime = 290;
    sNowGroup.add(snow);
  }
}