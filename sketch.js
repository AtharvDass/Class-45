var game,form,player,bullet,Ebullet,vaccine,corona,sprite1,sprite2,sprite3,sprite4,Hsprite,Dsprite,Ssprite;
var gameState='Start';
var playerHealth=20
var bullets=[];
var Ebullets=[];
var enemyGroup=[];
var coins=0;
var damage=1
var damageShow='Show';
var BSpeed=0.6
var speedShow='Show';
var healthShow='Show';
var enemyrate=100;
var damageCount=0;
var speedcount=0;
var damagecost=10;
function preload(){
  vaccine=loadImage('Vaccine.jpg');
  vaccine2=loadImage('Vaccine 3.jpg');
  vaccine3=loadImage('Vaccine 4.jpg');
  vaccine4=loadImage('Vaccine 5.jpg');
  corona=loadImage('Corona.jpg');
  health=loadImage('Health.png');
  Damage=loadImage('Damge.png');
  Drop=loadImage('Drop.jpg')
}
function setup() {
  createCanvas(800,600);
  vaccine2.resize(500,500);
  vaccine3.resize(800,700);
  health.resize(50,50);
  Damage.resize(50,50);
  Drop.resize(5,5)
  game=new Game();
  game.start();
}

function draw() {
  background('black');  
  
  if(gameState==='Play'){
    form.hide();
    game.play();
  }
  if(gameState==='Lose'){
    for(var i=0;i<enemyGroup.length;i++){
      enemyGroup[i].destroy();
    }
    enemyGroup=[];
    Ebullets=[];
    player.destroy();
    gameState='Start';
    game.start();
  }
  if(gameState==='Shop'){
    form.shopB.hide();
    form.play.position(30,560);
    form.shop();
  }
  
  textSize(20);
  fill('blue')
  text('Your Health: '+playerHealth,width/2-30,20);
  fill('yellow')
  text('Coins: '+coins,650,20);
  drawSprites();
}
function checkTouch(obj1,obj2){
  var d=dist(obj1.x,obj1.y,obj2.x,obj2.y);
  if(d<45){
    return true;
  }else{
    return false;
  }
}
