var cat,cat1,cat2,cat3,cat4;
var mouse,mouse1,mouse2,mouse3,mouse4;
var background;

function preload() {
    background = loadImage("garden.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    cat3 = loadImage("cat3.png");
    cat4 = loadImage("cat4.png");
    mouse1 = loadImage("mouse1.png");
    mouse2 = loadImage("mouse2.png");
    mouse3 = loadImage("mouse3.png");
    mouse4 = loadImage("mouse4.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    cat = addImage("cat1");
    cat = createSprite(800,200);
    background = addImage("background");
    background = createSprite(500,400);
    mouse = addImage("mouse1");
    mouse = createSprite(200,200);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyDown(LEFT_ARROW)){
    cat.x = cat.x - 5;
    cat.changeAnimation("cat2");
    cat.changeAnimation("cat3");
    mouse.changeAnimation("mouse2");
    mouse.changeAnimation("mouse3");
}
if(cat.isTouching(mouse)){
    cat.velocityX = 0;
    mouse.changeAnimation("mouse4");
}


  //For moving and changing animation write code here


}
