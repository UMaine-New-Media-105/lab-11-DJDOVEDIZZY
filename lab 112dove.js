https://editor.p5js.org/cyprian.dove/sketches/a41h9WHFk
/*
	enemies[];
    Setup{
    lifespan=3;
    }
    
    Draw{
    Text(color(black)); "Arrow Keys to move, space key to shoot, press space to start"
    Text(color(navy)); "Xpace Invaders"
     background(randomClr);
   player1.move();
   player1.show();
  for (let M = 0; M < 100; M++) {
    meteors[kidShown].move();
    meteors[kidShown].show();
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
    PLAYER MOVES RIGHT BY THIS.X;
  }
   if (keyCode === LEFT_ARROW) {
    PLAYER MOVES LEFT BY -THIS.X;
  }
   if (keyCode === UP_ARROW) {
    PLAYER MOVES UP BY -THIS.Y;
  }
   if (keyCode === DOWN_ARROW) {
    PLAYER MOVES DOWN BY THIS.Y;
  }
    }
    show{
    
    }
    }
    
      class Enemies{
    constructor{
     this.lifespan=3;
  this.x=x;
  this.y=y;
  this.addX=addX
    }
    move{
     this.x=this.x+this.addX
    this.y=this.y+this.addX
   if (mLifespan=== 0) {
  console.log('cleared');
}
    }
    show{
    if meteorDist===player1Width{
    explosion
    }
    }
    }

	*/
