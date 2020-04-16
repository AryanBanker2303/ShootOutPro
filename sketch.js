const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig3;
var backgroundImg, platform;
var pBox, slingshot;

var gameState = "onSling";

;

function preload() {
  
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  ground2 = new Ground(850,150,400,10);
  platform = new Ground(150, 305, 300, 170);

  box1 = new Box(700, 80, 70, 70);
  box2 = new Box(920, 80, 70, 70);
  box3 = new Box(700, 0, 70, 70);
  box4 = new Box(920, 0, 70, 70);




 pBox = new PBox(200, 50);

  //log6 = new Log(230,180,80, PI/2);
  slingshot = new SlingShot(pBox.body, { x: 200, y: 50 });
}

function draw() {
 background("green")

  noStroke();
  textSize(35);
  fill("white");
  text("Remove all the boxes from the screen",500,40);
 
  Engine.update(engine);
  //strokeWeight(4);
  box1.display();
  box2.display();
  ground.display();
  box3.display();
  box4.display(); 
ground2.display();
  pBox.display();
  platform.display();
  //log6.display();
  slingshot.display();
}

function mouseDragged() {
  //if (gameState!=="launched"){
  Matter.Body.setPosition(pBox.body, { x: mouseX, y: mouseY });
  //}
}

function mouseReleased() {
  slingshot.fly();
  gameState = "launched";
}

function keyPressed() {
  if (keyCode === 32) {
   
    Matter.Body.setPosition(pBox.body, { x: 200, y: 50 });
    slingshot.attach(pBox.body);
  }
}


