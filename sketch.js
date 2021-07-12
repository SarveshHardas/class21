const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ball=Bodies.circle(200,200,20);
World.add(world,ball) 
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
 btn1=createImg("right.png")
 btn1.position(220,30)  
 btn1.size(50,50)
 btn1.mouseClicked(hForce)

 btn=createImg("up.png")
 btn.position(20,30)  
 btn.size(50,50)
 btn.mouseClicked(vForce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
}

function hforce()
{
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vforce()
{
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}