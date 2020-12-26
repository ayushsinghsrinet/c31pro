 const Engine=Matter.Engine;
 const  World=Matter.World;
 const Bodies=Matter.Bodies;

 var engine,world;

 //falling ball
 var test1=[]
 
 //to give random x position to test or falling ball
 var ballrandom

 //createcanvas 
 var t
var ok;
var obstacle=[]
var buck=[]
var buck2=[]
var ground
 function setup() {
     t=createCanvas(500,600)
     engine=Engine.create()
     world=engine.world

     var sta={
         isStatic:true
     }
     ground=Bodies.rectangle(250,590,500,30,sta)
     World.add(world,ground)
     ballrandom=random(5,10)

     for(var j=50;j<=width-30;j=j+60){
         obstacle.push(new st(j,55,5))
     }
     for(var j=30;j<=width-30;j=j+60){
        obstacle.push(new st(j,105,5))
    }
    for(var j=45;j<=490;j=j+60){
        obstacle.push(new st(j,155,5))
    }
    for(var j=35;j<=490;j=j+60){
        obstacle.push(new st(j,205,5))
    }
    for(var j=50;j<=490;j=j+60){
        obstacle.push(new st(j,255,5))
    }

  
     for(var n=10;n<=490;n=n+60){
         buck.push(new bucket(n,520,10,150))
     }
   
  
 }

 function draw(){
     Engine.update(engine)
     background(0)
    

   
    
  if(frameCount%50===0){
      test1.push(new ball (random(width/2-400,width/2+400),0,5))
     
  }
  for(var i=0;i<test1.length;i++){
      test1[i].display()
  }

  for(var j=0;j<obstacle.length;j++){
    obstacle[j].display()
}
for(var n=0;n<buck.length;n++){
    buck[n].display()
}
rectMode(CENTER)
rect(ground.position.x,ground.position.y,500,20)

 }