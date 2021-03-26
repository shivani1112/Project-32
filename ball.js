class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.08,
			friction:1,
			density:1

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			rectMode(CENTER);
			ellipse( 0,0,this.r, this.r);
			//ellipse(0,0,this.r, this.r);
			pop()
			
    }
}
