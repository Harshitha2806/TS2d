class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        push ();
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        pop ();
    }
    
}