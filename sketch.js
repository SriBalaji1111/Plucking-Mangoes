
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;

function preload()
{
	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,485,1000,20)

	tree = new Tree(800,240,500,500)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  tree.display();
 
}



