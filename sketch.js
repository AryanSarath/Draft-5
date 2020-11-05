const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var surface;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	push ();
	fill (255);
	surface = createSprite(400,310,110,20);
	pop ();

	//Create the Bodies Here.
	bob1 = new Bob(400,350,50);
	bob2 = new Bob(455,350,50);
	bob3 = new Bob(510,350,50);
	bob4 = new Bob(345,350,50);
	bob5 = new Bob(290,350,50);

	rope1 = new Rope(bob1, {x:400, y: 310});
	rope2 = new Rope(bob2, {x:455, y: 310});
	rope3 = new Rope(bob3, {x:510, y: 310});
	rope4 = new Rope(bob4, {x:345, y: 310});
	rope5 = new Rope(bob5, {x:290, y: 310});

	Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}



