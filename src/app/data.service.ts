import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userChoice: string ='';
  private computerChoice: string='';
  private result: string='';

  setUserChoice(choice:string){
    this.userChoice = choice;
    this.generateComputerChoice();
    this.determineResult();
  }

  getUserChoice(): string{
    return this.userChoice;
  }

  getComputerChoice(): string{
    return this.computerChoice;
  }

  getResult():string{
    return this.result;
  }

  public generateComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random()+choices.length);
    this.computerChoice = choices[randomIndex];
  }

  private determineResult(){
    if(this.userChoice === this.computerChoice){
      this.result = 'It is a tie!';
    }else if(
      (this.userChoice === 'Rock' && this.computerChoice === 'Scissor') ||
      (this.userChoice === 'Paper' && this.computerChoice === 'Rock') ||
      (this.userChoice ==='Scissor' && this.computerChoice === 'Paper')){
        this.result = "User Wins!";
    }else{
      this.result = 'Computer Wins!';
    }
  }

  constructor() { }
}
