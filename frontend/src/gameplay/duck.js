import { getRandomWord } from "../user-input/user_input";

class Duck {
  constructor() {
    let xPos, yPos;

    if (Math.random() > 0.5) {
      xPos = 5;
      yPos = Math.random() * (600 - 150);
    } else {
      xPos = Math.random() * (600 - 150);
      yPos = 5;
    }

    this.word = getRandomWord(10);
  }
  
}