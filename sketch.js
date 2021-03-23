const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var divisions = [];
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup(){
    //var canvas = 
    createCanvas(480, 750);
    
    engine = Engine.create();
    world = engine.world;

   //box1 = new Box(100,697,50,50);
   border1 = new Ground2(240,748,480,15);
  // border2 = new Ground2(240,2  ,480,15);
   border3 = new Ground2(2  ,375,15, 750);
   border4 = new Ground2(478,375,15,750);

   ground = new Ground(240,735,460,15);
  //line = new Ground(240,480,width,10);

   for(var i = 0; i <= 480; i = i + 80 ) {
    divisions.push(new divisionBar(i,750-300/2,10,300));
}
for(var k = 40; k <= 470; k= k+50) {
    plinkos.push(new Plinko(k,75));
}
for(var k = 70; k<= 460; k=k+50) {
plinkos.push(new Plinko(k,175));
}
for(var k = 40;k<=480;k=k+50) {
    plinkos.push(new Plinko(k,275));
}
for(var k = 90;k<=400;k=k+50) {
plinkos.push(new Plinko(k,375));
}


/*for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }*/

    /*bar2 = new Ground((1150+1350)/2,698,200,20);
    bar3 = new Ground(1350,650,15,100);*/
    
    
}

 

function draw() {
    background(0);
    Engine.update(engine);
    textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  border1.display();
   // border2.display();
    border3.display();
    border4.display();
    
   /* dBar1.display();
    dBar2.display();
    dBar3.display();
    dBar4.display();*/
    ground.display();
    if ( gameState =="END") {
    
        textSize(100);
        text("GameOver", -5, 250);
        //return
      } 
      for(var k = 0; k < plinkos.length; k++) {
       plinkos[k].display();
    }

    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>700)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
    
 //   box1.display();
   
    
  
 for (var i = 0; i < divisions.length; i++) {
     
    divisions[i].display();
  }
  
    
    
     //   divisions.display();
   // divisions.display();
    /*bar1.display();
    bar2.display();
    bar3.display(); */
   
    
   // particles.display();

}
function mousePressed() {
    if(gameState !== "END") {
        count++;
    particle = new Particle(mouseX, 50, 10, 10);
    }
}




