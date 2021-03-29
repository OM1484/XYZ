var player,game,form, gameState = 0
var database
var playerCount
var players, distance = 0
var players,car1,car2,car3,car4,cars
function setup(){
    createCanvas(displayWidth,displayHeight);
    
    database=firebase.database()
 game=new Game()
 game.getState()
 game.start()
    

}

function draw(){
   if(playerCount===4){
       game.updateState(1)
   }
   if(gameState===1){
       clear()
       game.play()
   }
}


