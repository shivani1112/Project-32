const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;
var ground1,ball,slingshot;
var score;
var backgroundImg;


function preload() {
  getBackgroundImg();

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(300,200,180,20);
  
  

  

  box1 = new Box(340,150,20,30);
  box2 = new Box(240,150,20,30);
  box3 = new Box(260,150,20,30);
  box4 = new Box(280,150,20,30);
  box5 = new Box(300,150,20,30);
  box6 = new Box(320,150,20,30);

  box7 = new Box(260,180,20,30);
  box8 = new Box(280,180,20,30);
  box9 = new Box(300,180,20,30);
  box10 = new Box(320,180,20,30);

  box11 = new Box(280,140,20,30);
  box12 = new Box(300,140,20,30);

  box13 = new Box(290,110,20,30);
  
  ball = new Ball(100,150,30);
 
  slingshot = new SlingShot(ball.body,{x:100,y:150});
  score = 0;
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  textSize(30);
  text("Score : " + score,300,50);
  ground1.display();
  
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 box11.score();
 box12.score();
 
 ball.display();
 slingshot.display();

 
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 
 }
 function mouseReleased(){
     slingshot.fly();
 
 }

 function keyPressed(){

  if(keyCode === 32){
     slingshot.attach(ball.body);
  }
 }

 async function getBackgroundImg(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13); 
  if(hour >=06 && hour <= 15){
     bg = "bg1.jpg";
  }else {
      bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
    
  
}