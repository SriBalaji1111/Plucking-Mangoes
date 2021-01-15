const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree, rock ,ground, sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
    boy = loadImage("imgs/boy.png");
    tree = loadImage("imgs/tree.png")
    
  }

function setup() {
createCanvas(1370, 610);
engine = Engine.create();
world = engine.world;

rock = new Rock(235,420,30); 


mango1 = new Mango(1170,130,30);
mango2 = new Mango(1100,100,30);
mango3 = new Mango(1140,150,40);
mango4 = new Mango(1000,70,30);
mango5= new Mango(1100,70,30);
mango6 = new Mango(1000,230,30);
mango7 = new Mango(900,230,40);
mango8 = new Mango(900,160,40);
mango9 = new Mango(1010,140,30);
mango10 = new Mango(1200,200,40);
mango11 = new Mango(1120,50,40);



ground = new Ground(width/2,600,width,20);
sling = new Slingshot(rock.body,{x:240,y:460})  
Engine.run(engine);
 
}

function draw() {

    background("lightBlue");
    textSize(30);
    fill('purple');
    text("Press Space to get another stone to Play!!",50 ,50);

    image(boy ,200,380,200,300);
    image(tree , 750,0,600,600)
 

    rock.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
  
    rock.display();

    ground.display();

    sling.display();

}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
        Matter.Body.setPosition(rock.body, {x:235, y:420}) 
	    sling.attach(rock.body);
	}
}

function detectollision(body1,body2){

    var distance = distance(body1.x,body1.y,body2.x,body2.y)
    if (distance <= body2.r+ body1.r){
        Matter.Body.setStatic(lmango.body , false);
    } 
}
detectollision(rock,mango1);
detectollision(rock,mango2);
detectollision(rock,mango3);
detectollision(rock,mango4);
detectollision(rock,mango5);
detectollision(rock,mango6); 
detectollision(rock,mango7);
detectollision(rock,mango8);
detectollision(rock,mango9);
detectollision(rock,mango10);
detectollision(rock,mango11);
  