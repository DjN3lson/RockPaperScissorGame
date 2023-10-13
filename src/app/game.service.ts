import {Inject, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  userMove: string;
  userMoveImage: string;
  computerMove: string;
  computerMoveImage: string;
  result: string;

  constructor(@Inject('userMove') userMove: string,
              @Inject('userMoveImage') userMoveImage: string,
              @Inject('computerMove') computerMove: string,
              @Inject('computerMoveImage') computerMoveImage: string,
              @Inject('result') result: string) {

    this.userMove = userMove;
    this.userMoveImage = userMoveImage;
    this.computerMove = computerMove;
    this.computerMoveImage = computerMoveImage;
    this.result = result;
  }

  setUserMove(move: string) {
    this.userMove = move;
    this.userMoveImage = this.getImagePath(move);
  }

  play() {
    const moves: string[] = ['paper', 'rock', 'scissors'];
    this.computerMove = moves[Math.floor(Math.random() * moves.length)];
    this.computerMoveImage = this.getImagePath(this.computerMove);
    this.calculateResult();
  }
  calculateResult(){
    if(this.userMove ===this.computerMove){
      this.result = "It's a tie!";
    }else if((this.userMove === 'paper'
      && this.computerMove === 'rock') ||
      (this.userMove === 'rock' &&
        this.computerMove==='scissor') ||
      (this.userMove === ' scissor'
        && this.computerMove === 'paper')){
      this.result = "You WIN!";
    } else{
      this.result = "You LOST!";
    }
  }
  private getImagePath(move: string): string{
    switch(move){
      case'paper':
        return 'assets/Paper.png';
      case'rock':
        return 'assets/Rock.png';
      case'scissor':
        return 'assets/Scissor.png';
      default:
        return '';
    }
  }
}
