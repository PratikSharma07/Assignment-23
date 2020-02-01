var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10;
function setup() {
  createCanvas(650,400);
}

function draw() {
  background(0);
  rect1=createSprite(50,400,50,600);
  rect2=createSprite(95,400,25,200);
  rect3=createSprite(140,400,25,150);
  rect4=createSprite(195,400,50,300);
  rect5=createSprite(240,400,25,200);
  rect6=createSprite(295,400,50,450);
  rect7=createSprite(340,400,50,450);
  rect8=createSprite(395,400,25,250);
  rect9=createSprite(440,400,50,300);
  rect10=createSprite(495,400,50,600);
  ellipse(195,225,50,50);
  ellipse(140,300,50,50);
  ellipse(50,60,70,70);
  ellipse(495,60,70,70);

  drawSprites();
}