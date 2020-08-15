class Ground{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}