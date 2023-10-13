import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private userChoice: string ='';
  private computerChoice: string='';
  private result: string='';

  setUserChoice(choice: string) {
    this.userChoice = choice;
    this.generateComputerChoice();
    this.determineResult();
  }

  getUserChoice(): string {
    return this.userChoice;
  }

  getComputerChoice(): string {
    return this.computerChoice;
  }

  getResult(): string {
    return this.result;
  }

  private generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.computerChoice = choices[randomIndex];
  }

  private determineResult() {
    if (this.userChoice === this.computerChoice) {
      this.result = 'It\'s a tie!';
    } else if (
      (this.userChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.userChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.userChoice === 'scissors' && this.computerChoice === 'paper')
    ) {
      this.result = 'You win!';
    } else {
      this.result = 'Computer wins!';
    }
  }
}
