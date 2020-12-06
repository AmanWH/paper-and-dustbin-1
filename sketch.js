var ground,ball,dustbinL1,dustbinL2,dustbinL3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20);
ball=new Ball(200,200,20);
dustbinL1=new dustbin(650,675,200,10);
dustbinL2=new dustbin(550,600,10,150)
dustbinL3=new dustbin(750,600,10,150);

	Engine.run(engine);

}


function draw() {
  background(0);
  ground.display();
  ball.display();
  dustbinL1.display();
  dustbinL2.display();
  dustbinL3.display();
 fill("yellow")
  drawSprites();
  keypressed();
}

function keypressed(){
if(keyDown(UP_ARROW)){

Matter.Body.applyForce(ball.body,ball.body.position,{x:4,y:-8})}

}

