console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  /* ... */
  private contadorMoneda = 0;

  play() {
    this.contadorMoneda++;
    const ruleta1 = Math.random() > 0.5;
    const ruleta2 = Math.random() > 0.5;
    const ruleta3 = Math.random() > 0.5;

    if (ruleta1 && ruleta2 && ruleta3) {
      console.log(`Congratulations!!!.You won ${this.contadorMoneda} coins!!`);
      this.contadorMoneda = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
