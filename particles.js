class Particles{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.2
        }
       this.body=Bodies.circle(x,y,8,options)
       this.radius=radius;
       this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body) 
   }

   display(){
       var pos=this.body.position;
       var ang=this.body.angle;
       push()
       translate(pos.x,pos.y)
       rotate(ang)
       noStroke()
       fill(this.color)
       ellipseMode(RADIUS)
       ellipse(0,0,this.radius,this.radius)
       pop()
   }
}