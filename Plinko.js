class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        push()
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.x,this.y,10,10);
        pop()
    }
}