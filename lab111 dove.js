https://editor.p5js.org/cyprian.dove/sketches/N3ZGKG7cv
/*
	meteors[];
    addX=random(1,4);
    addY=random(1,2);
    
    Setup{
    frameRate();
    player1 = new Player(400, 400);
    mLifespan=3;
    }
    
    Draw{
   background(randomClr);
   player1.move();
   player1.show();
  for (let M = 0; M < 100; M++) {
    meteors[kidShown].move();
    meteors[kidShown].show();
  }
    }
    
function keyPressed() {
  if (keyCode === SPACE) {
    BEGIN GAME;
  }
  }
      class Player{
    constructor{
  this.lifespan=3;
  this.x=x;
  this.y=y;
    
    }
     move{
     if (keyCode === SPACE) {
    PLAYER SHOOTS BULLET;
  }
     if (keyCode === RIGHT_ARROW) {
    PLAYER ROTATES RIGHT BY THIS.X;
  }
   if (keyCode === LEFT_ARROW) {
    PLAYER ROTATES LEFT BY -THIS.X;
  }
    }
    show{
    push();
    drawShip();
    pop();
    }
    }
    
      class Meteors{
    constructor{
    this.lifespan=4;
  this.x=x;
  this.y=y;
  this.addX=addX
  this.addY=addY
    }
    move{
    for (let i = 0; i < meteors.length; i++) {
  meteors[Meteors];
}
    this.x=this.x+this.addX
    this.y=this.y+this.addX
   if (mLifespan=== 0) {
  console.log('cleared');
}
    }
    show{
    push();
    beginSHAPE();
    endSHAPE();
     if (mLifespan===2) {
  spliceMeteor();
}
 if (mLifespan=== 1) {
  spliceMeteor();
}
 if (mLifespan=== 0) {
  spliceMeteor();
}
   pop(); 
    }
    }

	*/
