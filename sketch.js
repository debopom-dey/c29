
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //fill(255,192,203)
  block1= new Box(500,500,30,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  block1.display();
 // drawSprites();
 
}