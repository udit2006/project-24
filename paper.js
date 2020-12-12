class Paper 
{
   constructor(x,y,RADIUS)
   {
      
      var options =
      {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body=Bodies.circle(x,y,radius);
      this.radius=radius;
      World.add(world,this.body);
   }

   display()
   { 
      var pos=this.body.position;
      ellipseMode(RADIUS);
      Engine.update(engine);
      fill ("pink");
      ellipse(pos.x,pos.y,this.radius);
   }
}