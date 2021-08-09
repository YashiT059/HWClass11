var pathImg, path;
var boy, boyRunning
var invs1
var invs2

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyRunning = loadAnimation ("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
    // create moving BG
  path = createSprite (200,200)
  path.addImage (pathImg)
  path.scale = 1.2;
  path.velocityY = 4

      // creating boy
boy = createSprite(200,325,);
boy.addAnimation("running", boyRunning);
edges = createEdgeSprites();
boy.scale= 0.07;

    //create invs boundaries
   invs1 = createSprite (15,200,100,600)
   invs2 = createSprite (370,200,60,600)
    // make boundaries invsible
    invs2.visible = false
    invs1.visible = false

} 

function draw() {

  background(0);

  boy.x= World.mouseX;

  if (path.y > 400) {
    path.y = path.height/4

  }


//collide w/ boundaries
boy.collide (invs1)
boy.collide (invs2)

  drawSprites();
}
