import {Component} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-input',
  templateUrl: './game-input.component.html',
  styleUrls: ['./game-input.component.css']
})
export class GameInputComponent {
  choices: string[] = ['Rock.png', 'Paper.png', 'Scissor.png'];

  constructor(private gameService: GameService) {
  }

  selectChoice(choice: string) {
    this.gameService.setUserChoice(choice);
    this.generateComputerChoice();
    this.calculateResult();
  }

  generateComputerChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    const computerChoice = this.choices[randomIndex];
    this.gameService.setComputerChoice(computerChoice);
  }

  calculateResult() {
    const userChoice = this.gameService.getUserChoice();
    const computerChoice = this.gameService.getComputerChoice();

    if (userChoice === computerChoice) {
      this.gameService.setResult(("It's a tie!"));
    } else if (
      (userChoice === 'Rock.png' && computerChoice === 'Scissor.png') ||
      (userChoice === 'Paper.png' && computerChoice === 'Rock.png') ||
      (userChoice === 'Scissor.png' && computerChoice === 'Paper.png')
    ) {
      this.gameService.setResult('You win!');
    } else {
      this.gameService.setResult('Computer wins!');
    }
  }
}
