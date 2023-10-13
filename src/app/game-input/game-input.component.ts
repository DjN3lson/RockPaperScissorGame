import { Component } from '@angular/core';
import {GameService} from "../game.service";
@Component({
  selector: 'app-game-input',
  templateUrl: './game-input.component.html',
  styleUrls: ['./game-input.component.css']
})
export class GameInputComponent {
  userChoice: string = '';

  constructor(private gameService: GameService) { }

  selectChoice(choice: string) {
    this.userChoice = choice;
  }

  playGame() {
    this.gameService.playGame(this.userChoice);
  }
}
