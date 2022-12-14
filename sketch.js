// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x; 
    this.y = y; 
    this.img = theImage;
    this.speed = 5; 
  }

  update() {
    if (keyIsDown(87)) { //w
      this.y -= this.speed;
    }
    if (keyIsDown(83)) { //s
      this.y += this.speed;
    }
    if (keyIsDown(68)) { //d
      this.x += this.speed;
    }
    if (keyIsDown(65)) { //a
      this.x -= this.speed;
    }

    // if doing extra for experts, show bullet(s)

  }

  display() {
    image(this.img, this.x, this.y); 
  }

  handleKeyPress() {
    if (keyPressed("SPACE_BAR")){
      let someBullet = new Bullet(bulletImage);
      newBullets.push(someBullet);
    }
  }
}
let newBullets = []; 

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = enterprise.x; 
    this.y = enterprise.y; 
    this.dx = 5;
    this.dy = 5;
    this.img = theImage;
  }

  update() {
    this.y --; 
  }

  display() {
    image(this.img, this.x, this.y); 
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

