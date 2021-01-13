class Boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
          }

          this.body=Bodies.rectangle(x,y,width,height,options)
          this.x=x
          this.y=y
          this.height=height
          this.width=width
          World.add(world,this.body)
          this.image=loadImage("images/boy.png")

    }

   display(){
       push()
       imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,0,0)
       this.image.scale=0.5
       pop()
   }
}