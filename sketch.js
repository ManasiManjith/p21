
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
  	world = engine.world;
	
	ground = new Ground(200,400,400,20);
	leftSide = new Ground(150,400,10,200);
	rightSide = new Ground(250,400,10,200);

	var ball_options={
		isStatic:false,
		restitution:0.2,
		friction:0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(100,100,20,{restitution:1})
	World.add(world,ball)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
  
  ground.display();
  leftSide.display()
  rightSide.display()
 
}

function Hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }
  function Vforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  }

function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.02})
	
}