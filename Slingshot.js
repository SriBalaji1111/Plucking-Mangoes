class Slingshot{
    constructor(bodyA, pointB){
        var option={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        
            this.bodyA = bodyA
            this.pointB = pointB
            this.slingshot=Constraint.create(option)
            World.add(world,this.slingshot)
        }
    
        attach(bodyA){
            this.slingshot.bodyA = bodyA;
        }
    
        fly()
        {
            this.slingshot.bodyA = null;
        }
    
        display()
        {
            if(this.slingshot.bodyA)
            {
                var pointA = this.bodyA.position;
                var pointB = this.pointB
    
                strokeWeight(2);		
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }
