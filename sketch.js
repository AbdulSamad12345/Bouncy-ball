const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ground_opt;

var ball, ball_opt;

function setup(){

  createCanvas(600,600);
  engine = Engine.create();
  world=engine.world;

  ground_opt = {
    isStatic:true
  }
  ground = Bodies.rectangle(300,570,600,100,ground_opt);

  World.add(world,ground);

  ball_opt={
    restitution:1
  }
  ball = Bodies.circle(300,300,60,ball_opt);

  World.add(world,ball);
}

function draw(){

  Engine.update(engine);

  background("black");
  fill("yellow");

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,60);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,100);
  
  
}









