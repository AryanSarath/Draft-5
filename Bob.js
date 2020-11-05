class Bob{
    constructor(x, y, radius){
        var options = {
            restitution : 0.3,
            isstatic: false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        circle(pos.x, pos.y, this.radius);
    }
}