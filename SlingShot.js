class SlingShot{
    constructor(b1,pointB){
        var option = {
            bodyA: b1,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = pointB;
        this.sling = Constraint.create(option);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    
    }
    display(){

        if(this.sling.bodyA){
        var point1 = this.sling.bodyA.position;
        var point2 = this.pointB;

        strokeWeight(5);
        stroke("blue");
        if(point1.x<220){
            strokeWeight(7);
            line(point1.x-20, point1.y, point2.x-10, point2.y);
            line(point1.x-20, point1.y, point2.x+30, point2.y-3);
            image(this.sling3, point1.x-30, point1.y-10, 15,30);
        } else{
            strokeWeight(3);
            line(point1.x+25, point1.y, point2.x-10, point2.y);
            line(point1.x+25, point1.y, point2.x+30, point2.y-3);
            image(this.sling3, point1.x+25, point1.y-10, 15,30);
        }
        image(this.sling1, 200,20);
        image(this.sling2, 170,20);
        

        
    }
        }
        

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}