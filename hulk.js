class Hulk{

constructor(x,y,w,h){

var options={

'isStatic'    : false,
'restitution' : 0,
'friction'    : 1.2,
'density'     : 1.2

}

this.body = Matter.Bodies.rectangle(x,y,w,h,options);
this.hulkimage = loadImage("hulk.png");
this.w = w;
this.h = h;
World.add(world,this.body);

}

display(){

var pos = this.body.position;   
rectMode(CENTER);
rect(pos.x,pos.y,this.w,this.h);    
imageMode(CENTER);    
image(this.hulkimage,pos.x,pos.y,60,60);


}


}