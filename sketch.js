const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygonImage;

function preload()
{
  polygonImage = loadImage("polygon.png")
}

function setup() {
    createCanvas(1200, 700);

	  engine = Engine.create();
    world = engine.world;


    ground = new Platform(600,680,1200,20);
    platform = new Platform(600,500,250,20);
    box1 = new Box(525,475,50,50);
    box2 = new Box(575,475,50,50);
    box3 = new Box(625,475,50,50);
    box4 = new Box(675,475,50,50);
    box5 = new Box(550,425,50,50);
    box6 = new Box(600,425,50,50);
    box7 = new Box(650,425,50,50);
    box8 = new Box(575,375,50,50);
    box9 = new Box(625,375,50,50);
    box10 = new Box(600,325,50,50);
    polygon = new Polygon(200,350,40,40);
    sling = new SlingShot(polygon.body,{x:200,y:350});
	Engine.run(engine);
  
}


function draw(){
  Engine.update(engine);
  rectMode(CENTER);
  background("brown");
  ground.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  sling.display();
  push();
  imageMode(CENTER);
  image(polygonImage,polygon.body.position.x, polygon.body.position.y,40,40);
  pop();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}

