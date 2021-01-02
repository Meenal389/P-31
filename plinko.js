class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.2
        }
       this.body=Bodies.circle(x,y,9,options)
       this.radius=radius;
    World.add(world,this.body) 
   }

   display(){
       var pos=this.body.position;
       ellipseMode(RADIUS)
       fill(255)
       ellipse(pos.x,pos.y,9,9)
   }
}