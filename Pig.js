class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblility = 255;
  }

  display(){
    //console.log(this.body.speed);

    if(this.body.speed<3){
      super.display();
    } else{
      //console.log("pig is not display");
      World.remove(world, this.body);
      push();
      this.visiblility = this.visiblility -5;
      tint(150, this.visiblility);
      image(this.image, this.body.position.x, this.body.position.y, 50,50);
      pop();
    }
  }
  score(){
    if(this.visiblility<0 && this.visiblility>-1005){
      score++
    }
  }

};