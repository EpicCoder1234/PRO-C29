class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.width = width
    this.height = height
  }
  display(){
    var pos = this.body.position
    push();
    rectMode(CENTER);
    translate(pos.x,pos.y);
    fill("blue")
    rect(0,0,this.width, this.height);
    pop();
  }
};
