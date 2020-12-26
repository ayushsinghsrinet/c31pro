class bucket {
    constructor(x,y,width,height){
        var no={
            isStatic:true,
        }
this.body=Bodies.rectangle(x,y,width,height,no)
this.width=width;
this.height=height
World.add(world,this.body)
    }
    display(){
        fill(255)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}