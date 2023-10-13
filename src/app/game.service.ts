import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private userChoice: string;
  private computerChoice: string;
  private result: string;

setUserChoice(choice:string){
  this.userChoice = choice;
}
getUserChoice(){
  return this.userChoice;
}
setComputerChoice(choice:string){
  this.computerChoice = choice;
}
getComputerChoice(){
  return this.computerChoice;
}
setResult(result: string){
  this.result = result;
}
getResult(){
  return this.result;
}

  constructor(userChoice: string, computerChoice: string, result: string) {
    this.userChoice = userChoice;
    this.computerChoice = computerChoice;
    this.result = result;
  }
}
