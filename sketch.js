
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// const Body = Matter.Body;

var engine,world;
var paper1;
var dustbin1;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    paper1= new Paper(200,400,40);
    ground = new Ground(0,height,1800,20);
    dustbin1= new Dustbin(10,400,50,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 dustbin1.display();
 ground.display();
 paper1.display();

}



