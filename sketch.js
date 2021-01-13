
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


	Engine.run(engine);

	rock=new Stone(400,350,50,50)
	mango1=new Mango(200,250,50,50)
	mango2=new Mango(230,250,50,50)
	mango3=new Mango(260,250,50,50)
	mango4=new Mango(200,250,50,50)
	mango5=new Mango(310,250,50,50)
	mango6=new Mango(340,250,50,50)
	plant=new Tree(400,200,50,50)
	man=new Boy(400,250,100,100)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rock.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  plant.display()
  man.display()
  drawSprites();
 
}



