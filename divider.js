class plinko {
    constructor(x,y,r){
        var ok={
            isStatic:true,
            restitution:0.5
        }
        this.x=x
        this.y=y
        this.r=r
            this.body=Bodies.circle(this.x,this.y,this.r,ok)
            
            World.add(world,this.body)
        
    }
    display(){
      fill("white")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)
    }
}