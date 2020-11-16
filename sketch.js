
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, Paper,Ground;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	dustbin=new bin(900,650);
	Paper=new paper(200,450,70);
	Ground=new ground(width/2,660,width,20);
	
	


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  
  Paper.display();
  Ground.display();
  dustbin.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
    
  	}
}




