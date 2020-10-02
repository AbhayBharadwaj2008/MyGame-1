class firstForm{

constructor(){
   this.play = createButton("PLAY")
   this.title = createElement('h1');
}

display(){

    this.title.html("Get The CHOCLATE!!");
    this.title.position(600, 100);

    this.play.position(740, 400);
   
    this.play.mousePressed(()=>{
      gameState = 1;
      this.title.hide()
      this.play.hide()
    });

  }

}