class Form {

    constructor() {
      this.input1 = createInput("Name");
      this.email = createInput("Email");
      this.button = createButton("Submit");
      this.greeting = createElement("h2");
      this.text = createElement("h1", "Lets do a survey on our School Students!!!!");
      this.question1 = createElement("h3", "Q.1. Do you Think we need to have free lunch meals in our school canteen for very poor children?");
      this.radio1= createRadio("h3")
      this.radio1.option("Yes");
      this.radio1.option("No");
      this.question1 = createElement("h3", "Q.2. Do you Think we need to have free lunch meals in our school canteen for very poor children?");
      this.radio2= createRadio("h3")
      this.radio2.option("Yes");
      this.radio2.option("No");
      this.question1 = createElement("h3", "Q.3. Do you Think we need to have free lunch meals in our school canteen for very poor children?");
      this.radio3= createRadio("h3")
      this.radio3.option("Yes");
      this.radio3.option("No");
      this.question1 = createElement("h3", "Q.4. Do you Think we need to have free lunch meals in our school canteen for very poor children?");
      this.radio4= createRadio("h3")
      this.radio4.option("Yes");
      this.radio4.option("No");
      this.question1 = createElement("h3", "Q.5. Do you Think we need to have free lunch meals in our school canteen for very poor children?");
      this.radio5= createRadio("h3")
      this.radio5.option("Yes");
      this.radio5.option("No");
    }
    /*
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  */
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Thank You For Filling Out The Form");
        this.greeting.position(400, 400);
      });
  /*
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  */
    }
  }
  