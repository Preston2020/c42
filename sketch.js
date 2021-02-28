var x = 10.43;
var y = 11; 
var name = "Preston"
var z = x + y;
var a = true;
var b = null;
var PLAY = 1;
var gameState = "serve";
var gameState1 = PLAY;
var obj;
var clouds;
var cloudimg;
var bird;
var birdimg;
console.log(b);

function preload() {
  cloudimg = loadImage("clouds.png");
  birdimg = loadImage("bird.png");
}

function setup(){
  createCanvas(1200,600);
  obj = createSprite(80,140,20,20);

  clouds = createSprite(400,400,20,20);
  clouds.addImage("clouds", cloudimg);
  clouds.scale = 0.5;
  clouds.velocityX = 5;

  bird = createSprite(500,300,20,20);
  bird.addImage("birdimage", birdimg);
  bird.scale = 0.2;
  bird.velocityX = 5;

  c1 = new Class1(50,80);
}

function draw(){
  background("green")

  if(clouds.x > 800){
    clouds.x = 500;
  }

  if(keyDown("UP_ARROW")){
    bird.velocityX = 0;
    bird.velocityY = -5;
  }
  bird.velocityY += 2;
  

  drawSprites()

  swapping();

  c1.display()
}

function swapping(){
  var b = Math.round(random(10,100));
  console.log(b);
  switch(b){
    case 10: console.log("preston")
    break;
    case 20: console.log("kyle");
    break;
    default:console.log("ric")
  }
}



/*for(i = 0; i<10; i++){
  console.log(name+i)
}

while(x < 11){
  console.log();
  i++
}

if(x>y){
  console.log(a)
} else {
  a = false;
  console.log(a)
}

console.log(z);*/