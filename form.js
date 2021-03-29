class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("Enter Name")
        this.button=createButton("Play")
        this.greeting=createElement("h2")
    }
    display(){   
        this.title.html("Car Racing")
        this.title.position(width/2-50,0)
        this.input.position(width/2-40,height/2-180)
        
       
        this.button.position(width/2+30,height/2)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=  this.input.value()
            playerCount++
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateInfo()   
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(width/2-70,height/4)
        })

        
    }
}
