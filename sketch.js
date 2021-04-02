//Create variables here
var dogImg, happydogImg;
var database;
var foods, foodStock;
var dog;

function preload()
{
	//load images here
  dogImg = loadImage("sprites/Doggolden.png");
  happydogImg = loadImage("sprites/HappydogGolden1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,80,80)
  dog.addImage(dogImg)
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foods,-1);
  dog.addImage(happydogImg);
}
  drawSprites();
  text("Foodstock=25", 100,250);
  //add styles here

}

function readStock(data){
  foods=data.val();

  database.ref('/').update({
    food:x
  })
}


