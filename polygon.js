class Polygon{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.04,
            density:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
}