
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustpaper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   dustpaper=new dustbin(100,270,30);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustpaper.display();
  
  drawSprites();
 
}



