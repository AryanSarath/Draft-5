class Rope {
    constructor(bodyA, pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.5,
            length : 60,
        }
        this.pointB  = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        stroke (255);
        strokeWeight (4);
        line (point.x, pointA.y, pointB.x, pointB.y);
    }
} 