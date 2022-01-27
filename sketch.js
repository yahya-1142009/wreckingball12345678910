const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14, ground;
var ball, rope;

function setup() {
  createCanvas(850, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Box(300, 380, 850, 20);
  Matter.Body.setStatic(ground.body,true);
  
  box1 = new Box(200, 100, 50, 50);
  box2 = new Box(200, 100, 50, 50);
  box3 = new Box(200, 100, 50, 50);

  box4 = new Box(300, 100, 50, 50);
  box5 = new Box(300, 100, 50, 50);
  box6 = new Box(300, 100, 50, 50);
  box7 = new Box(300, 100, 50, 50);
  box8 = new Box(300, 100, 50, 50);
  box9 = new Box(300, 100, 50, 50);
  
  box10 = new Box(400, 100, 50, 50);
  box11 = new Box(400, 100, 50, 50);
  box12 = new Box(400, 100, 50, 50);
  box13 = new Box(400, 100, 50, 50);
  box14 = new Box(400, 100, 50, 50);

  ball = new Ball(100, 200, 80, 80);
  console.log(ball);
  rope = new Rope(ball.body, { x: 100, y: 50 });



}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  
  rope.display();
  ball.display();
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


