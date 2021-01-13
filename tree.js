class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body=Bodies.circle(x,y,width,height)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
        this.image=loadImage("images/tree.png")
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop()
    }
}