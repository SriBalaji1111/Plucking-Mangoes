class Mango {
	constructor(x,y,radius)
	{
		var options = {
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.radius = radius 
		this.image = loadImage("imgs/mango.png")
		this.body = Bodies.circle(x,y, this.radius, options)
		World.add(world, this.body);
	}

	display()
	{
		var pos = this.body.position;	
		push()
		translate(pos.x, pos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2)
		pop()
 }
}