class Game{
    constructor(){
    }

    start(){
        player=new Player();
        form=new Form();
        form.display();
        form.Bspeed.hide();
        form.Health.hide();
        form.damage.hide();
        form.img1.hide();
        form.img2.hide();
        form.img3.hide();
        form.Reset.hide();
    }
    play(){
        player.move();
        player.shoot();

        form.Bspeed.hide();
        form.Health.hide();
        form.damage.hide();
        form.img1.hide();
        form.img2.hide();
        form.img3.hide();
        form.Reset.hide();
        if(frameCount%enemyrate===0){
            enemyGroup.push(new Enemy(random(0,800),random(0,600)))
        }

        if(enemyGroup!==undefined){
            for(var i=0;i<enemyGroup.length;i++){
                enemyGroup[i].shoot();
            }
        }

        if(bullets!==undefined&&enemyGroup!==undefined){
            for(var i=0;i<bullets.length;i++){
              for(var j=0;j<enemyGroup.length;j++){
                if(checkTouch(bullets[i],enemyGroup[j])){
                  enemyGroup[j].health=enemyGroup[j].health-damage;
                  console.log(enemyGroup[j].health);
                  console.log('hit');
                  bullets[i].position.x=100000
                }else{
                  enemyGroup[j].health=enemyGroup[j].health
                }
                if(enemyGroup[j].health<=0){
                  enemyGroup[j].lifetime=1;
                  enemyGroup[j].destroy();
                  enemyGroup.splice(j,1);
                  playerHealth=playerHealth+1
                  coins=coins+Math.round(100)
                }
              }
            }
          }
          if(playerHealth>20){
            enemyrate=90
          }
          if(playerHealth>30){
            enemyrate=80
          }
          if(playerHealth>40){
            enemyrate=70
          }
          if(playerHealth>50){
            enemyrate=60
          }
          if(Ebullets!==undefined){
            for(var i=0;i<Ebullets.length;i++){
              if(checkTouch(player,Ebullets[i])){
                Ebullets[i].lifetime=1;
                Ebullets[i].destroy();
                Ebullets[i].remove();
                Ebullets[i].position=(1000000,20)
                Ebullets.splice(i,1);
                playerHealth=playerHealth-1;
                
              }else{
                playerHealth=playerHealth
              }
              if(playerHealth<=0){
                console.log('You lose')
                damage=1
                BSpeed=0.6
                gameState='Lose'
                playerHealth=20;
                damageCount=0;
                speedcount=0;
                damagecost=10;
                enemyrate=100
              }
            }
          }

    }
}