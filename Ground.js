class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("white");
      rect(this.x, this.y, this.width, this.height);
    }
  };
