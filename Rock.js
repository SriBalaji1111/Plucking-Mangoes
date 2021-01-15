class Rock
{
	constructor(x,y,radius)
	{
		var options = {
			isStatic:false,
			
			}
		this.radius = radius;
		this.image = loadImage("imgs/stone.png");
		this.body = Bodies.circle(x,y,radius/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos = this.body.position;		 
			push()
			translate(pos.x, pos.y);
			fill(255,0,255)
      imageMode(CENTER);
      ellipseMode(RADIUS)
			image(this.image, 0,0,this.radius, this.radius)
			pop()
			
	}

}