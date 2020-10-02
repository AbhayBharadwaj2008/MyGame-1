class finalForm{

constructor(){
    this.title = createElement('h1');
    this.restart = createButton("restart");
    this.mainMenu = createButton("mainMenu");
}
display(){
    this.title.html("YOU DED!!");
    this.title.position(600, 200);

    this.restart.position(650, 300);
    this.mainMenu.position(700, 300);

}
}