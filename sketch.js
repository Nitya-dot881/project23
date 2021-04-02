var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box1;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	box1=createSprite(width/2, 590, 20,150);
    box1.shapeColor="red"

	box2=createSprite(590, 590, 20,150);
    box2.shapeColor="red"

	box3=createSprite(490, 650, 200,20);
    box3.shapeColor="red"


	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.7

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false)
    
  }

else if (keyCode === RIGHT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    helicopterSprite.x=helicopterSprite.x+5
	translation={x:5,y:0}
	Matter.Body.translate(packageBody,translation)

  }
  else if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    helicopterSprite.x=helicopterSprite.x-5
	translation={x:-5,y:0}
	Matter.Body.translate(packageBody,translation)

  }
  

    
}

