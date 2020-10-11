class Enemy{
    constructor(x,y){
        this.enemy=createSprite(x,y,30,30);
        this.enemy.addImage('hi',corona);
        this.enemy.scale=0.2
        this.health=10;
        this.x=x;
        this.y=y;
    }
    shoot(){
        if(frameCount%50===0){
            fill('orange');            
            Ebullets.push(  
              Ebullet = createSprite(this.x,this.y,5,5)
            )
              Ebullet.lifetime=70;
              Ebullet.shapeColor='blue'
              Ebullet.addImage('who',corona);
              Ebullet.scale=0.05
              setTimeout(function(){
                if(Ebullets!==undefined){
                for(var i=0;i<Ebullets.length;i++){
                  Ebullets.splice(i,1)
               }
              }
              },3000)          
        }
          for(var i=0;i<Ebullets.length;i++){
            Ebullets[i].attractionPoint(0.3,player.x+random(-20,20),player.y+random(-20,20));
          }
    }
    destroy(){
        this.enemy.destroy();
        this.enemy.remove();
    }
   
}