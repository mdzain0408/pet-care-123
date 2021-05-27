var s = "start";
var screen,screen1;
var database
var count,store = 0,input = "",tittle,num = 0,numberTask = 0;

var formInput ,button, clear ,serial = 0;
var reset,e_2;
len = [];
var newText;
var pos = 230
var display,clear;

function preload()
{
screen1 = loadImage("images/to do backgrouns.jpg");

}

function setup() {

 
  //text(len[0],400,350)
createCanvas(800,700)
background(screen1)
database = firebase.database();

//screen = createSprite(0,100,1600,1300);
//screen.addImage(screen1);
//screen.scale = 3
play = new updates();
form1 = new form();
form1.display();
  
}


function draw() {  


play.referCount();





  drawSprites();

 fill("red")
textSize(15)
  
text("*press ENTER to add a task", 10, 580)
text("*press DONE to display tasks", 10, 600) 
text("*press CLEAR to erase the recent tasks entered", 10, 620);
text("*press RESET to clear and add fresh tasks", 10, 640)
form1.done();


  

}






