class Brick{

    constructor(x,y,w,h){
    
    var options = {
    
     'isStatic' : false, 
    'mass' : 2.0,
    'restitution' : 0,
    'friction' : 1.5
    
    }
    
    this.body = Matter.Bodies.rectangle(x,y,w,h,options);
    this.brickimage = loadImage("brick.png");
    this.w = w;
    this.h = h;
    World.add(world,this.body);
    
    }
    
    
    
    display(){
    
      var pos = this.body.position;
console.log(this.body.speed);
    if(this.body.speed<7){  
     rectMode(CENTER); 
    rect(pos.x,pos.y,this.radius,this.radius);
    imageMode(CENTER);    
    image(this.brickimage,pos.x,pos.y,65,65);
    }
  else {

World.remove(world,this.body);
push ();
this.Visibility = this.Visibility - 5;
tint (255,this.Visibility);
image(this.brickimage,pos.x,pos.y,65,65);
pop ();

  }    
    
    }
        
    } 

   
     