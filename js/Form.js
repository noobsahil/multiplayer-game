class Form {
  constructor() {
    
    this.input=createInput("").attribute("placeholder","Enter your Name")
    this.button=createButton("click")
    this.titleimage=createImg("./assets/title.png","game title")
    this.greeting=createElement("h1")

  }

  setPosition(){
    this.input.position(width/2-100,height/2-80)
    this.button.position(width/2-85,height/2-25)
    this.titleimage.position(width/2-500,height/2-250)
    this.greeting.position(width/2-250,height/2+100)
  }

   setStyle(){
    this.input.class("customInput")
    this.button.class("customButton")
    this.titleimage.class("gameTitle")
    this.greeting.class("greeting")
  }

  handlemousePressesd(){
    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
      var message=`Hello ${this.input.value()}
      </br> wait for other player to join...`
      this.greeting.html(message)

    })

  }

  display(){
    this.setPosition()
    this.setStyle()
    this.handlemousePressesd()

  }
}
