const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine,world,body,ground
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(240,795,580,10)
  for(var k=0;k<=width;k=k+80) {
   divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }


  
  
}

function draw() {
  background(0,0,0);  
  drawSprites();
  ground.display();
  Engine.update(engine);
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }

    for(var i=0;i<particles.length;i++){
      particles[i].display();
    }
}