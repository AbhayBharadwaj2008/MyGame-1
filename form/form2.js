class secondForm{

    constructor(){
       this.title = createElement('h1');
       this.stage1 = createButton("stage1");
       this.stage2 = createButton("stage2");
       this.stage3 = createButton("stage3");
       this.stage4 = createButton("stage4");
       this.stage5 = createButton("stage5");
    }
    
    display(){
    
        this.title.html("chose your stage");
        this.title.position(600, 200);
    
        this.stage1.position(650, 300);
        this.stage2.position(700, 300);
        this.stage3.position(750, 300);
        this.stage4.position(800, 300);
        this.stage5.position(850, 300);

        this.stage1.mousePressed(()=>{
          gameState = 2;
          this.stage1.hide()
          this.stage2.hide()
          this.stage3.hide()
          this.stage4.hide()
          this.stage5.hide()
          this.title.hide()
          
        });
        this.stage2.mousePressed(()=>{
            gameState = 3;
            this.stage1.hide()
            this.stage2.hide()
            this.stage3.hide()
            this.stage4.hide()
            this.stage5.hide()
            this.title.hide()
        });
        this.stage3.mousePressed(()=>{
            gameState = 4;
            this.stage1.hide()
            this.stage2.hide()
            this.stage3.hide()
            this.stage4.hide()
            this.stage5.hide()
            this.title.hide()
        });
        this.stage4.mousePressed(()=>{
            gameState = 5;
            this.stage1.hide()
            this.stage2.hide()
            this.stage3.hide()
            this.stage4.hide()
            this.stage5.hide()
            this.title.hide()
        });
        this.stage5.mousePressed(()=>{
            gameState = 6;
            this.stage1.hide()
            this.stage2.hide()
            this.stage3.hide()
            this.stage4.hide()
            this.stage5.hide()
            this.title.hide()
        });
      }
    
    }