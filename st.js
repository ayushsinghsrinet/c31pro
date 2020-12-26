class st{
    constructor(x,y,r){
        var oh={
            isStatic:true,
            restitution:0.3
        }
        this.x=x
        this.y=y
        this.r=r
            this.body=Bodies.circle(this.x,this.y,this.r,oh)
            //this.color=color(random(255),random(255),random(255))
            World.add(world,this.body)
        
    }
    display(){
      fill(255)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)
    }
}