class Form{
    constructor(){
        this.input= createInput("Name:");
        this.button= createButton ('Play');
        this.title= createElement ('h2');
    }
    hide(){
        this.button.hide();
        this.input.hide();
    }
    display(){
        this.title.html("Treasure Hunt Game");
        this.title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-50,displayHeight/2-100);
        this.button.position(displayWidth/2+50, displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();

            gameState=1
        })
    }
}